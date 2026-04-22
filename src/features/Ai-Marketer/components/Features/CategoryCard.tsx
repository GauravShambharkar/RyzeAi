"use client";

import React from "react";
import { motion } from "framer-motion";
import { accents } from "@/features/Ai-Marketer/data/accents";
import type { CategoryData } from "@/features/Ai-Marketer/data/features.categories";

type Props = { category: CategoryData; index: number };

export const CategoryCard = ({ category, index }: Props) => {
  const accent = accents[category.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group relative rounded-3xl bg-white border border-black/5 p-8 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(20,20,20,0.12)] hover:-translate-y-1 flex flex-col"
    >
      <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 mb-6">
        <span className="tabular-nums text-neutral-400">{category.id}</span>
        <span className="w-3 h-px bg-black/15" />
        <span className={accent.text}>{category.title}</span>
      </div>

      <h3 className="text-2xl md:text-3xl font-display text-neutral-900 mb-8 tracking-tight leading-tight">
        {category.title}
      </h3>

      <ul className="space-y-3.5">
        {category.items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-[13px] text-neutral-700 font-body">
            <span className={`w-1.5 h-1.5 rounded-full ${accent.bg} shrink-0`} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8 flex items-baseline justify-between">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
          Capabilities
        </span>
        <span className={`text-[13px] font-mono font-semibold tabular-nums ${accent.text}`}>
          {category.items.length.toString().padStart(2, "0")}
        </span>
      </div>

      <span
        className={`absolute left-6 right-6 bottom-0 h-[2px] rounded-full ${accent.bar} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
      />
    </motion.div>
  );
};
