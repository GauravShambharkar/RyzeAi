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
    <div className="absolute -inset-4 bg-emerald-500/15 blur-2xl pointer-events-none" />

    <div className="relative border border-white/10 bg-neutral-950/85 backdrop-blur-xl shadow-[0_50px_120px_-25px_rgba(0,0,0,0.9)] overflow-hidden">
      {/* Crosshair brackets */}
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-emerald-400/60 pointer-events-none" />
      <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-emerald-400/60 pointer-events-none" />
      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-emerald-400/60 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-emerald-400/60 pointer-events-none" />

      {/* Live status strip */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          Live
        </span>
        <span className="text-[11px] font-mono tabular-nums text-neutral-400">
          <span className="text-white font-semibold">247</span> audits running now
        </span>
      </div>

      <div className="p-8 md:p-9">
        <h3 className="font-display text-2xl md:text-[28px] text-white leading-tight tracking-tight mb-1.5">
          Run my <span className="italic text-emerald-300">free</span> audit
        </h3>
        <p className="text-sm text-neutral-400 font-body mb-7">Drop your email. Report lands in 24h.</p>

        <AuditForm />

        <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] text-neutral-400 font-body font-semibold tabular-nums">4.8</span>
            <span className="text-[11px] text-neutral-500 font-body">· 2,000+ teams</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-300/90">
            <ShieldCheck className="w-3 h-3" />
            SOC 2 type II
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-mono text-neutral-500">
          <span>No credit card</span>
          <span className="text-neutral-700">·</span>
          <span>24h delivery</span>
          <span className="text-neutral-700">·</span>
          <span>Unsubscribe anytime</span>
        </div>
      </div>
    </div>
  </motion.div>
);
