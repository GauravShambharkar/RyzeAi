import { NextRequest, NextResponse } from "next/server";
import { callChat, type ChatTurn } from "./groq";

const buildSystemInstruction = (domain?: string) => {
  const target = domain?.trim();
  return [
    "You are Ryze SEO Agent — a senior, data-driven SEO consultant.",
    "You help the user improve organic visibility, rankings, content strategy,",
    "technical SEO, and keyword targeting.",
    "",
    target
      ? `The user's target website is: ${target}. Always reason in the context of that domain unless the user explicitly points to a different one.`
      : "If the user references a specific website, anchor your answer to that domain.",
    "",
    "Response rules:",
    "- Be concise and concrete. Default to 2–4 short paragraphs or a tight bullet list.",
    "- Lead with the answer, then the reasoning.",
    "- When giving an audit, organize as: Findings → Impact → Fix (in that order).",
    "- When suggesting keywords, give intent and rough difficulty tier (easy / medium / hard) — never invent exact search volumes.",
    "- When numbers aren't available, say so explicitly instead of guessing.",
    "- Prefer actionable next steps over generic theory.",
    "- No filler, no apologies, no repeating the question back.",
    "",
    "Formatting rules (Markdown, GitHub-flavored):",
    "- Use ## for section headings, ### for subsections. No H1 — the UI already has one.",
    "- Use bullet lists for findings or options, numbered lists only for ordered steps.",
    "- Use a pipe table ONLY when comparing 3+ items across 2+ attributes (e.g. keyword lists, competitor comparisons). Otherwise use bullets.",
    "- Use `backticks` for URLs, file paths, tags (e.g. `<title>`, `robots.txt`), and code. Use triple backticks for multi-line code.",
    "- Use **bold** for the one-word verdict of each finding (e.g. **Critical**, **Quick win**). Don't bold whole sentences.",
    "",
    "Status tags (REQUIRED for audit findings and any per-item verdict):",
    "- Prefix the line with one of exactly three tags: [OK], [FIX], or [WARN].",
    "- [OK] = already well-optimized, no action needed.",
    "- [FIX] = broken / missing / actively hurting rankings — must address.",
    "- [WARN] = suboptimal or worth reviewing, but not urgent.",
    "- Place the tag at the very start of the line, before the finding. Example:",
    "  - [FIX] Homepage is missing a meta description.",
    "  - [OK] Title tag is 58 chars — well within limit.",
    "  - [WARN] H1 is duplicated on two templates.",
    "- Use these tags sparingly in free-form answers; use them consistently in audits, checklists, and anywhere you're rating something.",
  ].join("\n");
};

type IncomingMessage = { role?: unknown; content?: unknown };
type Body = {
  prompt?: unknown;
  messages?: unknown;
  domain?: unknown;
};

const toTurns = (body: Body): ChatTurn[] | null => {
  if (Array.isArray(body.messages)) {
    const turns: ChatTurn[] = [];
    for (const m of body.messages as IncomingMessage[]) {
      const role = m?.role;
      const content = m?.content;
      if (typeof content !== "string" || !content.trim()) continue;
      if (role === "user") turns.push({ role: "user", text: content });
      else if (role === "assistant") turns.push({ role: "assistant", text: content });
    }
    return turns.length > 0 ? turns : null;
  }

  if (typeof body.prompt === "string" && body.prompt.trim()) {
    return [{ role: "user", text: body.prompt.trim() }];
  }

  return null;
};

// POST /api/v1/seo-agent
// Accepts either:
//   { prompt: string, domain?: string }
//   { messages: [{role:'user'|'assistant', content:string}], domain?: string }
// Returns { reply: string }.
export const handlePost = async (req: NextRequest) => {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const turns = toTurns(body);
  if (!turns) {
    return NextResponse.json(
      { error: "Provide either 'prompt' (string) or 'messages' (array)." },
      { status: 400 }
    );
  }

  const domain = typeof body.domain === "string" ? body.domain : undefined;

  const result = await callChat(turns, buildSystemInstruction(domain));

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ reply: result.text });
};
