"use client";

import React from "react";
import { motion } from "framer-motion";

export const FeaturesHeader = () => (
  <div className="mb-16 md:mb-20 max-w-3xl">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
    >
      <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
      Feature matrix
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-[1.05] tracking-tight"
    >
      Everything you need to run{" "}
      <span className="italic text-neutral-400">paid ads.</span>
    </motion.h2>
  </div>
);
