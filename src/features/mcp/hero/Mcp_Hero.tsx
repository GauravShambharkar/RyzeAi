"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const TRUST_LOGOS = [
  { label: "Google Ads", src: "/services/google_ads.avif" },
  { label: "Meta Ads", src: "/services/meta.avif" },
  { label: "Google Analytics", src: "/services/google-analytics.svg" },
];

export const Mcp_Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-36 lg:pt-40 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/PixelArt/brokenPillers.png"
          alt=""
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020502] via-[#020502]/60 to-[#020502]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,90,50,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-1 text-xs text-white/80"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e35a32]" />
            <span>MCP for Claude · Live</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white mt-6"
          >
            Connect your ad accounts to{" "}
            <span className="italic text-[#e35a32]">Claude</span> in <br /> 1-click
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-sm md:text-base text-white/60 font-body leading-relaxed"
          >
            Analyze and manage your ads, and schedule actions — all from Claude.
          </motion.p>

          {/* CTA */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white/5 border border-white/15 backdrop-blur-md px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e35a32]/40"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Get started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.form>

          {/* Trust row */}
          <div className="mt-10 flex items-center gap-5 text-white/50">
            <span className="text-[11px] uppercase tracking-[0.2em]">
              Connects to
            </span>
            <div className="flex items-center gap-3">
              {TRUST_LOGOS.map((l) => (
                <div
                  key={l.label}
                  className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center p-1.5"
                  title={l.label}
                >
                  <Image
                    src={l.src}
                    alt={l.label}
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — product preview mock */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-[11px] text-white/40 font-mono">
                claude.ai / ryze-mcp
              </span>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-3 pt-3 text-[11px] overflow-x-auto scrollbar-hide">
              {[
                "Account Audit",
                "Weekly Report",
                "Spend Scheduling",
                "Budget Optimizer",
                "Keyword Research",
              ].map((t, i) => (
                <span
                  key={t}
                  className={`whitespace-nowrap rounded-md px-2.5 py-1.5 border ${i === 0
                      ? "border-white/15 bg-white/10 text-white"
                      : "border-transparent text-white/50 hover:text-white/80"
                    }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Body */}
            <div className="p-5">
              {/* prompt line */}
              <div className="text-[11px] font-mono text-white/40">
                Ryze AI · MCP · Claude · Google + Meta Ads
              </div>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                Run the weekly performance snapshot for all connected ad
                accounts — deduplicate conversions and flag anything off-pace.
              </p>

              <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#e35a32] text-white px-4 py-1.5 text-xs font-medium">
                Continue
                <ArrowRight className="w-3 h-3" />
              </button>

              {/* Mini chart */}
              <div className="mt-6 rounded-lg border border-white/5 bg-black/40 p-4">
                <div className="flex items-center justify-between text-[11px] text-white/50">
                  <span>PMax asset group performance</span>
                  <span className="text-white/30">Last 7d</span>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Asset grp — Brand", val: 82 },
                    { label: "Asset grp — Retargeting", val: 61 },
                    { label: "Asset grp — Non-brand", val: 44 },
                    { label: "Asset grp — Prospecting", val: 28 },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-3">
                      <span className="text-[10px] text-white/50 w-40 truncate">
                        {r.label}
                      </span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#e35a32] to-[#f59e6a]"
                          style={{ width: `${r.val}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-white/60 w-8 text-right">
                        {r.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mcp_Hero;
