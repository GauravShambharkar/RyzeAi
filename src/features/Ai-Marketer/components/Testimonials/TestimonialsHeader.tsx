"use client";

import React from "react";
import { motion } from "framer-motion";

export const TestimonialsHeader = () => (
  <div className="text-center mb-16 md:mb-20">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      Wall of Love
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display text-white mb-5 leading-[1.05]"
    >
      Loved by teams <span className="italic">that ship</span>
    </motion.h2>
    <p className="text-neutral-400 font-body max-w-xl mx-auto text-base md:text-lg leading-relaxed">
      Real results from founders, growth leads, and CMOs scaling with autonomous AI.
    </p>
  </div>
);
