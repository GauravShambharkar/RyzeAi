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
    className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#fff5ef] via-white to-[#fffaf6] shadow-[0_24px_60px_-20px_rgba(227,90,50,0.25)] p-8 md:p-12 flex flex-col justify-center"
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,90,50,0.18),transparent_65%)] pointer-events-none" />
    <div
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#e35a32 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    />

    <div className="relative">
      <div className="text-[10px] uppercase tracking-[0.2em] text-[#e35a32] font-semibold">Final step</div>
      <h3 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 leading-[1.02] tracking-tighter max-w-md">
        Connect Claude to your Ads
      </h3>
      <p className="mt-3 text-sm text-neutral-600 max-w-md leading-6 tracking-tight">
        Get your dedicated MCP server. Connect Claude, ChatGPT, or Cursor to Google Ads, Meta Ads, and Google Analytics.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md"
      >
        <input
          type="email"
          placeholder="work@email.com"
          className="flex-1 rounded-full bg-white border border-black/5 shadow-sm px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e35a32]/40"
        />
        <button className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#e35a32] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#f06a3f] hover:shadow-lg transition-all">
          Get MCP access
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </form>

      <div className="mt-4 text-[10px] text-neutral-500">Free to start · No card required</div>
    </div>
  </motion.div>
);
