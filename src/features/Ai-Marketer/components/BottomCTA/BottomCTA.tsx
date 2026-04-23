"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { TrustStrip } from "./TrustStrip";

export const BottomCTA = () => (
  <section className="relative overflow-hidden mx-4 md:mx-8 lg:mx-20 my-16 rounded-[2.5rem] bg-white border border-black/5 shadow-[0_24px_80px_-24px_rgba(20,20,20,0.12)]">
    <div className="absolute inset-0 pointer-events-none">
      <Image src="/pixelArt2/hoverFloor.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-400/20 rounded-full blur-[140px]" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-40 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          247 audits running right now
        </div>

        <h2 className="text-5xl md:text-7xl font-display text-white leading-[1.02] tracking-tighter max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
          Stop losing customers to your <span className="italic text-emerald-300">competitors</span>.
        </h2>

        <p className="text-white/85 font-body text-base md:text-lg max-w-xl leading-6 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          Get a free, AI-generated teardown of your ads, SEO, and funnel &mdash; delivered to your inbox within 24 hours. No calls, no sales pitch.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button className="group rounded-full bg-white text-neutral-900 px-8 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] transition-all hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 flex items-center gap-3">
            Run my free audit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group rounded-full px-6 py-3.5 text-sm font-semibold font-display uppercase tracking-[0.15em] text-white border border-white/25 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2">
            <Sparkles size={16} className="text-emerald-300" />
            See sample report
          </button>
        </div>

        <TrustStrip />
      </motion.div>
    </div>
  </section>
);
