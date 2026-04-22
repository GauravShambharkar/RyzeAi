"use client";

import React from "react";
import { motion } from "framer-motion";
import { findings } from "@/features/Ai-Marketer/data/auditFindings";
import { FindingRow } from "./FindingRow";

export const SampleReport = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative rounded-3xl border border-black/5 bg-white shadow-[0_30px_80px_-20px_rgba(20,20,20,0.25)] overflow-hidden"
  >
    {/* Window chrome */}
    <div className="flex items-center justify-between px-5 py-3 border-b border-black/5 bg-neutral-50/70">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[11px] font-mono text-neutral-500">
          ryze.ai/audit/<span className="text-neutral-800">your-domain.com</span>
        </span>
      </div>
      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Scanning
      </span>
    </div>

    {/* Findings */}
    <div className="divide-y divide-black/5">
      {findings.map((f, i) => (
        <FindingRow key={i} finding={f} index={i} />
      ))}
    </div>

    {/* Footer progress */}
    <div className="px-5 py-3 border-t border-black/5 bg-neutral-50/70 flex items-center justify-between text-[11px] font-mono">
      <span className="text-neutral-500">Generating full report…</span>
      <span className="text-emerald-700 tabular-nums">74% / 100%</span>
    </div>
    <div className="h-1 bg-neutral-100">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "74%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.5)]"
      />
    </div>
  </motion.div>
);
