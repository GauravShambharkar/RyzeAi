"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center pt-24 md:pt-32 lg:pt-40 overflow-hidden">
      {/* Background Image (Pixel Art) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/PixelArt/brokenPillers.png"
          alt="Atmospheric Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* 1. Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/20 backdrop-blur-md px-4 py-1.5 text-xs text-foreground font-body mb-6"
        >
          <span>Now with GPT-5 support ✨</span>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-2xl drop-shadow-sm"
        >
          The Future of <span className="font-display italic">Smarter</span> Automation
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-center text-base leading-relaxed md:text-lg text-foreground max-w-2xl font-body drop-shadow-sm"
        >
          Automate your busywork with intelligent agents that learn, adapt, and execute—so your team can focus on what matters most.
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center gap-3"
        >
          <button className="rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium font-body hover:opacity-90 transition-all shadow-sm">
            Book a demo
          </button>

          <button className="h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80 transition-all flex items-center justify-center group">
            <Play className="h-4 w-4 fill-foreground text-foreground ml-0.5 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
