"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TabType } from "./tokens";
import { ScrollAnimations } from "./ScrollAnimations";
import { BrowserFrame } from "./BrowserFrame";
import { Sidebar } from "./Sidebar";
import { SimulationOverlay } from "./SimulationOverlay";
import { DashboardTab } from "./tabs/DashboardTab";
import { SeoTab } from "./tabs/SeoTab";
import { MonitoringTab } from "./tabs/MonitoringTab";

export const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [isSimulated, setIsSimulated] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-6xl mx-auto"
      onMouseDown={() => setIsSimulated(false)}
    >
      <ScrollAnimations />

      <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl shadow-black/60 flex flex-col h-[700px]">
        <BrowserFrame activeTab={activeTab} onSelectTab={setActiveTab} />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />

          <div className="flex-1 relative overflow-hidden flex flex-col bg-neutral-900">
            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && <DashboardTab />}
              {activeTab === "seo" && <SeoTab />}
              {activeTab === "monitoring" && <MonitoringTab />}
            </AnimatePresence>
          </div>
        </div>

        {isSimulated && <SimulationOverlay />}
      </div>
    </motion.div>
  );
};
