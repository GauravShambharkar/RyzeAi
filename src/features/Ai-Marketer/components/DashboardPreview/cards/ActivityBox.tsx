import React from "react";
import { CARD, LABEL } from "../tokens";

type Props = { title: string; val: string; trend: string; up?: boolean };

export const ActivityBox = ({ title, val, trend, up = true }: Props) => (
  <div className={`${CARD} p-4`}>
    <div className={`${LABEL} mb-2`}>{title}</div>
    <div className="flex items-baseline gap-2">
      <span className="text-lg font-semibold text-neutral-900 tracking-tight">{val}</span>
      <span className={`text-[11px] font-semibold ${up ? "text-emerald-700" : "text-rose-600"}`}>
        {trend}
      </span>
    </div>
  </div>
);
