"use client";

import React from "react";
import { motion } from "framer-motion";
import { Header } from "../Header";
import { MetricRow } from "../cards/MetricRow";
import { AdTable } from "../cards/AdTable";
import { MetricCardGroup } from "../cards/MetricCardGroup";
import { ActivityFeed } from "../cards/ActivityFeed";
import { AgentTimeline } from "../cards/AgentTimeline";

export const DashboardTab = () => (
  <motion.div
    key="dash"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex-1 flex flex-col p-6 gap-5"
  >
    <Header title="Campaign Dashboard" subtitle="Autonomous performance across all channels" />
    <MetricRow />

    <div className="flex-1 overflow-hidden relative">
      <div
        style={{ animation: "dashScroll 24s cubic-bezier(0.45, 0, 0.25, 1) infinite" }}
        className="space-y-5 pr-3"
      >
        <AdTable />
        <MetricCardGroup />
        <ActivityFeed />
        <AgentTimeline />
        <div className="h-8" />
      </div>

      <div className="absolute top-0 right-0 h-full w-1.5 bg-neutral-800/60 rounded-full pointer-events-none">
        <div
          style={{ animation: "dashThumb 24s cubic-bezier(0.45, 0, 0.25, 1) infinite" }}
          className="w-full h-[156px] bg-neutral-600/80 rounded-full"
        />
      </div>
    </div>
  </motion.div>
);
