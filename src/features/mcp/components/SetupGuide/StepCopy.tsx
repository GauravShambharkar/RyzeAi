"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SetupStep } from "@/features/mcp/data/setupSteps";

type Props = {
  step: SetupStep;
  active: number;
  stepCount: number;
  onPrev: () => void;
  onNext: () => void;
};

export const StepCopy = ({ step, active, onPrev, onNext }: Props) => (
  <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/5">
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
      >
        <div className="text-[11px] uppercase tracking-[0.2em] text-[#e35a32]">{step.label}</div>
        <h3 className="mt-2 font-display text-4xl md:text-5xl text-white leading-[1.05]">
          {step.title}
        </h3>
        <ul className="mt-6 space-y-3">
          {step.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-white/70">
              <span className="mt-2 h-1.5 w-1.5 bg-[#e35a32]" />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>

    <div className="mt-10 flex items-center gap-3">
      <button
        onClick={onPrev}
        className="h-9 w-9 border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20 flex items-center justify-center transition-colors"
      >
        <ArrowRight className="w-3.5 h-3.5 rotate-180" />
      </button>
      <button
        onClick={onNext}
        className="h-9 w-9 bg-[#e35a32] text-white hover:bg-[#f06a3f] flex items-center justify-center transition-colors"
      >
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  </div>
);
