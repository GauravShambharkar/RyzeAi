"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center pt-24 md:pt-32 lg:pt-40">
      {/* Background Image (Pixel Art) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/PixelArt/brokenPillers.png"
          alt="Atmospheric Background"
          fill
          className="object-cover brightness-85"
          priority
        />
        {/* Bottom fade — image dissolves into the black section below */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent from-90% to-black to-100%" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* 1. Badge
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/20 backdrop-blur-md px-4 py-1.5 text-xs text-foreground font-body mb-6"
        >
          <span>Now with GPT-5 support ✨</span>
        </motion.div> */}

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl text-white md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-tighter max-w-4xl drop-shadow-sm"
        >
          AI runs your <span className="italic">ads, </span> <span className="text-blue-500 mix-blend-screen italic">SEO, </span> <br /> and website
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-xs text-white/70 leading-relaxed md:text-sm max-w-2xl font-body drop-shadow-sm"
        >
          More customers on autopilot — all for our products built for you
        </motion.p>

        {/* 4. CTA with Email Input */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
        >
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-background/50 backdrop-blur-md border border-border rounded-full px-6 py-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
          <button className="whitespace-nowrap rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold font-body hover:opacity-90 transition-all shadow-md w-full sm:w-auto">
            Get started
          </button>
        </motion.div>

      </div>
    </section>
  );
};
