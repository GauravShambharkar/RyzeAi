"use client";

import React from "react";
import { motion } from "framer-motion";

export const FAQHeader = () => (
  <div className="text-center mb-16">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      FAQ
    </motion.div>
    <h2 className="text-4xl md:text-5xl font-display mb-5 text-white leading-[1.05]">
      The answers <span className="italic">before</span> you ask
    </h2>
    <p className="text-neutral-400 font-body text-base md:text-lg leading-relaxed">
      Everything you need to know about Ryze&apos;s autonomous growth platform.
    </p>
  </div>
);
