"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Layers, Zap } from "lucide-react";

type Card = {
  num: string;
  icon: React.ReactNode;
  title: string;
  bullets: { text: string; dot: string }[];
  badges?: string[];
};

const CARDS: Card[] = [
  {
    num: "01",
    icon: <MessageSquare className="w-4 h-4" />,
    title: "Ask in English, get answers",
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
    bullets: [
      {
        text: "Pull from Google Ads, Meta Ads, and GA4 at once",
        dot: "#fbbf24",
      },
      { text: "Compare and deduplicate across accounts", dot: "#f472b6" },
    ],
    badges: ["GA", "M", "GA4", "TT"],
  },
  {
    num: "03",
    icon: <Zap className="w-4 h-4" />,
    title: "Read, write, and schedule",
    bullets: [
      {
        text: "Pause campaigns, update bids, add keywords — right from chat",
        dot: "#60a5fa",
      },
      { text: "Schedule actions to run later, hands-free", dot: "#f9a8d4" },
    ],
  },
];

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
          Ryze AI: Connect <span className="italic text-[#e35a32]">Claude</span>{" "}
          to Google & Meta Ads
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-colors p-7"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl text-white/10 leading-none">
                  {c.num}
                </span>
                <div className="h-8 w-8 border border-white/10 bg-white/5 flex items-center justify-center text-white/70">
                  {c.icon}
                </div>
              </div>

              <h3 className="mt-6 text-lg font-medium text-white">{c.title}</h3>

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
                <div className="mt-6 flex gap-1.5">
                  {c.badges.map((b) => (
                    <span
                      key={b}
                      className="h-7 w-7 border border-white/10 bg-black/40 flex items-center justify-center text-[9px] text-white/60 font-medium"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
