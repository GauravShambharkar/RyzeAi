"use client";

import React from "react";
import { motion } from "framer-motion";
import { domainStats, healthCards } from "@/features/Ai-Marketer/data/dashboard";
import { Header } from "../Header";
import { CARD } from "../tokens";
import { DomainStat } from "../cards/DomainStat";
import { HealthCard } from "../cards/HealthCard";
import { TrafficTrendCard } from "../cards/TrafficTrendCard";
import { KeywordsCard } from "../cards/KeywordsCard";
import { AutoFixCard } from "../cards/AutoFixCard";
import { TopPagesCard } from "../cards/TopPagesCard";

export const SeoTab = () => (
  <motion.div
    key="seo"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex-1 flex flex-col p-6 gap-5"
  >
    <div className="flex items-center justify-between">
      <Header title="SEO Strategy & Execution" subtitle="ryze.ai · scanned 2 min ago" />
      <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-700 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Scanning
      </span>
    </div>

    <div className="flex-1 overflow-hidden relative">
      <div
        style={{ animation: "seoScroll 26s cubic-bezier(0.45, 0, 0.25, 1) infinite" }}
        className="space-y-5 pr-3"
      >
        <div className={`${CARD} p-5`}>
          <div className="grid grid-cols-4 gap-5">
            {domainStats.map((s) => (
              <DomainStat key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {healthCards.map((h) => (
            <HealthCard key={h.label} {...h} />
          ))}
        </div>

        <TrafficTrendCard />
        <KeywordsCard />
        <AutoFixCard />
        <TopPagesCard />
        <div className="h-8" />
      </div>

      <div className="absolute top-0 right-0 h-full w-1.5 bg-black/5 rounded-full pointer-events-none">
        <div
          style={{ animation: "seoThumb 26s cubic-bezier(0.45, 0, 0.25, 1) infinite" }}
          className="w-full h-[140px] bg-black/25 rounded-full"
        />
      </div>
    </div>
  </motion.div>
);
