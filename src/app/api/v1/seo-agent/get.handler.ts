import { NextResponse } from "next/server";
import { isConfigured, modelName } from "./gemini";

// GET /api/v1/seo-agent — lightweight health/status probe.
// Returns whether the upstream model is configured and reachable-by-config.
export const handleGet = async () =>
  NextResponse.json({
    status: "ok",
    model: modelName(),
    ready: isConfigured(),
    timestamp: new Date().toISOString(),
  });
