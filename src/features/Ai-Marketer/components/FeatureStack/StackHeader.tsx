"use client";

import React from "react";
import { motion } from "framer-motion";

export const StackHeader = () => (
  <div className="mb-20 text-center">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
    >
      <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
      Full stack
    </motion.div>
    <h2 className="text-3xl md:text-5xl font-display mb-5 text-white leading-[1.05]">
      Everything built for <span className="italic">performance</span>
    </h2>
    <p className="text-neutral-400 font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
      Specialized agents across every layer of your growth stack &mdash; creative, technical, analytical.
    </p>
  </div>
);
