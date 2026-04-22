import React from "react";
import { channels } from "@/features/Ai-Marketer/data/dashboard";
import { CARD, LABEL } from "../tokens";

export const AdTable = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-4 py-2.5 border-b border-neutral-900 flex items-center justify-between">
      <span className="text-sm font-semibold text-white">Channels</span>
      <span className="text-[11px] text-neutral-400">Last 7 days</span>
    </div>
    <div className={`grid grid-cols-4 px-4 py-2 bg-neutral-900 border-b border-neutral-900 ${LABEL}`}>
      <span>Channel</span>
      <span>ROAS</span>
      <span>Cost</span>
      <span>Score</span>
    </div>
    {channels.map((c) => (
      <div
        key={c.name}
        className="grid grid-cols-4 px-4 py-3 border-b border-neutral-900 last:border-0 items-center text-xs"
      >
        <span className="font-medium text-white">{c.name}</span>
        <span className="text-emerald-600 font-semibold">{c.roas}</span>
        <span className="text-neutral-400">{c.spend}</span>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-neutral-800 h-1 rounded-full overflow-hidden">
            <div className="bg-black h-full rounded-full" style={{ width: `${c.score}%` }} />
          </div>
          <span className="text-[11px] text-neutral-400 font-medium w-6 text-right">{c.score}</span>
        </div>
      </div>
    ))}
  </div>
);
