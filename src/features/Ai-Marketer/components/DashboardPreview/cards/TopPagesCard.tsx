import React from "react";
import { topPages } from "@/features/Ai-Marketer/data/dashboard";
import { CARD, LABEL } from "../tokens";

export const TopPagesCard = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-5 py-3 border-b border-neutral-900 flex items-center justify-between">
      <span className="text-sm font-semibold text-white">Top pages</span>
      <span className="text-[11px] text-neutral-400">By organic visits</span>
    </div>
    <div className={`grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-2 bg-neutral-900 border-b border-neutral-900 ${LABEL}`}>
      <span>URL</span>
      <span className="w-16 text-right">Visits</span>
      <span className="w-14 text-right">Conv.</span>
    </div>
    <div className="divide-y divide-neutral-900">
      {topPages.map((p) => (
        <div key={p.url} className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-5 py-3">
          <span className="text-xs font-mono text-neutral-200 truncate">{p.url}</span>
          <span className="w-16 text-right text-xs text-white tabular-nums">{p.views}</span>
          <span className="w-14 text-right text-xs font-semibold text-emerald-600">{p.conv}</span>
        </div>
      ))}
    </div>
  </div>
);
