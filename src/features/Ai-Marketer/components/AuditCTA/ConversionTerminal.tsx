"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import { AuditForm } from "./AuditForm";

export const ConversionTerminal = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative lg:sticky lg:top-24"
  >
    <div className="absolute -inset-4 bg-emerald-400/20 blur-2xl pointer-events-none" />

    <div className="relative rounded-3xl border border-black/5 bg-white shadow-[0_40px_100px_-25px_rgba(20,20,20,0.25)] overflow-hidden">
      {/* Live status strip */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-black/5 bg-neutral-50/70">
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          Live
        </span>
        <span className="text-[11px] font-mono tabular-nums text-neutral-500">
          <span className="text-neutral-900 font-semibold">247</span> audits running now
        </span>
      </div>

      <div className="p-8 md:p-9">
        <h3 className="font-display text-2xl md:text-[28px] text-neutral-900 leading-tight tracking-tight mb-1.5">
          Run my <span className="italic text-emerald-700">free</span> audit
        </h3>
        <p className="text-sm text-neutral-500 font-body mb-7">Drop your email. Report lands in 24h.</p>

        <AuditForm />

        <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] text-neutral-600 font-body font-semibold tabular-nums">4.8</span>
            <span className="text-[11px] text-neutral-400 font-body">· 2,000+ teams</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-700">
            <ShieldCheck className="w-3 h-3" />
            SOC 2 type II
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-mono text-neutral-400">
          <span>No credit card</span>
          <span className="text-neutral-300">·</span>
          <span>24h delivery</span>
          <span className="text-neutral-300">·</span>
          <span>Unsubscribe anytime</span>
        </div>
      </div>
    </div>
  </motion.div>
);
