"use client";

import React from "react";
import { motion } from "framer-motion";

type Category = {
  id: string;
  title: string;
  accent: { text: string; dot: string; bar: string };
  items: string[];
};

const categories: Category[] = [
  {
    id: "01",
    title: "Optimize",
    accent: { text: "text-blue-400", dot: "bg-blue-400", bar: "bg-blue-500" },
    items: [
      "Bid & budget optimization",
      "ROAS improvement",
      "Dayparting & scheduling",
      "Audience refinement",
      "Placement optimization",
      "Device bid adjustments",
    ],
  },
  {
    id: "02",
    title: "Create",
    accent: { text: "text-purple-400", dot: "bg-purple-400", bar: "bg-purple-500" },
    items: [
      "Ad creative generation",
      "Headline & copy testing",
      "A/B testing",
      "Dynamic ad variants",
      "Video ad hooks",
      "Responsive search ads",
    ],
  },
  {
    id: "03",
    title: "Audit",
    accent: { text: "text-amber-400", dot: "bg-amber-400", bar: "bg-amber-500" },
    items: [
      "Wasted spend detection",
      "Negative keyword mining",
      "Quality Score fixes",
      "Conversion tracking audit",
      "Account structure review",
      "Search term analysis",
    ],
  },
  {
    id: "04",
    title: "Report",
    accent: { text: "text-emerald-400", dot: "bg-emerald-400", bar: "bg-emerald-500" },
    items: [
      "Slack & Teams alerts",
      "Automated performance reports",
      "Custom dashboards",
      "Budget pacing alerts",
      "Competitor benchmarking",
      "Weekly AI summaries",
    ],
  },
];

export const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — left-aligned, editorial */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
            Feature matrix
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-[1.05] tracking-tight"
          >
            Everything you need to run{" "}
            <span className="italic text-neutral-400">paid ads.</span>
          </motion.h2>
        </div>

        {/* 4-column feature matrix — hairline dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-neutral-950 p-8 transition-colors duration-300 hover:bg-neutral-900 flex flex-col"
            >
              {/* Meta — id + tag */}
              <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-6">
                <span className="tabular-nums text-neutral-600">{cat.id}</span>
                <span className="w-3 h-px bg-white/15" />
                <span className={cat.accent.text}>{cat.title}</span>
              </div>

              {/* Category title */}
              <h3 className="text-2xl md:text-3xl font-display text-white mb-8 tracking-tight leading-tight">
                {cat.title}
              </h3>

              {/* Item list */}
              <ul className="space-y-3.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[13px] text-neutral-300 font-body"
                  >
                    <span className={`w-1 h-1 ${cat.accent.dot} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Count — bottom meta */}
              <div className="mt-auto pt-8 flex items-baseline justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
                  Capabilities
                </span>
                <span className={`text-[13px] font-mono font-semibold tabular-nums ${cat.accent.text}`}>
                  {cat.items.length.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Hover accent bar — sweeps in from left */}
              <span
                className={`absolute left-0 right-0 bottom-0 h-px ${cat.accent.bar} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
