"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Activity,
  Search,
  Gauge,
  Trophy,
} from "lucide-react";

type Severity = "high" | "med" | "low";

const findings: {
  icon: React.ReactNode;
  label: string;
  detail: string;
  metric: string;
  severity: Severity;
}[] = [
  {
    icon: <Activity className="w-4 h-4" />,
    label: "Ad spend leakage",
    detail: "8 campaigns flagged",
    metric: "$1,247 /mo",
    severity: "high",
  },
  {
    icon: <Search className="w-4 h-4" />,
    label: "SEO gaps",
    detail: "14 keywords, ~8.2K volume",
    metric: "Rank +4 possible",
    severity: "med",
  },
  {
    icon: <Gauge className="w-4 h-4" />,
    label: "Technical health",
    detail: "LCP 2.8s · CLS 0.18",
    metric: "72 / 100",
    severity: "med",
  },
  {
    icon: <Trophy className="w-4 h-4" />,
    label: "Competitor gap",
    detail: "3 sites ahead on 47 KWs",
    metric: "−18% share",
    severity: "high",
  },
];

const severityTone: Record<Severity, { dot: string; tag: string; pill: string }> = {
  high: { dot: "bg-rose-400", tag: "text-rose-300", pill: "bg-rose-500/10 border-rose-500/30" },
  med: { dot: "bg-amber-400", tag: "text-amber-300", pill: "bg-amber-500/10 border-amber-500/30" },
  low: { dot: "bg-emerald-400", tag: "text-emerald-300", pill: "bg-emerald-500/10 border-emerald-500/30" },
};

export const AuditCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#06080c] text-white">
      {/* Pixel-art backdrop — ancient ruins contrast with the futuristic HUD */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/PixelArt/brokenPillers.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        {/* Futuristic grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.22] mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Ambient emerald glow anchoring the CTA side */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.95fr] gap-14 lg:gap-20 items-start">
          {/* ─────────── Left: proposition + sample deliverable preview ─────────── */}
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

            {/* Sample deliverable preview — the actual product, on screen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-950/80 to-black/80 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">
                    ryze.ai/audit/<span className="text-neutral-300">your-domain.com</span>
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Scanning
                </span>
              </div>

              {/* Findings rows */}
              <div className="divide-y divide-white/5">
                {findings.map((f, i) => {
                  const tone = severityTone[f.severity];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-center gap-4 px-5 py-4"
                    >
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${tone.pill} ${tone.tag}`}>
                        {f.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-white truncate">{f.label}</p>
                        <p className="text-[11px] text-neutral-500 font-mono truncate">{f.detail}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-[13px] font-mono tabular-nums text-white">{f.metric}</p>
                        <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${tone.tag}`}>
                          {f.severity === "high" ? "High" : f.severity === "med" ? "Medium" : "Low"}
                        </p>
                      </div>
                      <span className={`w-1.5 h-8 rounded-full ${tone.dot}`} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer progress */}
              <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] font-mono">
                <span className="text-neutral-500">Generating full report…</span>
                <span className="text-emerald-300 tabular-nums">74% / 100%</span>
              </div>
              <div className="h-0.5 bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "74%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.65)]"
                />
              </div>
            </motion.div>

            <p className="text-[11px] text-neutral-500 font-mono mt-4 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              Preview of the actual report delivered to your inbox &mdash; populated with your data.
            </p>
          </div>

          {/* ─────────── Right: conversion terminal ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24"
          >
            {/* Outer glow — square halo matches the sharp card */}
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
                <p className="text-sm text-neutral-400 font-body mb-7">
                  Drop your email. Report lands in 24h.
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.22em] text-neutral-500">
                      Work email
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full bg-black/60 border border-white/10 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500/60 focus:border-emerald-500/50 transition-all font-body font-mono text-white placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.22em] text-neutral-500">
                      Website URL{" "}
                      <span className="text-neutral-600 normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://yoursite.com"
                      className="w-full bg-black/60 border border-white/10 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500/60 focus:border-emerald-500/50 transition-all font-body font-mono text-white placeholder:text-neutral-600"
                    />
                  </div>

                  {/* The button — emerald glow, shine sweep, lift */}
                  <button className="relative w-full bg-gradient-to-b from-white to-neutral-200 text-black py-5 font-bold font-display uppercase tracking-[0.15em] flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.7),0_0_0_1px_rgba(16,185,129,0.4)] group">
                    <span className="relative z-10 flex items-center gap-3">
                      Run my free audit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Shine sweep */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
                  </button>
                </form>

                {/* Trust row */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-neutral-400 font-body font-semibold tabular-nums">
                      4.8
                    </span>
                    <span className="text-[11px] text-neutral-500 font-body">· 2,000+ teams</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-300/90">
                    <ShieldCheck className="w-3 h-3" />
                    SOC 2 type II
                  </span>
                </div>

                {/* Micro trust strip */}
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
        </div>
      </div>
    </section>
  );
};
