"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Users, ShieldCheck } from "lucide-react";

type Accent = {
  text: string;
  bar: string;
};

type Card = {
  id: string;
  tag: string;
  title: string;
  description: string;
  accent: Accent;
  metric: { label: string; value: string };
  colSpan: string; // literal Tailwind class so JIT picks it up
};

// Bento layout — zig-zag asymmetry across 12 cols:
// [ 01 span-8 ][ 02 span-4 ]
// [ 03 span-5 ][ 04 span-7 ]
// [ 05 span-7 ][ 06 span-5 ]
const cards: Card[] = [
  {
    id: "01",
    tag: "Forecast",
    title: "Predictive Modeling",
    description: "Agents simulate campaign performance before a single dollar is spent.",
    accent: { text: "text-blue-400", bar: "bg-blue-500" },
    metric: { label: "Confidence", value: "94.2%" },
    colSpan: "md:col-span-8",
  },
  {
    id: "02",
    tag: "Creative",
    title: "Custom Ad Creatives",
    description: "Visual assets generated from your brand kit in seconds.",
    accent: { text: "text-purple-400", bar: "bg-purple-500" },
    metric: { label: "Generated", value: "1,284" },
    colSpan: "md:col-span-4",
  },
  {
    id: "03",
    tag: "Technical",
    title: "Autonomous SEO",
    description: "Crawl, diagnose, and fix indexation issues — hands-off.",
    accent: { text: "text-amber-400", bar: "bg-amber-500" },
    metric: { label: "Uptime", value: "99.97%" },
    colSpan: "md:col-span-5",
  },
  {
    id: "04",
    tag: "Copy",
    title: "Content Generation",
    description: "SEO-ready articles and landing-page copy tuned to your audience.",
    accent: { text: "text-emerald-400", bar: "bg-emerald-500" },
    metric: { label: "Avg rank lift", value: "+4.1" },
    colSpan: "md:col-span-7",
  },
  {
    id: "05",
    tag: "Analytics",
    title: "Real-time Reporting",
    description: "Live dashboard streaming every metric that moves the needle.",
    accent: { text: "text-rose-400", bar: "bg-rose-500" },
    metric: { label: "Events / sec", value: "12.4K" },
    colSpan: "md:col-span-7",
  },
  {
    id: "06",
    tag: "Optimize",
    title: "Conversion Tests",
    description: "Automated A/B experiments — winners ship themselves.",
    accent: { text: "text-cyan-400", bar: "bg-cyan-500" },
    metric: { label: "Avg lift", value: "+18.6%" },
    colSpan: "md:col-span-5",
  },
];

// ─────────── Main component ───────────

export const FeatureStack = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
            Full stack
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display mb-5 text-white leading-[1.05]">
            Everything built for <span className="italic">performance</span>
          </h2>
          <p className="text-neutral-400 font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Specialized agents across every layer of your growth stack &mdash; creative, technical, analytical.
          </p>
        </div>

        {/* Bento grid — hairline dividers, zig-zag spans */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-neutral-800 border border-neutral-800 mb-32">
          {cards.map((card, i) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative bg-neutral-950 p-6 transition-colors duration-300 hover:bg-neutral-900 flex flex-col ${card.colSpan}`}
            >
              {/* Meta — id + tag */}
              <div className="flex items-center gap-2.5 text-[9px] font-mono uppercase tracking-[0.22em] text-neutral-500 mb-5">
                <span className="tabular-nums text-neutral-600">{card.id}</span>
                <span className="w-3 h-px bg-white/15" />
                <span className={card.accent.text}>{card.tag}</span>
              </div>

              {/* Title + description */}
              <h3 className="text-base md:text-lg font-display text-white mb-1.5 tracking-tight leading-tight">
                {card.title}
              </h3>
              <p className="text-[12px] text-neutral-400 leading-relaxed font-body max-w-sm">
                {card.description}
              </p>

              {/* Metric — pinned to bottom */}
              <div className="flex items-baseline justify-between mt-auto pt-8">
                <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-neutral-500">
                  {card.metric.label}
                </span>
                <span className={`text-[13px] font-mono font-semibold tabular-nums ${card.accent.text}`}>
                  {card.metric.value}
                </span>
              </div>

              {/* Accent bar — sweeps in on hover from left */}
              <span
                className={`absolute left-0 right-0 bottom-0 h-px ${card.accent.bar} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
              />
            </motion.article>
          ))}
        </div>

        {/* Enterprise Section — monumental statue backdrop = enduring reliability */}
        <div className="relative overflow-hidden group">
          <Image
            src="/PixelArt/Gemini_Generated_Image_o1xa64o1xa64o1xa.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-black/30" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/25 blur-[100px] group-hover:blur-[120px] transition-all" />

          <div className="relative z-10 max-w-3xl p-12 md:p-20 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-8">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              Scale edition
            </div>
            <h2 className="text-4xl md:text-6xl font-display mb-6 leading-[1.02] tracking-tight">
              Built to <span className="italic">last</span> at enterprise scale
            </h2>
            <p className="text-white/70 font-body text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              For agencies and growth teams running dozens of accounts. Built for governance, reliability, and compounding wins across every client.
            </p>
            <div className="grid sm:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-base md:text-lg font-display font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  White-label reports
                </h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">Present Ryze insights as your own with fully customizable branding.</p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-display font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  Team collaboration
                </h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">Manage permissions, approvals, and workflows across large marketing teams.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-black px-7 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all">
                Get enterprise access
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/15 text-white px-7 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] hover:bg-white/10 transition-colors">
                View case studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
