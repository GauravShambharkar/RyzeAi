import React from "react";
import { TrendingUp } from "lucide-react";
import { timeline } from "@/features/Ai-Marketer/data/dashboard";
import { CARD } from "../tokens";

export const AgentTimeline = () => (
  <div className={`${CARD} p-5`}>
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-semibold text-white">Today’s optimizations</span>
      <span className="text-[11px] text-neutral-400">28 events</span>
    </div>
    <div className="relative">
      <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-neutral-700" />
      <div className="space-y-4">
        {timeline.map((t, i) => (
          <div key={i} className="relative pl-6 flex items-start gap-3">
            <div
              className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                t.up ? "border-emerald-500 bg-neutral-950" : "border-neutral-600 bg-neutral-950"
              }`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-white">{t.label}</span>
                {t.up && <TrendingUp size={10} className="text-emerald-500" />}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{t.detail}</div>
            </div>
            <span className="text-[11px] text-neutral-500 tabular-nums shrink-0">{t.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
