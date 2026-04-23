"use client";

import React from "react";
import { motion } from "framer-motion";
import { trioCards } from "@/features/mcp/data/featureTrio.cards";
import { TrioCard } from "./TrioCard";

export const FeatureTrio = () => (
  <section className="relative py-24 md:py-32 bg-[#FAF7F2]">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 leading-[1.05] tracking-tighter max-w-3xl"
      >
        Ryze AI: Connect <span className="italic text-[#e35a32]">Claude</span> to Google &amp; Meta Ads
      </motion.h2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4">
        {trioCards.map((c, i) => (
          <TrioCard key={c.num} card={c} index={i} />
        ))}
      </div>
    </div>
  </section>
);
