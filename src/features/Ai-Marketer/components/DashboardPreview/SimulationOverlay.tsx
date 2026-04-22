import React from "react";
import { Activity, X } from "lucide-react";
import { LABEL } from "./tokens";

export const SimulationOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-[100]">
    {/* Animated cursor */}
    <div
      className="absolute z-[110]"
      style={{ animation: "cursorCycle 24s cubic-bezier(0.45, 0, 0.25, 1) infinite" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="1.5">
        <path d="M5 3l14 8-6 2-4 6z" />
      </svg>
    </div>

    {/* Monitoring pop notification */}
    <div
      className="absolute right-5 bottom-5 w-[340px]"
      style={{ animation: "monitoringPop 25s ease-in-out infinite" }}
    >
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(20,20,20,0.25)] border border-black/5 p-4 flex gap-3 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
        <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center shrink-0">
          <Activity className="text-white" size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className={LABEL}>Agent notification</span>
            <X size={12} className="text-neutral-400" />
          </div>
          <p className="text-xs font-medium text-neutral-900 leading-snug">
            Ryze just saved you <span className="font-semibold text-emerald-700">$420</span> by pausing underperforming ads.
          </p>
          <div className="flex gap-2 mt-3">
            <button className="bg-neutral-900 text-white px-3 py-1.5 rounded-full text-[11px] font-medium">View change</button>
            <button className="bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-full text-[11px] font-medium">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
