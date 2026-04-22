"use client";

import React from "react";
import { motion } from "framer-motion";
import { resultsStats, resultsLastUpdated } from "@/features/mcp/data/resultsStats";

export const LiveResults = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-black/5 bg-white shadow-[0_24px_60px_-20px_rgba(20,20,20,0.12)] p-8 md:p-10"
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="font-pixel text-sm tracking-[0.2em] text-neutral-500 uppercase">Live results</div>
        <h3 className="mt-1 font-display text-2xl md:text-3xl text-neutral-900 leading-tight">
          Across <span className="font-pixel text-[#e35a32] text-3xl md:text-4xl">2,000+ clients</span>
        </h3>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 font-pixel text-xs text-emerald-700 tracking-wider whitespace-nowrap">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        All systems ok
      </div>
    </div>

    <div className="mt-8 space-y-5">
      {resultsStats.map((g) => (
        <div key={g.group}>
          <div className="font-pixel text-sm uppercase tracking-[0.25em] text-[#e35a32] mb-2">{g.group}</div>
          <div className="divide-y divide-black/5 border-t border-black/5">
            {g.rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between py-2.5">
                <span className="text-sm text-neutral-600">{r.label}</span>
                <span className="font-pixel text-neutral-900 text-xl leading-none">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 pt-4 border-t border-black/5 font-pixel text-sm text-neutral-500 tracking-wider">
      Last updated: {resultsLastUpdated}
    </div>
  </motion.div>
);
