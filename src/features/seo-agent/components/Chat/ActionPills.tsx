"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export type ActionUrgency = "high" | "med" | "low";

export type Action = {
  text: string;
  urgency: ActionUrgency;
};

type Props = {
  actions: Action[];
  disabled?: boolean;
  onAction: (action: string) => void;
};

const URGENCY_RANK: Record<ActionUrgency, number> = {
  high: 0,
  med: 1,
  low: 2,
};

const URGENCY_STYLES: Record<
  ActionUrgency,
  { pill: string; dot: string; arrow: string }
> = {
  high: {
    pill: "bg-white border-rose-500/25 hover:border-rose-500/50 text-neutral-800 hover:text-rose-700 hover:shadow-[0_6px_16px_-8px_rgba(244,63,94,0.25)]",
    dot: "bg-rose-500 shadow-[0_0_0_3px_rgba(244,63,94,0.15)]",
    arrow: "text-rose-400 group-hover:text-rose-600",
  },
  med: {
    pill: "bg-white border-amber-500/25 hover:border-amber-500/50 text-neutral-800 hover:text-amber-800 hover:shadow-[0_6px_16px_-8px_rgba(245,158,11,0.25)]",
    dot: "bg-amber-500 shadow-[0_0_0_3px_rgba(245,158,11,0.15)]",
    arrow: "text-amber-400 group-hover:text-amber-600",
  },
  low: {
    pill: "bg-white border-emerald-500/20 hover:border-emerald-500/40 text-neutral-700 hover:text-neutral-900 hover:shadow-[0_6px_16px_-8px_rgba(16,185,129,0.22)]",
    dot: "bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]",
    arrow: "text-neutral-400 group-hover:text-emerald-600",
  },
};

export const ActionPills = ({ actions, disabled, onAction }: Props) => {
  if (actions.length === 0) return null;

  const sorted = [...actions].sort(
    (a, b) => URGENCY_RANK[a.urgency] - URGENCY_RANK[b.urgency]
  );

  return (
    <div className="mt-4 pt-3 border-t border-black/5">
      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2 font-semibold">
        Suggested next steps
      </div>
      <div className="flex flex-wrap gap-1.5">
        {sorted.map((action, i) => {
          const styles = URGENCY_STYLES[action.urgency];
          return (
            <button
              key={`${i}-${action.text}`}
              type="button"
              onClick={() => onAction(action.text)}
              disabled={disabled}
              aria-label={`${action.urgency} priority: ${action.text}`}
              className={`group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] md:text-xs transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none text-left ${styles.pill}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${styles.dot}`}
                aria-hidden
              />
              <span className="line-clamp-1 max-w-[420px]">{action.text}</span>
              <ArrowUpRight
                className={`w-3 h-3 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${styles.arrow}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
