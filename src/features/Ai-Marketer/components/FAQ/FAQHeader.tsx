"use client";

import React from "react";
import { motion } from "framer-motion";

export const FAQHeader = () => (
  <div className="text-center mb-16">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 shadow-sm text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600 mb-6"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      FAQ
    </motion.div>
    <h2 className="text-4xl md:text-5xl font-display mb-5 text-neutral-900 leading-[1.05] tracking-tighter">
      The answers <span className="italic text-emerald-700">before</span> you ask
    </h2>
    <p className="text-neutral-600 font-body text-base md:text-lg leading-6 tracking-tight">
      Everything you need to know about Ryze&apos;s autonomous growth platform.
    </p>
  </div>
);
