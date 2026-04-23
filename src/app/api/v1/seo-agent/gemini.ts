// Thin wrapper around the Gemini REST API. Keeps handlers free of network
// details and gives GET/POST a shared success/error shape.

const DEFAULT_MODEL = "gemini-2.0-flash";
const ENDPOINT = (model: string) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

export type GeminiRole = "user" | "model";
export type GeminiTurn = { role: GeminiRole; text: string };

export type GeminiResult =
  | { ok: true; text: string }
  | { ok: false; status: number; error: string };

const getApiKey = () => process.env.NEXT_GENIMI_API_KEY ?? "";

export const isConfigured = () => Boolean(getApiKey());
export const modelName = () => DEFAULT_MODEL;

export const callGemini = async (
  turns: GeminiTurn[],
  systemInstruction?: string
): Promise<GeminiResult> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return { ok: false, status: 500, error: "Missing NEXT_GENIMI_API_KEY" };
  }

  if (turns.length === 0) {
    return { ok: false, status: 400, error: "No conversation turns provided" };
  }

  try {
    const res = await fetch(`${ENDPOINT(DEFAULT_MODEL)}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: turns.map((t) => ({
          role: t.role,
          parts: [{ text: t.text }],
        })),
        ...(systemInstruction && {
          systemInstruction: { parts: [{ text: systemInstruction }] },
        }),
        generationConfig: {
          temperature: 0.6,
          topP: 0.9,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return {
        ok: false,
        status: 502,
        error: `Gemini API ${res.status}: ${detail.slice(0, 200)}`,
      };
    }

    const json = await res.json();
    const text: unknown = json?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (typeof text !== "string") {
      return { ok: false, status: 502, error: "Unexpected Gemini response shape" };
    }
    return { ok: true, text };
  } catch (err) {
    return {
      ok: false,
      status: 502,
      error: err instanceof Error ? err.message : "Gemini call failed",
    };
  }
};
