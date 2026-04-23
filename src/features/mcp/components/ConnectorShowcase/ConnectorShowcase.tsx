"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WeeklyReport } from "./cards/WeeklyReport";
import { CrossOverlap } from "./cards/CrossOverlap";
import { TrueCPA } from "./cards/TrueCPA";
import { AccountAudit } from "./cards/AccountAudit";

const cards = [
  { title: "Weekly report", node: <WeeklyReport /> },
  { title: "Cross-platform overlap", node: <CrossOverlap /> },
  { title: "True CPA analysis", node: <TrueCPA /> },
  { title: "Account audit", node: <AccountAudit /> },
];

export const ConnectorShowcase = () => (
  <section className="relative py-24 md:py-32 bg-[#FAF7F2]">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
      <div className="flex items-center gap-3 justify-center">
        <Sparkles className="w-5 h-5 text-[#e35a32]" />
        <h2 className="font-display text-3xl md:text-5xl text-neutral-900 tracking-tighter text-center">
          What you can do with Claude Connector
        </h2>
      </div>

      <p className="mt-4 text-center text-sm text-neutral-600 max-w-xl mx-auto leading-6 tracking-tight">
        Four real conversations across reporting, budgeting, attribution, and strategy — delivered in the tools you already use.
      </p>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
          >
            <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
              <span className="text-[#e35a32]">▍</span> {c.title}
            </div>
            {c.node}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
