"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Search, Gauge, Trophy, type LucideIcon } from "lucide-react";
import type { Finding } from "@/features/Ai-Marketer/data/auditFindings";
import { severityTone } from "@/features/Ai-Marketer/data/auditFindings";

const iconMap: Record<Finding["iconName"], LucideIcon> = {
  Activity,
  Search,
  Gauge,
  Trophy,
};

type Props = { finding: Finding; index: number };

export const FindingRow = ({ finding, index }: Props) => {
  const tone = severityTone[finding.severity];
  const Icon = iconMap[finding.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.08 }}
      className="flex items-center gap-4 px-5 py-4"
    >
      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${tone.pill} ${tone.tag}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-white truncate">{finding.label}</p>
        <p className="text-[11px] text-neutral-500 font-mono truncate">{finding.detail}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-[13px] font-mono tabular-nums text-white">{finding.metric}</p>
        <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${tone.tag}`}>{tone.label}</p>
      </div>
      <span className={`w-1.5 h-8 rounded-full ${tone.dot}`} />
    </motion.div>
  );
};
