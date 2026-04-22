import React from "react";
import { CARD, LABEL } from "../tokens";

type Props = { label: string; value: string; sub: string; trend: string; up?: boolean };

export const MetricCard = ({ label, value, sub, trend, up = false }: Props) => (
  <div className={`${CARD} p-4`}>
    <div className="flex items-center justify-between mb-2">
      <span className={LABEL}>{label}</span>
      <span className={`text-[11px] font-semibold ${up ? "text-emerald-600" : "text-rose-500"}`}>
        {trend}
      </span>
    </div>
    <div className="text-lg font-semibold text-white tracking-tight">{value}</div>
    <div className="text-[11px] text-neutral-400 mt-0.5">{sub}</div>
  </div>
);
