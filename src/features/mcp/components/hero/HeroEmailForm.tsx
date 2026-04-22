"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroEmailForm = () => (
  <motion.form
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
    onSubmit={(e) => e.preventDefault()}
  >
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-md px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#e35a32]/50"
    />
    <button
      type="submit"
      className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 hover:shadow-lg transition-all"
    >
      Get started
      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
    </button>
  </motion.form>
);
