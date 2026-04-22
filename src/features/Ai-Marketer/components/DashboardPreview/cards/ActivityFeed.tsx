import React from "react";
import { Sparkles, TrendingUp, PauseCircle, Target, Zap, type LucideIcon } from "lucide-react";
import { feedItems, toneMap, type FeedItemIcon } from "@/features/Ai-Marketer/data/dashboard";
import { CARD } from "../tokens";

const iconMap: Record<FeedItemIcon, LucideIcon> = { TrendingUp, PauseCircle, Target, Zap };

export const ActivityFeed = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-4 py-2.5 border-b border-neutral-900 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-neutral-400" />
        <span className="text-sm font-semibold text-white">Ryze agent activity</span>
      </div>
      <span className="text-[11px] text-neutral-400">Live</span>
    </div>
    <div className="divide-y divide-neutral-900">
      {feedItems.map((item, i) => {
        const Icon = iconMap[item.iconName];
        return (
          <div key={i} className="flex items-start gap-3 px-4 py-3">
            <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${toneMap[item.tone]}`}>
              <Icon size={12} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white leading-snug">{item.title}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{item.meta}</div>
            </div>
            <span className="text-[11px] text-neutral-500 shrink-0">{item.time}</span>
          </div>
        );
      })}
    </div>
  </div>
);
