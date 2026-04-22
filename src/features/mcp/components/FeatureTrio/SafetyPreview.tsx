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
          className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-neutral-50 px-3 py-2"
        >
          <span className="h-5 w-5 rounded-lg flex-shrink-0 bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 flex items-center justify-center">
            {c.icon}
          </span>
          <span className="text-[12px] text-neutral-700">{c.label}</span>
        </div>
      ))}
    </div>
  </div>
);
