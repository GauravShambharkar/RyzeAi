import React from "react";
import { CARD, LABEL } from "../tokens";

export const MetricCardGroup = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className={`${CARD} p-4 flex flex-col gap-2`}>
      <span className={LABEL}>AI Scoring (avg)</span>
      <div className="text-2xl font-semibold text-white tracking-tight">84/100</div>
      <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500/100 rounded-full" style={{ width: "84%" }} />
      </div>
    </div>
    <div className={`${CARD} p-4 flex flex-col gap-2`}>
      <span className={LABEL}>Optimization Events</span>
      <div className="text-2xl font-semibold text-white tracking-tight">1,240</div>
      <div className="text-[11px] text-neutral-400">+312 vs. last week</div>
    </div>
  </div>
);
