import React from "react";
import { CARD, LABEL } from "../tokens";

type Props = { label: string; score: number };

export const HealthCard = ({ label, score }: Props) => {
  const tone =
    score >= 90
      ? { bar: "bg-emerald-500/100", text: "text-emerald-600", tag: "Strong" }
      : score >= 75
      ? { bar: "bg-amber-400", text: "text-amber-500", tag: "Healthy" }
      : { bar: "bg-rose-400", text: "text-rose-500", tag: "Needs work" };

  return (
    <div className={`${CARD} p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className={LABEL}>{label}</span>
        <span className={`text-[11px] font-semibold ${tone.text}`}>{tone.tag}</span>
      </div>
      <div className="text-2xl font-semibold text-white tracking-tight mb-3">{score}%</div>
      <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${tone.bar}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
};
