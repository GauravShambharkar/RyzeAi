import React from "react";
import type { KpiData } from "@/features/mcp/data/connectorShowcase";

export const Kpi = ({ label, value, delta, tone }: KpiData) => {
  const toneCls =
    tone === "pos" ? "text-emerald-700" : tone === "neg" ? "text-rose-600" : "text-neutral-500";

  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-neutral-500">{label}</div>
      <div className="mt-1 text-lg font-medium text-neutral-900 font-mono">{value}</div>
      {delta && <div className={`text-[10px] mt-0.5 ${toneCls}`}>{delta}</div>}
    </div>
  );
};
