"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SetupStep } from "@/features/mcp/data/setupSteps";

const menuItems = ["Language", "Get help", "View all plans", "Log out"];

type Props = { step: SetupStep; active: number };

export const StepPreview = ({ step, active }: Props) => (
  <div className="relative p-6 md:p-10 bg-[radial-gradient(ellipse_at_top_right,rgba(227,90,50,0.08),transparent_70%)]">
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_-20px_rgba(20,20,20,0.15)] overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/5 bg-neutral-50">
          <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-[10px] text-neutral-500 font-mono">{step.previewTitle}</span>
        </div>

        <div className="p-6 min-h-[260px] flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-neutral-50 p-4">
            <div className="flex items-center gap-2 pb-3 border-b border-black/5 text-[11px] text-neutral-700">
              <div className="h-5 w-5 rounded-lg bg-[#e35a32]/20 border border-[#e35a32]/50" />
              <span>irina.buht12@gmail.com</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg px-3 py-2 text-[12px] bg-[#e35a32]/15 border border-[#e35a32]/50 text-neutral-900">
                {step.previewHighlight}
              </div>
              {menuItems.map((m) => (
                <div key={m} className="px-3 py-2 text-[12px] text-neutral-500">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
);
