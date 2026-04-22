"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Layers,
  Zap,
  ShieldCheck,
  Check,
  Clock,
  Undo2,
} from "lucide-react";

type Badge = { label: string; src: string };

type Card = {
  num: string;
  icon: React.ReactNode;
  title: string;
  bullets: { text: string; dot: string }[];
  badges?: Badge[];
  /** how many of the 6 columns this card occupies on md+ */
  colSpan: 2 | 3 | 4;
  /** optional decorative slot rendered on the right of wide cards */
  preview?: React.ReactNode;
};

/* ------------------------------------------------------------------ */
/* Decorative preview slots — only rendered on the wide (col-span-4)  */
/* cards so narrow cards stay dense and clean.                         */
/* ------------------------------------------------------------------ */

const AskPreview = () => (
  <div className="h-full flex flex-col justify-center gap-3">
    <div className="self-end max-w-[240px] bg-white/10 border border-white/10 px-4 py-2.5 text-sm text-white">
      How&apos;s my brand campaign doing?
    </div>
    <div className="flex items-start gap-2.5 max-w-[280px]">
      <div className="h-6 w-6 flex-shrink-0 bg-[#e35a32]/15 border border-[#e35a32]/40 flex items-center justify-center">
        <span className="text-[#e35a32] text-[10px] font-bold">✦</span>
      </div>
      <div className="bg-[#0b0b0b] border border-white/10 px-3 py-2 text-[12px] text-white/80 leading-relaxed">
        Brand ROAS is <span className="text-emerald-400">3.4×</span>, up
        +0.3× vs LW. Spend pacing on target.
      </div>
    </div>
  </div>
);

const SafetyPreview = () => {
  const checks = [
    { icon: <Check className="w-3 h-3" />, label: "Needs approval" },
    { icon: <Undo2 className="w-3 h-3" />, label: "Reversible" },
    { icon: <Clock className="w-3 h-3" />, label: "Full audit log" },
  ];
  return (
    <div className="h-full flex items-center">
      <div className="w-full grid grid-cols-1 gap-2">
        {checks.map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-2.5 border border-white/10 bg-white/[0.03] px-3 py-2"
          >
            <span className="h-5 w-5 flex-shrink-0 bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center justify-center">
              {c.icon}
            </span>
            <span className="text-[12px] text-white/70">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const CARDS: Card[] = [
  {
    num: "01",
    icon: <MessageSquare className="w-4 h-4" />,
    title: "Ask in English, get answers",
    colSpan: 4,
    preview: <AskPreview />,
    bullets: [
      { text: `"How's my brand campaign doing?" — just ask`, dot: "#4ade80" },
      {
        text: "Audits, reports, and optimizations in seconds",
        dot: "#a78bfa",
      },
    ],
  },
  {
    num: "02",
    icon: <Layers className="w-4 h-4" />,
    title: "All platforms, one conversation",
    colSpan: 2,
    bullets: [
      { text: "Google Ads, Meta, GA4 at once", dot: "#fbbf24" },
      { text: "Compare and deduplicate", dot: "#f472b6" },
    ],
    badges: [
      { label: "Google Ads", src: "/services/google_ads.avif" },
      { label: "Meta", src: "/services/meta.avif" },
      { label: "Google Analytics", src: "/services/google-analytics.svg" },
      { label: "TikTok", src: "/services/tiktok.avif" },
    ],
  },
  {
    num: "03",
    icon: <Zap className="w-4 h-4" />,
    title: "Read, write, and schedule",
    colSpan: 2,
    bullets: [
      { text: "Pause, bid, add keywords from chat", dot: "#60a5fa" },
      { text: "Schedule actions, hands-free", dot: "#f9a8d4" },
    ],
  },
  {
    num: "04",
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "Safe by default",
    colSpan: 4,
    preview: <SafetyPreview />,
    bullets: [
      { text: "Writes wait for your approval", dot: "#34d399" },
      { text: "No accidental account bans", dot: "#fb923c" },
    ],
  },
];

/* map colSpan → Tailwind class (keep classes static so the JIT picks them up) */
const COL_SPAN: Record<Card["colSpan"], string> = {
  2: "md:col-span-6 lg:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-6 lg:col-span-4",
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export const FeatureTrio = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight max-w-3xl"
        >
          Ryze AI: Connect{" "}
          <span className="italic text-[#e35a32]">Claude</span> to Google &
          Meta Ads
        </motion.h2>

        {/* 6-column bento: 4+2 / 2+4 on desktop, 2×2 on tablet, stacked on mobile */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4">
          {CARDS.map((c, i) => {
            const isWide = c.colSpan === 4;
            return (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-colors p-7 ${COL_SPAN[c.colSpan]}`}
              >
                <div
                  className={`h-full ${isWide ? "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6" : "flex flex-col"}`}
                >
                  {/* Text column */}
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between">
                      <span className="font-display text-5xl text-white/10 leading-none">
                        {c.num}
                      </span>
                      <div className="h-8 w-8 border border-white/10 bg-white/5 flex items-center justify-center text-white/70">
                        {c.icon}
                      </div>
                    </div>

                    <h3
                      className={`mt-6 text-white font-medium ${isWide
                        ? "font-display text-2xl md:text-3xl leading-[1.1] tracking-tight"
                        : "text-lg leading-snug"
                        }`}
                    >
                      {c.title}
                    </h3>

                    <ul className="mt-4 space-y-2.5">
                      {c.bullets.map((b) => (
                        <li
                          key={b.text}
                          className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0"
                            style={{ backgroundColor: b.dot }}
                          />
                          <span>{b.text}</span>
                        </li>
                      ))}
                    </ul>

                    {c.badges && (
                      <div className="mt-auto pt-6 grid grid-cols-2 gap-1.5">
                        {c.badges.map((b) => (
                          <span
                            key={b.label}
                            title={b.label}
                            className="h-10 border border-white/10 bg-black/40 flex items-center justify-center p-2"
                          >
                            <Image
                              src={b.src}
                              alt={b.label}
                              width={40}
                              height={40}
                              className="h-full w-full object-contain"
                            />
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Preview column (wide cards only) */}
                  {isWide && c.preview && (
                    <div className="relative border-l border-white/5 pl-6 -my-1">
                      {c.preview}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
