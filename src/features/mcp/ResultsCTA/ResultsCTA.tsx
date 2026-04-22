"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type StatRow = { label: string; value: string };
type StatGroup = { group: string; rows: StatRow[] };

const STATS: StatGroup[] = [
  {
    group: "Paid ads",
    rows: [
      { label: "Avg. client ROAS", value: "1.3×" },
      { label: "Revenue driven", value: "$0.9M" },
    ],
  },
  {
    group: "SEO",
    rows: [
      { label: "Organic visits driven", value: "5.3M" },
      { label: "Keywords on page 1", value: "48k+" },
    ],
  },
  {
    group: "Websites",
    rows: [
      { label: "Conversion rate lift", value: "+10%" },
      { label: "Time on site", value: "+13%" },
    ],
  },
];

export const ResultsCTA = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
          {/* Left — live results */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-white/[0.02] p-8 md:p-10"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Live results
                </div>
                <h3 className="mt-2 font-display text-3xl md:text-4xl text-white">
                  Across{" "}
                  <span className="text-[#e35a32]">2,000+ clients</span>
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-[10px] text-emerald-300">
                <span className="h-1.5 w-1.5 bg-emerald-400 animate-pulse" />
                All systems ok
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {STATS.map((g) => (
                <div key={g.group}>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                    {g.group}
                  </div>
                  <div className="divide-y divide-white/5 border-t border-white/5">
                    {g.rows.map((r) => (
                      <div
                        key={r.label}
                        className="flex items-center justify-between py-3"
                      >
                        <span className="text-sm text-white/60">
                          {r.label}
                        </span>
                        <span className="font-mono text-white text-base">
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-white/40 font-mono">
              Last updated: Apr 21, 2026
            </div>
          </motion.div>

          {/* Right — final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a0f0a] via-[#120806] to-[#080202] p-8 md:p-12 flex flex-col justify-center"
          >
            {/* ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,90,50,0.25),transparent_65%)] pointer-events-none" />
            {/* pixel grid accent */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />

            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#e35a32]">
                Final step
              </div>
              <h3 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02] tracking-tight max-w-md">
                Connect Claude to your Ads
              </h3>
              <p className="mt-5 text-sm md:text-base text-white/60 max-w-md leading-relaxed">
                Get your dedicated MCP server. Connect Claude, ChatGPT, or
                Cursor to Google Ads, Meta Ads, and Google Analytics.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  placeholder="work@email.com"
                  className="flex-1 bg-white/5 border border-white/15 backdrop-blur-sm px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e35a32]/50"
                />
                <button className="group inline-flex items-center justify-center gap-1.5 bg-[#e35a32] text-white px-6 py-3 text-sm font-medium hover:bg-[#f06a3f] transition-colors">
                  Get MCP access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>

              <div className="mt-6 text-[11px] text-white/40">
                Free to start · No card required
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
