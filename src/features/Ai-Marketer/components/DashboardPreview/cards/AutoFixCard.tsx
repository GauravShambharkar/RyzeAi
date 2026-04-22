import React from "react";
import { Sparkles, CheckCircle2, Zap } from "lucide-react";
import { autoFixes } from "@/features/Ai-Marketer/data/dashboard";
import { CARD } from "../tokens";

export const AutoFixCard = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-5 py-3 border-b border-black/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-neutral-500" />
        <span className="text-sm font-semibold text-neutral-900">Agent auto-fixes</span>
      </div>
      <span className="text-[11px] text-neutral-500">Today</span>
    </div>
    <div className="divide-y divide-black/5">
      {autoFixes.map((f, i) => (
        <div key={i} className="flex items-start gap-3 px-5 py-3">
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
              f.tone === "emerald"
                ? "bg-emerald-500/10 text-emerald-700"
                : "bg-amber-500/10 text-amber-600"
            }`}
          >
            {f.tone === "emerald" ? <CheckCircle2 size={12} /> : <Zap size={12} />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-neutral-900 leading-snug">{f.label}</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">{f.meta}</div>
          </div>
          <span className="text-[11px] text-neutral-400 shrink-0">{f.time}</span>
        </div>
      ))}
    </div>
  </div>
);
