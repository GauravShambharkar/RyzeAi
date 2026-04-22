import React from "react";
import { keywords } from "@/features/Ai-Marketer/data/dashboard";
import { CARD, LABEL } from "../tokens";

const diffToneMap: Record<string, string> = {
  High: "text-rose-500",
  Med: "text-amber-500",
  Low: "text-emerald-600",
};

export const KeywordsCard = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-5 py-3 border-b border-neutral-900 flex items-center justify-between">
      <span className="text-sm font-semibold text-white">Organic keyword positions</span>
      <span className="text-[11px] text-neutral-400">Last 30 days</span>
    </div>
    <div className={`grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-5 py-2 bg-neutral-900 border-b border-neutral-900 ${LABEL}`}>
      <span>Keyword</span>
      <span className="w-12 text-right">Rank</span>
      <span className="w-14 text-right">Δ</span>
      <span className="w-14 text-right">Volume</span>
      <span className="w-12 text-right">Diff</span>
    </div>
    <div className="divide-y divide-neutral-900">
      {keywords.map((k) => {
        const deltaTone =
          k.delta > 0 ? "text-emerald-600" : k.delta < 0 ? "text-rose-500" : "text-neutral-500";
        const deltaLabel = k.delta === 0 ? "—" : k.delta > 0 ? `+${k.delta}` : `${k.delta}`;
        return (
          <div
            key={k.kw}
            className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 items-center px-5 py-3"
          >
            <span className="text-xs font-medium text-white truncate">{k.kw}</span>
            <span className="w-12 text-right text-xs font-semibold text-white">#{k.rank}</span>
            <span className={`w-14 text-right text-[11px] font-semibold tabular-nums ${deltaTone}`}>
              {deltaLabel}
            </span>
            <span className="w-14 text-right text-xs text-neutral-400 tabular-nums">{k.volume}</span>
            <span className={`w-12 text-right text-[11px] font-semibold ${diffToneMap[k.diff]}`}>
              {k.diff}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);
