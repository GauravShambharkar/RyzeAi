import { NextRequest, NextResponse } from "next/server";
import { callGemini } from "./gemini";

const SYSTEM_INSTRUCTION =
  "You are Ryze SEO Agent — a concise, data-driven SEO consultant. " +
  "Keep replies tight: 2–3 sentences unless the user asks for depth. " +
  "Use metrics and concrete numbers whenever possible.";

type Body = { prompt?: unknown };

// POST /api/v1/seo-agent — accepts { prompt: string }, returns { reply: string }.
export const handlePost = async (req: NextRequest) => {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  if (!prompt) {
    return NextResponse.json(
      { error: "Field 'prompt' is required and must be a non-empty string." },
      { status: 400 }
    );
  }

  const result = await callGemini(prompt, SYSTEM_INSTRUCTION);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ reply: result.text });
};
