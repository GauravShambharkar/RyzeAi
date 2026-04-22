import React from "react";
import { Sparkles, TrendingUp, PauseCircle, Target, Zap, type LucideIcon } from "lucide-react";
import { feedItems, toneMap, type FeedItemIcon } from "@/features/Ai-Marketer/data/dashboard";
import { CARD } from "../tokens";

const iconMap: Record<FeedItemIcon, LucideIcon> = { TrendingUp, PauseCircle, Target, Zap };

export const ActivityFeed = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-4 py-2.5 border-b border-black/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-neutral-500" />
        <span className="text-sm font-semibold text-neutral-900">Ryze agent activity</span>
      </div>
      <span className="text-[11px] text-neutral-500">Live</span>
    </div>
    <div className="divide-y divide-black/5">
      {feedItems.map((item, i) => {
        const Icon = iconMap[item.iconName];
        return (
          <div key={i} className="flex items-start gap-3 px-4 py-3">
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${toneMap[item.tone]}`}>
              <Icon size={12} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-neutral-900 leading-snug">{item.title}</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">{item.meta}</div>
            </div>
            <span className="text-[11px] text-neutral-400 shrink-0">{item.time}</span>
          </div>
        );
      })}
    </div>
  </div>
);
