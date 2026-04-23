"use client";

import React from "react";
import { motion } from "framer-motion";
import { accents } from "@/features/Ai-Marketer/data/accents";
import type { StackCardData } from "@/features/Ai-Marketer/data/featureStack.cards";

type Props = { card: StackCardData; index: number };

export const StackCard = ({ card, index }: Props) => {
  const accent = accents[card.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`group relative rounded-2xl bg-white border border-black/5 p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-16px_rgba(20,20,20,0.12)] hover:-translate-y-0.5 flex flex-col ${card.colSpan}`}
    >
      <div className="flex items-center gap-2.5 text-[9px] font-mono uppercase tracking-[0.22em] text-neutral-400 mb-5">
        <span className="tabular-nums text-neutral-400">{card.id}</span>
        <span className="w-3 h-px bg-black/15" />
        <span className={accent.text}>{card.tag}</span>
      </div>

      <h3 className="text-base md:text-lg font-display text-neutral-900 mb-1.5 tracking-tighter leading-tight">
        {card.title}
      </h3>
      <p className="text-[12px] text-neutral-600 leading-6 tracking-tight font-body max-w-sm">
        {card.description}
      </p>

      <div className="flex items-baseline justify-between mt-auto pt-8">
        <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-neutral-400">
          {card.metric.label}
        </span>
        <span className={`text-[13px] font-mono font-semibold tabular-nums ${accent.text}`}>
          {card.metric.value}
        </span>
      </div>

      <span
        className={`absolute left-4 right-4 bottom-0 h-[2px] rounded-full ${accent.bar} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
      />
    </motion.article>
  );
};
