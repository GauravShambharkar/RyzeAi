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
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300 mb-7"
    >
      <span className="relative flex w-1.5 h-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
      </span>
      Audit engine online
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-[56px] font-display leading-[1.02] tracking-tight mb-6"
    >
      See exactly where your growth is <span className="italic text-emerald-300">leaking</span>.
    </motion.h2>

    <p className="text-neutral-400 font-body text-base md:text-lg leading-relaxed mb-10 max-w-xl">
      In under 24 hours our agents scan your ads, SEO, and site &mdash; then hand you a prioritized action plan. Zero cost, zero strings.
    </p>

    <SampleReport />

    <p className="text-[11px] text-neutral-500 font-mono mt-4 flex items-center gap-2">
      <span className="w-1 h-1 rounded-full bg-neutral-600" />
      Preview of the actual report delivered to your inbox &mdash; populated with your data.
    </p>
  </div>
);
