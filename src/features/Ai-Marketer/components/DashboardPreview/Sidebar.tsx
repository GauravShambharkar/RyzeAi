import React from "react";
import { LayoutGrid, MessageSquare, Settings, SearchCode, Terminal } from "lucide-react";
import type { TabType } from "./tokens";

type Props = { activeTab: TabType; onSelectTab: (tab: TabType) => void };

const iconClass = (active: boolean) =>
  `p-2 rounded-xl cursor-pointer transition-all ${
    active ? "bg-white text-neutral-900 shadow-sm border border-black/5" : "text-neutral-500 hover:bg-white/60 hover:text-neutral-900"
  }`;

export const Sidebar = ({ activeTab, onSelectTab }: Props) => (
  <div className="w-[60px] bg-neutral-100 border-r border-black/5 flex flex-col items-center py-4 shrink-0 gap-2 z-40">
    <div
      onClick={() => onSelectTab("dashboard")}
      className="w-8 h-8 bg-neutral-900 rounded-xl flex items-center justify-center text-white text-xs font-semibold mb-2 cursor-pointer"
    >
      R
    </div>
    <div onClick={() => onSelectTab("dashboard")} className={iconClass(activeTab === "dashboard")}>
      <LayoutGrid size={16} />
    </div>
    <div onClick={() => onSelectTab("seo")} className={iconClass(activeTab === "seo")}>
      <SearchCode size={16} />
    </div>
    <div onClick={() => onSelectTab("monitoring")} className={iconClass(activeTab === "monitoring")}>
      <MessageSquare size={16} />
    </div>
    <div className={iconClass(false)}>
      <Terminal size={16} />
    </div>
    <div className="mt-auto">
      <div className={iconClass(false)}>
        <Settings size={16} />
      </div>
    </div>
  </div>
);
