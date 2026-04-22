"use client";

import React from "react";
import { motion } from "framer-motion";
import { activityBoxes, operations } from "@/features/Ai-Marketer/data/dashboard";
import { LABEL } from "../tokens";
import { ActivityBox } from "../cards/ActivityBox";
import { OperationRow } from "../cards/OperationRow";
import { MonitoringHeader } from "./MonitoringHeader";
import { ChatPanel } from "./ChatPanel";

export const MonitoringTab = () => (
  <motion.div
    key="monitoring"
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    className="flex-1 flex flex-col"
  >
    <MonitoringHeader />

    <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 p-6 space-y-5 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {activityBoxes.map((b) => (
            <ActivityBox key={b.title} {...b} />
          ))}
        </div>

        <div className="space-y-3">
          <div className={LABEL}>Active Operations</div>
          {operations.map((op) => (
            <OperationRow key={op.label} {...op} />
          ))}
        </div>
      </div>

      <ChatPanel />
    </div>
  </motion.div>
);
