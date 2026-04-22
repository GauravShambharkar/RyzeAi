"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay: 0.08 }}
    className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a0f0a] via-[#120806] to-[#080202] p-8 md:p-12 flex flex-col justify-center"
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,90,50,0.25),transparent_65%)] pointer-events-none" />
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    />

    <div className="relative">
      <div className="text-[10px] uppercase tracking-[0.2em] text-[#e35a32]">Final step</div>
      <h3 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl text-white leading-[1.02] tracking-tight max-w-md">
        Connect Claude to your Ads
      </h3>
      <p className="mt-3 text-sm text-white/60 max-w-md leading-relaxed">
        Get your dedicated MCP server. Connect Claude, ChatGPT, or Cursor to Google Ads, Meta Ads, and Google Analytics.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md"
      >
        <input
          type="email"
          placeholder="work@email.com"
          className="flex-1 bg-white/5 border border-white/15 backdrop-blur-sm px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e35a32]/50"
        />
        <button className="group inline-flex items-center justify-center gap-1.5 bg-[#e35a32] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#f06a3f] transition-colors">
          Get MCP access
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </form>

      <div className="mt-4 text-[10px] text-white/40">Free to start · No card required</div>
    </div>
  </motion.div>
);
