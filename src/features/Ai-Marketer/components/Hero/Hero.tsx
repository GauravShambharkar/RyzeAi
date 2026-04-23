"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-24 md:pt-32 lg:pt-40 overflow-hidden">
      {/* Background Image (Pixel Art) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://i.pinimg.com/control1/1200x/23/73/2b/23732b5be70933055257e69b3c3197a5.jpg"
          alt="Atmospheric Background"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        {/* Subtle depth wash so the headline remains legible */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Soft edges — blend into the cream body above and below */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FAF7F2] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
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
          className="font-display text-5xl text-white md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-tighter max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
        >
          AI runs your <span className="italic">ads, </span> <span className="text-blue-200 italic">SEO, </span> <br /> and website
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-xs text-white/85 leading-6 tracking-tight md:text-sm max-w-2xl font-body drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
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
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white/80 backdrop-blur-md border border-black/5 rounded-full px-6 py-4 text-sm font-body text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-sm"
          />
          <button className="whitespace-nowrap rounded-full bg-neutral-900 text-white px-8 py-4 text-sm font-semibold font-body hover:bg-neutral-800 transition-all shadow-md w-full sm:w-auto">
            Get started
          </button>
        </motion.div>

      </div>
    </section>
  );
};
