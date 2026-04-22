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
      className="group relative bg-neutral-950 p-8 transition-colors duration-300 hover:bg-neutral-900 flex flex-col"
    >
      <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-6">
        <span className="tabular-nums text-neutral-600">{category.id}</span>
        <span className="w-3 h-px bg-white/15" />
        <span className={accent.text}>{category.title}</span>
      </div>

      <h3 className="text-2xl md:text-3xl font-display text-white mb-8 tracking-tight leading-tight">
        {category.title}
      </h3>

      <ul className="space-y-3.5">
        {category.items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-[13px] text-neutral-300 font-body">
            <span className={`w-1 h-1 ${accent.bg} shrink-0`} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8 flex items-baseline justify-between">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
          Capabilities
        </span>
        <span className={`text-[13px] font-mono font-semibold tabular-nums ${accent.text}`}>
          {category.items.length.toString().padStart(2, "0")}
        </span>
      </div>

      <span
        className={`absolute left-0 right-0 bottom-0 h-px ${accent.bar} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
      />
    </motion.div>
  );
};
