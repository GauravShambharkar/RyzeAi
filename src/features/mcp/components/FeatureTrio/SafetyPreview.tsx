import React from "react";
import { Check, Undo2, Clock } from "lucide-react";

const checks = [
  { icon: <Check className="w-3 h-3" />, label: "Needs approval" },
  { icon: <Undo2 className="w-3 h-3" />, label: "Reversible" },
  { icon: <Clock className="w-3 h-3" />, label: "Full audit log" },
];

export const SafetyPreview = () => (
  <div className="h-full flex items-center">
    <div className="w-full grid grid-cols-1 gap-2">
      {checks.map((c) => (
        <div
          key={c.label}
          className="flex items-center gap-2.5 border border-white/10 bg-white/[0.03] px-3 py-2"
        >
          <span className="h-5 w-5 flex-shrink-0 bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center justify-center">
            {c.icon}
          </span>
          <span className="text-[12px] text-white/70">{c.label}</span>
        </div>
      ))}
    </div>
  </div>
);
