import React from "react";
import { weeklyKpis, weeklyConvBars } from "@/features/mcp/data/connectorShowcase";
import { CardShell } from "../CardShell";
import { Kpi } from "../Kpi";

export const WeeklyReport = () => (
  <CardShell docName="Google Ads account audit · weekly snapshot">
    <div className="text-xs text-neutral-500">Mar 3 – Mar 9, 2026 · vs prior week</div>
    <h4 className="mt-1 text-base font-medium text-neutral-900">Weekly performance snapshot</h4>

    <div className="mt-5 grid grid-cols-5 gap-3">
      {weeklyKpis.map((k) => (
        <Kpi key={k.label} {...k} />
      ))}
    </div>

    <div className="mt-6 rounded-2xl border border-black/5 bg-neutral-50 p-4">
      <div className="flex items-center justify-between text-[10px] text-neutral-500">
        <span>Daily spend</span>
        <span>Mon–Sun</span>
      </div>
      <svg viewBox="0 0 200 60" className="w-full h-16 mt-2" preserveAspectRatio="none">
        <defs>
          <linearGradient id="spend-g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e35a32" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e35a32" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 L30,25 L60,30 L90,15 L120,35 L150,20 L180,28 L200,22"
          fill="none"
          stroke="#e35a32"
          strokeWidth="1.5"
        />
        <path
          d="M0,40 L30,25 L60,30 L90,15 L120,35 L150,20 L180,28 L200,22 L200,60 L0,60 Z"
          fill="url(#spend-g)"
        />
      </svg>

      <div className="flex items-center justify-between text-[10px] text-neutral-500 mt-3">
        <span>Daily conversions</span>
      </div>
      <div className="mt-2 flex items-end gap-1 h-10">
        {weeklyConvBars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-[#e35a32]/50 to-[#e35a32]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  </CardShell>
);
