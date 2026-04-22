"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const HeroPreview = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="relative"
    >
      <div className="relative rounded-3xl border border-black/5 bg-white shadow-[0_40px_100px_-24px_rgba(20,20,20,0.35)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-black/5 bg-neutral-50">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-[11px] text-neutral-500 font-mono">claude.ai / ryze-mcp · live audit</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Recording
          </span>
        </div>

        <video
          src="/assets/mcp-hero-audit.webm"
          autoPlay={!shouldReduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Claude running a Google Ads account audit through the Ryze MCP"
          className="block w-full h-auto bg-neutral-100"
        />
      </div>
    </motion.div>
  );
};
