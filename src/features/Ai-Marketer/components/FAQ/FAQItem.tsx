"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/features/Ai-Marketer/data/faqs";

type Props = {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export const FAQItem = ({ faq, index, isOpen, onToggle }: Props) => (
  <div
    className={`relative border-b transition-colors ${
      isOpen ? "bg-neutral-950 border-neutral-800" : "border-neutral-900 hover:bg-neutral-950/60"
    }`}
  >
    <span
      className={`absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-500 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    />

    <button onClick={onToggle} className="w-full pl-7 pr-6 py-5 flex items-center justify-between text-left gap-6 group">
      <div className="flex items-baseline gap-5 flex-1 min-w-0">
        <span
          className={`font-display font-semibold text-[11px] uppercase tracking-[0.2em] tabular-nums shrink-0 transition-colors ${
            isOpen ? "text-emerald-400" : "text-neutral-600"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`font-display font-semibold text-base md:text-lg leading-snug transition-colors ${
            isOpen ? "text-white" : "text-neutral-200 group-hover:text-white"
          }`}
        >
          {faq.question}
        </span>
      </div>
      <span className={`shrink-0 transition-colors ${isOpen ? "text-emerald-400" : "text-neutral-500 group-hover:text-white"}`}>
        {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="pl-[4.5rem] pr-6 pb-6 pt-1 text-neutral-400 font-body leading-relaxed text-[15px]">
            {faq.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
