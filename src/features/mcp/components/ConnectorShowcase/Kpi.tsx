import React from "react";
import type { KpiData } from "@/features/mcp/data/connectorShowcase";

export const Kpi = ({ label, value, delta, tone }: KpiData) => {
  const toneCls =
    tone === "pos" ? "text-emerald-400" : tone === "neg" ? "text-rose-400" : "text-white/50";

  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-white/40">{label}</div>
      <div className="mt-1 text-lg font-medium text-white font-mono">{value}</div>
      {delta && <div className={`text-[10px] mt-0.5 ${toneCls}`}>{delta}</div>}
    </div>
  );
};
