import { NextRequest, NextResponse } from "next/server";
import { callChat, type ChatTurn } from "./groq";

const KNOWN_CONNECTIONS: Record<string, string> = {
  gsc: "Google Search Console (impressions, clicks, CTR, average position, top queries, top pages)",
  ga4: "Google Analytics 4 (sessions, users, engagement, conversions, traffic sources)",
  ahrefs: "Ahrefs (backlinks, referring domains, domain rating, keyword difficulty, SERP positions)",
  semrush: "SEMrush (keyword research, organic traffic estimates, competitor analysis, paid/organic positions)",
};

type PropertyContext = {
  domain?: string;
  label?: string;
  connections?: string[];
};

const buildSystemInstruction = (ctx: PropertyContext) => {
  const target = ctx.domain?.trim();
  const label = ctx.label?.trim();
  const connectedNames = (ctx.connections ?? [])
    .filter((c) => KNOWN_CONNECTIONS[c])
    .map((c) => `- ${KNOWN_CONNECTIONS[c]}`);

  const propertyLine = target
    ? label
      ? `The user's active property is: ${target} (${label}). Always reason in the context of that domain unless the user explicitly points to a different one.`
      : `The user's active property is: ${target}. Always reason in the context of that domain unless the user explicitly points to a different one.`
    : "The user hasn't selected an active property yet. If they reference a specific website, anchor your answer to that domain. Otherwise, recommend they add one at /seo-agent/connect.";

  const connectionsBlock =
    connectedNames.length > 0
      ? [
          "",
          "Connected data sources (the user has granted access to these for this property):",
          ...connectedNames,
          "",
          "Rules for connected sources:",
          "- You may reference these sources by name when giving advice (e.g. \"Based on GSC data...\", \"Per GA4 engagement metrics...\").",
          "- NEVER invent specific numbers (impressions, sessions, KD scores, etc.). If the user hasn't provided real figures in the conversation, say so and ask them to share a screenshot or paste the numbers.",
          "- Use the connections to shape HOW you'd answer, not to fabricate WHAT the data shows.",
        ]
      : [
          "",
          "No data sources are connected for this property yet.",
          "- When a question would benefit from real data (rankings, traffic, backlinks), note which integration would answer it (GSC, GA4, Ahrefs, SEMrush) and suggest the user connect it at /seo-agent/connect.",
          "- Still provide the best reasoning you can from general SEO knowledge.",
        ];

  return [
    "You are Ryze SEO Agent — a senior, data-driven SEO consultant.",
    "You help the user improve organic visibility, rankings, content strategy,",
    "technical SEO, and keyword targeting.",
    "",
    propertyLine,
    ...connectionsBlock,
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
    "",
    "Suggested next actions (REQUIRED when your response surfaces anything to fix or improve):",
    "- After the main response, append a block delimited exactly by `[ACTIONS]` and `[/ACTIONS]` on their own lines.",
    "- Inside the block, list 2–4 short imperative prompts the user could send next to act on your findings.",
    "- Each action goes on its own line prefixed with `- ` (dash + space), followed by an urgency tag, then the action text.",
    "- Urgency tag is one of exactly three values: `[HIGH]`, `[MED]`, `[LOW]`. Place the tag immediately after the dash, before the text.",
    "  - [HIGH] = broken, missing, or actively hurting rankings — the user should work on this first.",
    "  - [MED]  = should address soon, but not blocking — moderate priority.",
    "  - [LOW]  = nice-to-have, growth opportunity, polish — safe to defer.",
    "- Urgency must match the severity of the underlying finding. A [FIX] finding should produce a [HIGH] action. A [WARN] finding usually maps to [MED]. Pure-opportunity improvements (content expansion, keyword research) are typically [LOW].",
    "- Each action text must be self-contained (readable without context) and ≤ 80 characters. No trailing punctuation besides `?` if it's a question.",
    "- If the response is purely informational with nothing to fix/improve, OMIT the block entirely. Do not emit an empty one.",
    "- The block must be the very last thing in your message — nothing after `[/ACTIONS]`.",
    "",
    "Example action block:",
    "[ACTIONS]",
    "- [HIGH] Add the missing meta description to the homepage",
    "- [HIGH] Rewrite the duplicated H1 on the product template",
    "- [MED] Suggest 3 internal link targets from the blog",
    "- [LOW] Draft 5 blog topic ideas around the core keyword",
    "[/ACTIONS]",
  ].join("\n");
};

type IncomingMessage = { role?: unknown; content?: unknown };
type Body = {
  prompt?: unknown;
  messages?: unknown;
  domain?: unknown;
  label?: unknown;
  connections?: unknown;
};

const toConnections = (raw: unknown): string[] | undefined => {
  if (!Array.isArray(raw)) return undefined;
  const list = raw.filter((c): c is string => typeof c === "string");
  return list.length > 0 ? list : undefined;
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

  const context: PropertyContext = {
    domain: typeof body.domain === "string" ? body.domain : undefined,
    label: typeof body.label === "string" ? body.label : undefined,
    connections: toConnections(body.connections),
  };

  const result = await callChat(turns, buildSystemInstruction(context));
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ reply: result.text });
};
