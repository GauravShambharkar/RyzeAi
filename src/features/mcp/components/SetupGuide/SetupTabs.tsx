import React from "react";
import { Settings, Plug, ShieldCheck, Check, Play, type LucideIcon } from "lucide-react";
import { setupSteps, type StepIcon } from "@/features/mcp/data/setupSteps";

const iconMap: Record<StepIcon, LucideIcon> = { Settings, Plug, ShieldCheck, Check, Play };

type Props = { active: number; onSelect: (index: number) => void };

export const SetupTabs = ({ active, onSelect }: Props) => (
  <div className="mt-10 flex gap-2 flex-wrap">
    {setupSteps.map((s, i) => {
      const Icon = iconMap[s.iconName];
      return (
        <button
          key={s.label}
          onClick={() => onSelect(i)}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs transition-colors border ${
            i === active
              ? "bg-[#e35a32] text-white border-[#e35a32]"
              : "bg-white/[0.03] text-white/60 border-white/10 hover:text-white hover:border-white/20"
          }`}
        >
          <span
            className={`h-4 w-4 flex items-center justify-center ${
              i === active ? "bg-white/20" : "bg-white/5"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
          </span>
          {s.label}
        </button>
      );
    })}
  </div>
);
