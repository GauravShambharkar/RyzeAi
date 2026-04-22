"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const HeroCopy = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 backdrop-blur-md px-3 py-1 text-xs text-white shadow-sm"
    >
      <Sparkles className="w-3.5 h-3.5 text-[#ffb59c]" />
      <span>MCP for Claude · Live</span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white mt-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
    >
      Connect your ad accounts to <span className="italic text-[#ffb59c]">Claude</span> in <br /> 1-click
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-5 max-w-xl text-sm md:text-base text-white/80 font-body leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
    >
      Analyze and manage your ads, and schedule actions — all from Claude.
    </motion.p>
  </>
);
