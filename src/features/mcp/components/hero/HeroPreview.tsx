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
      <div className="relative rounded-2xl border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] text-white/40 font-mono">claude.ai / ryze-mcp · live audit</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] text-emerald-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
          className="block w-full h-auto bg-[#0b0b0b]"
        />
      </div>
    </motion.div>
  );
};
