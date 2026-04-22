"use client";

import { useGlobalAuthGuard } from "@/features/seo-agent/hooks/authGuard.hook";

/**
 * Headless guard component. Mount once in the root layout.
 * Runs the auth redirect logic on every pathname change.
 */
export const GlobalAuthGuard = () => {
  useGlobalAuthGuard();
  return null;
};
