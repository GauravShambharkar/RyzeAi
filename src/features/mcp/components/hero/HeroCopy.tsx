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
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-1 text-xs text-white/80"
    >
      <Sparkles className="w-3.5 h-3.5 text-[#e35a32]" />
      <span>MCP for Claude · Live</span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white mt-4"
    >
      Connect your ad accounts to <span className="italic text-[#e35a32]">Claude</span> in <br /> 1-click
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-5 max-w-xl text-sm md:text-base text-white/60 font-body leading-relaxed"
    >
      Analyze and manage your ads, and schedule actions — all from Claude.
    </motion.p>
  </>
);
