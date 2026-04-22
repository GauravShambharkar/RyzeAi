import React from "react";
import { overlapKpis, overlapBars } from "@/features/mcp/data/connectorShowcase";
import { CardShell } from "../CardShell";
import { Kpi } from "../Kpi";

export const CrossOverlap = () => (
  <CardShell docName="Cross-platform overlap · February">
    <h4 className="text-base font-medium text-white">Where your ad budget actually lands</h4>

    <div className="mt-5 grid grid-cols-4 gap-3">
      {overlapKpis.map((k) => (
        <Kpi key={k.label} {...k} />
      ))}
    </div>

    <div className="mt-6 grid grid-cols-[1.2fr_1fr] gap-4">
      <div className="border border-white/5 bg-black/30 p-4">
        <div className="text-[10px] text-white/50">Spend overlap by campaign type</div>
        <div className="mt-3 space-y-2.5">
          {overlapBars.map((r) => (
            <div key={r.label} className="flex items-center gap-2">
              <span className="text-[10px] text-white/50 w-20">{r.label}</span>
              <div className="flex-1 h-2 bg-white/5 overflow-hidden flex">
                <div className="bg-[#e35a32]" style={{ width: `${r.a}%` }} />
                <div className="bg-[#fbbf24]/70" style={{ width: `${r.b}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-white/5 bg-black/30 p-4 flex flex-col items-center justify-center">
        <div className="text-[10px] text-white/50 self-start">$42.6K / mo · split</div>
        <svg viewBox="0 0 42 42" className="w-24 h-24 mt-2 -rotate-90">
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#1f1f1f" strokeWidth="6" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#e35a32" strokeWidth="6" strokeDasharray="38 100" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#fbbf24" strokeWidth="6" strokeDasharray="32 100" strokeDashoffset="-38" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#60a5fa" strokeWidth="6" strokeDasharray="30 100" strokeDashoffset="-70" />
        </svg>
        <div className="mt-3 text-[10px] text-white/50 text-center">
          Google only · <span className="text-white">16,180</span>
        </div>
      </div>
    </div>
  </CardShell>
);
