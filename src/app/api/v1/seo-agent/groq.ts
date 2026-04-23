// Thin wrapper around the Groq Chat Completions API (OpenAI-compatible shape).
// Keeps handlers free of network details and gives GET/POST a shared
// success/error shape.

const DEFAULT_MODEL = "llama-3.3-70b-versatile";
const ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

export type ChatRole = "user" | "assistant";
export type ChatTurn = { role: ChatRole; text: string };

export type ChatResult =
  | { ok: true; text: string }
  | { ok: false; status: number; error: string };

const getApiKey = () => process.env.GROQ_API_KEY ?? "";

export const isConfigured = () => Boolean(getApiKey());
export const modelName = () => DEFAULT_MODEL;

export const callChat = async (
  turns: ChatTurn[],
  systemInstruction?: string
): Promise<ChatResult> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return { ok: false, status: 500, error: "Missing GROQ_API_KEY" };
  }

  if (turns.length === 0) {
    return { ok: false, status: 400, error: "No conversation turns provided" };
  }

  const messages: { role: "system" | ChatRole; content: string }[] = [];
  if (systemInstruction) {
    messages.push({ role: "system", content: systemInstruction });
  }
  for (const t of turns) {
    messages.push({ role: t.role, content: t.text });
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages,
        temperature: 0.6,
        top_p: 0.9,
        max_tokens: 1024,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      const friendly =
        res.status === 429
          ? "Groq rate limit hit — wait a moment and try again."
          : res.status === 401
            ? "Groq API key is invalid or expired."
            : `Groq API ${res.status}: ${detail.slice(0, 200)}`;
      return { ok: false, status: res.status, error: friendly };
    }

    const json = await res.json();
    const text: unknown = json?.choices?.[0]?.message?.content;
    if (typeof text !== "string") {
      return { ok: false, status: 502, error: "Unexpected Groq response shape" };
    }
    return { ok: true, text };
  } catch (err) {
    return {
      ok: false,
      status: 502,
      error: err instanceof Error ? err.message : "Groq call failed",
    };
  }
};
