"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus, X, Lock, Sparkles, TrendingUp } from "lucide-react";

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
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[780px]"
    >
      {/* Ambient glow behind window — pure depth, no bg change */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[32px] bg-white/20 blur-2xl opacity-60"
      />

      {/* ——— Floating window ——— */}
      <div className="relative rounded-[20px] md:rounded-[24px] border border-black/5 bg-white shadow-[0_50px_120px_-24px_rgba(0,0,0,0.55),0_20px_40px_-20px_rgba(0,0,0,0.35)] overflow-hidden">
        {/* Window chrome: traffic lights + tabs */}
        <div
          aria-hidden
          className="flex items-end gap-2 pl-4 pr-2 pt-3 bg-neutral-100 border-b border-black/5 select-none"
        >
          <div className="flex items-center gap-1.5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>

          <div className="flex items-end gap-0.5 ml-3 flex-1 min-w-0 overflow-hidden">
            {TABS.map((tab) => (
              <TabPill key={tab.title} tab={tab} />
            ))}
            <span className="shrink-0 ml-1 mb-1 inline-flex items-center justify-center h-6 w-6 rounded-md text-neutral-400">
              <Plus className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* URL bar */}
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

        {/* Video demo — main focal point */}
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

      {/* ——— Floating UI chips for depth ——— */}
      {/* Top-right: live-connection pill */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="hidden md:flex absolute -top-5 right-6 lg:right-10 items-center gap-2 rounded-full bg-white/95 backdrop-blur-md border border-black/5 pl-2.5 pr-3.5 py-1.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-semibold text-neutral-800 tracking-tight">
          Connected to Claude
        </span>
      </motion.div>

      {/* Bottom-left: action chip */}
      <motion.div
        initial={{ opacity: 0, x: -10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="hidden md:flex absolute -bottom-5 left-4 lg:left-8 items-center gap-2.5 rounded-full bg-neutral-900/95 backdrop-blur-md border border-white/10 pl-2.5 pr-4 py-1.5 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.55)]"
      >
        <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#ffb59c] to-[#e35a32] flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-white" />
        </span>
        <span className="text-[11px] font-medium text-white tracking-tight">
          Audit ran in <span className="font-semibold">24s</span>
        </span>
      </motion.div>

      {/* Bottom-right: stat card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="hidden lg:flex absolute -bottom-8 -right-4 flex-col items-start gap-1 rounded-2xl bg-white/95 backdrop-blur-md border border-black/5 px-4 py-3 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.4)]"
      >
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-neutral-500 font-semibold">
          <TrendingUp className="w-3 h-3 text-emerald-600" />
          ROAS uplift
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-display font-semibold text-neutral-900">
            +24%
          </span>
          <span className="text-[10px] text-emerald-600 font-medium">
            last 7d
          </span>
        </div>
      </motion.div>
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
