"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus, X, Lock } from "lucide-react";

type Tab = {
  title: string;
  favicon: string;
  faviconBg: string;
  faviconColor: string;
  active?: boolean;
};

const TABS: Tab[] = [
  {
    title: "Ryze MCP — Live Audit",
    favicon: "R",
    faviconBg: "bg-neutral-900",
    faviconColor: "text-white",
    active: true,
  },
  {
    title: "Google Ads · Campaigns",
    favicon: "G",
    faviconBg: "bg-blue-500",
    faviconColor: "text-white",
  },
  {
    title: "GA4 · Acquisition",
    favicon: "A",
    faviconBg: "bg-amber-500",
    faviconColor: "text-white",
  },
  {
    title: "MCP Docs",
    favicon: "D",
    faviconBg: "bg-emerald-500",
    faviconColor: "text-white",
  },
];

const ACTIVE_URL = "claude.ai / ryze-mcp · live audit";

export const HeroPreview = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="relative lg:ml-10 xl:ml-14"
    >
      <div className="relative rounded-3xl border border-black/5 bg-white shadow-[0_40px_100px_-24px_rgba(20,20,20,0.35)] overflow-hidden">
        {/* ——— Window chrome: traffic lights + tab strip ——— */}
        <div
          aria-hidden
          className="flex items-end gap-2 pl-4 pr-2 pt-3 bg-neutral-100 border-b border-black/5 select-none"
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Tabs */}
          <div className="flex items-end gap-0.5 ml-3 flex-1 min-w-0 overflow-hidden">
            {TABS.map((tab) => (
              <TabPill key={tab.title} tab={tab} />
            ))}
            <span className="shrink-0 ml-1 mb-1 inline-flex items-center justify-center h-6 w-6 rounded-md text-neutral-400">
              <Plus className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* ——— URL bar ——— */}
        <div
          aria-hidden
          className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-black/5 select-none"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-6 w-6 rounded-md text-neutral-400 inline-flex items-center justify-center text-xs">
              ‹
            </span>
            <span className="h-6 w-6 rounded-md text-neutral-400 inline-flex items-center justify-center text-xs">
              ›
            </span>
          </div>
          <div className="flex-1 flex items-center gap-2 h-7 rounded-full bg-neutral-100 border border-black/5 px-3 min-w-0">
            <Lock className="w-3 h-3 text-neutral-500 shrink-0" />
            <span className="text-[11px] text-neutral-600 font-mono truncate">
              {ACTIVE_URL}
            </span>
          </div>
          <span className="ml-1 inline-flex items-center gap-1.5 text-[10px] text-emerald-700 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Recording
          </span>
        </div>

        {/* ——— Active tab content ——— */}
        <video
          src="/assets/mcp-hero-audit.webm"
          autoPlay={!shouldReduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Claude running a Google Ads account audit through the Ryze MCP"
          className="block w-full h-auto bg-neutral-100"
        />
      </div>
    </motion.div>
  );
};

const TabPill = ({ tab }: { tab: Tab }) => (
  <div
    className={[
      "relative shrink-0 min-w-0 max-w-[200px] flex items-center gap-2 h-8 pl-2.5 pr-1.5 text-[11px] font-medium rounded-t-[6px]",
      tab.active
        ? "bg-white text-neutral-800 shadow-[0_-1px_0_0_rgba(0,0,0,0.04)]"
        : "bg-neutral-200/60 text-neutral-500",
    ].join(" ")}
  >
    {tab.active && (
      <span
        aria-hidden
        className="absolute left-0 right-0 -bottom-px h-px bg-white"
      />
    )}
    <span
      className={`h-3.5 w-3.5 shrink-0 rounded-sm ${tab.faviconBg} ${tab.faviconColor} text-[8px] font-bold flex items-center justify-center`}
    >
      {tab.favicon}
    </span>
    <span className="truncate">{tab.title}</span>
    {tab.active && (
      <span
        aria-hidden
        className="ml-0.5 inline-flex items-center justify-center h-4 w-4 rounded-sm text-neutral-400"
      >
        <X className="w-2.5 h-2.5" />
      </span>
    )}
  </div>
);
