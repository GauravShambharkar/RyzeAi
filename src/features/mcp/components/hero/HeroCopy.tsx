"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const HeroCopy = () => (
  <>
    {/* Brand mark above headline */}
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/15 backdrop-blur-md px-3 py-1 text-xs text-white shadow-sm"
    >
      <Sparkles className="w-3.5 h-3.5 text-[#ffb59c]" />
      <span className="tracking-wide">MCP for Claude · Live</span>
    </motion.div>

    {/* Dominant 3–4 line headline */}
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="font-display text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem] leading-[1.02] tracking-tighter text-white mt-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
    >
      Connect your <br />
      ad accounts to <br />
      <span className="italic text-[#ffb59c]">Claude</span> <br />
      in 1-click.
    </motion.h1>

    {/* Subtle supporting subtext */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-6 max-w-md text-sm md:text-base text-white/75 font-body leading-6 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
    >
      Analyze and manage your ads, and schedule actions — all from Claude.
    </motion.p>
  </>
);
