"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  actions: string[];
  disabled?: boolean;
  onAction: (action: string) => void;
};

export const ActionPills = ({ actions, disabled, onAction }: Props) => {
  if (actions.length === 0) return null;

  return (
    <div className="mt-4 pt-3 border-t border-black/5">
      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2 font-semibold">
        Suggested next steps
      </div>
      <div className="flex flex-wrap gap-1.5">
        {actions.map((action, i) => (
          <button
            key={`${i}-${action}`}
            type="button"
            onClick={() => onAction(action)}
            disabled={disabled}
            className="group inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white px-3 py-1.5 text-[11px] md:text-xs text-neutral-700 hover:border-emerald-500/30 hover:text-neutral-900 hover:shadow-[0_6px_16px_-8px_rgba(20,20,20,0.12)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none text-left"
          >
            <span className="line-clamp-1 max-w-[420px]">{action}</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};
