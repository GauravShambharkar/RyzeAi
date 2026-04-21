"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

const auditPoints = [
  { label: "Hidden spend leakage", sub: "Avg. $1,200/mo recovered" },
  { label: "High-impact SEO gaps", sub: "Ranked by traffic potential" },
  { label: "Technical health scan", sub: "Core Web Vitals + indexing" },
  { label: "Competitor benchmark", sub: "See where you rank vs. rivals" },
];

export const AuditCTA = () => {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden bg-[#0f1115] text-white">
      {/* Background — broken pillars pixel art */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/PixelArt/brokenPillers.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">
          {/* Left — proposition */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Free growth audit
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.02] tracking-tight mb-6"
            >
              See exactly where your growth is <span className="italic">leaking</span>.
            </motion.h2>

            <p className="text-neutral-400 font-body text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              In under 24 hours, our agents audit your ads, SEO, and site &mdash; and hand you a prioritized action plan. Zero cost, zero strings.
            </p>

            {/* Audit points — quantified, not generic */}
            <ul className="space-y-4">
              {auditPoints.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold font-body text-base">{item.label}</p>
                    <p className="text-neutral-500 text-sm font-body">{item.sub}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — conversion card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-neutral-950/90 backdrop-blur-xl text-white p-8 md:p-10 rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-neutral-800 relative"
          >
            {/* Floating pixel-art mascot */}
            <div className="absolute -top-12 -right-8 w-24 h-24 rotate-[8deg] hidden md:block pointer-events-none">
              <Image
                src="/PixelArt/pettingLamb.png"
                alt=""
                width={120}
                height={120}
                className="drop-shadow-2xl rounded-xl"
              />
            </div>

            <div className="mb-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-2">Start free</p>
              <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                Get your audit in <span className="italic">24 hours</span>
              </h3>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.2em] text-neutral-500">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/30 transition-all font-body text-white placeholder:text-neutral-600"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.2em] text-neutral-500">
                  Website URL <span className="text-neutral-600 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/30 transition-all font-body text-white placeholder:text-neutral-600"
                />
              </div>

              <button className="w-full bg-white text-black rounded-xl py-5 font-bold font-display uppercase tracking-[0.15em] flex items-center justify-center gap-3 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all group">
                Run my free audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Inline trust row */}
            <div className="mt-6 pt-6 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-neutral-400 font-body">4.8 on Trustpilot</span>
              </div>
              <p className="text-[11px] text-neutral-500 font-body flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                247 running now
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
