"use client";

import React from "react";
import { motion } from "framer-motion";
import { SampleReport } from "./SampleReport";

export const AuditProposition = () => (
  <div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-7 shadow-sm"
    >
      <span className="relative flex w-1.5 h-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300" />
      </span>
      Audit engine online
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-[56px] font-display leading-[1.02] tracking-tighter mb-6 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
    >
      See exactly where your growth is <span className="italic text-emerald-300">leaking</span>.
    </motion.h2>

    <p className="text-white/80 font-body text-base md:text-lg leading-6 tracking-tight mb-10 max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
      In under 24 hours our agents scan your ads, SEO, and site &mdash; then hand you a prioritized action plan. Zero cost, zero strings.
    </p>

    <div className="hidden md:block">
      <SampleReport />

      <p className="text-[11px] text-white/65 font-mono mt-4 flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
        <span className="w-1 h-1 rounded-full bg-white/50" />
        Preview of the actual report delivered to your inbox &mdash; populated with your data.
      </p>
    </div>
  </div>
);
