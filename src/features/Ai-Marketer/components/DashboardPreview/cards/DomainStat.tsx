import React from "react";
import { LABEL } from "../tokens";

type Props = { label: string; value: string; trend: string };

export const DomainStat = ({ label, value, trend }: Props) => {
  const down = trend.startsWith("-");
  return (
    <div className="flex flex-col gap-1.5">
      <span className={LABEL}>{label}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-semibold text-neutral-900 tracking-tight">{value}</span>
        <span className={`text-[11px] font-semibold ${down ? "text-rose-600" : "text-emerald-700"}`}>
          {trend}
        </span>
      </div>
    </div>
  );
};
