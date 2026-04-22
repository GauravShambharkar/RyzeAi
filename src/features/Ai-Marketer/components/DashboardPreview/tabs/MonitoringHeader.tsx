import React from "react";

export const MonitoringHeader = () => (
  <div className="p-5 border-b border-black/5 bg-white flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xs font-semibold">
        R
      </div>
      <div>
        <h2 className="text-sm font-semibold text-neutral-900">Ryze Autonomous Monitoring</h2>
        <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          7 agents online &amp; active
        </p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-neutral-300" />
        ))}
      </div>
      <button className="text-[11px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
        Invite team
      </button>
    </div>
  </div>
);
