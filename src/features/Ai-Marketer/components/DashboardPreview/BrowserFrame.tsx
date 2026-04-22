import React from "react";
import { Plus, ArrowLeft, ArrowRight, RefreshCw, Globe } from "lucide-react";
import { BrowserTab } from "./BrowserTab";
import type { TabType } from "./tokens";

type Props = { activeTab: TabType; onSelectTab: (tab: TabType) => void };

export const BrowserFrame = ({ activeTab, onSelectTab }: Props) => (
  <div className="bg-black p-2.5 flex flex-col gap-2.5 shrink-0">
    <div className="flex items-center gap-4">
      <div className="flex gap-1.5 pl-1">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>

      <div className="flex items-center gap-0.5">
        <BrowserTab label="Campaign Dashboard" active={activeTab === "dashboard"} onClick={() => onSelectTab("dashboard")} />
        <BrowserTab label="SEO Analytics" active={activeTab === "seo"} onClick={() => onSelectTab("seo")} />
        <BrowserTab label="Ryze Monitoring" active={activeTab === "monitoring"} onClick={() => onSelectTab("monitoring")} />
        <button className="p-1.5 text-neutral-400 hover:text-white transition-colors">
          <Plus size={14} />
        </button>
      </div>
    </div>

    <div className="flex items-center gap-3 px-1">
      <div className="flex items-center gap-3 text-neutral-400">
        <ArrowLeft size={14} className="cursor-pointer hover:text-white transition-colors" />
        <ArrowRight size={14} className="cursor-pointer hover:text-white transition-colors" />
        <RefreshCw size={12} className="cursor-pointer hover:text-white transition-colors" />
      </div>
      <div className="flex-1 bg-neutral-900 rounded-md px-3 py-0.5 flex items-center gap-2 border border-white/5">
        <Globe size={12} className="text-neutral-400" />
        <span className="text-[11px] text-neutral-500 font-mono">ryze.ai/{activeTab}</span>
      </div>
    </div>
  </div>
);
