"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { finalStats } from "@/features/Ai-Marketer/data/finalStats";

export const FinalStats = () => (
  <section className="py-28 md:py-32 bg-[#FAF7F2] text-neutral-900 relative overflow-hidden border-t border-black/5">
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.08] via-transparent to-transparent" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 shadow-sm text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          By the numbers
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 md:gap-6 text-center relative">
        {finalStats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative px-4"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              {s.star && <Star className="w-7 h-7 md:w-9 md:h-9 fill-amber-400 text-amber-400" />}
              <div className="text-5xl md:text-7xl font-display tracking-tighter text-neutral-900">{s.value}</div>
            </div>
            <p className="text-neutral-900 font-display font-semibold text-sm md:text-base">{s.label}</p>
            <p className="text-neutral-500 text-xs md:text-sm font-body mt-1">{s.sub}</p>

            {i < finalStats.length - 1 && (
              <span className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
