"use client";

import React from "react";
import { motion } from "framer-motion";

export const TestimonialsHeader = () => (
  <div className="text-center mb-16 md:mb-20">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 shadow-sm text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600 mb-6"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      Wall of Love
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display text-neutral-900 mb-5 leading-[1.05] tracking-tighter"
    >
      Loved by teams <span className="font-bold text-blue-200">that ship!</span>
    </motion.h2>
    <p className="text-white  font-body max-w-xl mx-auto text-base md:text-lg leading-6 tracking-tight">
      Real results from founders, growth leads, and CMOs scaling with autonomous AI.
    </p>
  </div>
);
