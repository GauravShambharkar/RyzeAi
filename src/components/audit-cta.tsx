"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export const AuditCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0f1115] text-white">
      {/* Background Image (Pixel Art) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/PixelArt/brokenPillers.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent mb-8"
            >
              <Zap size={14} className="fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Free growth audit</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1] mb-8"
            >
              We analyze your ads, SEO, and website for free
            </motion.h2>
            
            <ul className="space-y-6">
              {[
                "Find hidden leakages in your ad spend",
                "Identify high-impact SEO opportunities",
                "Technical website health checkup",
                "Competitor benchmarking report"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/70 font-body text-lg">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-slate-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative"
          >
            {/* Subtle floating pixel art decor */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rotate-12 hidden md:block">
               <Image src="/PixelArt/pettingLamb.png" alt="" width={100} height={100} className="drop-shadow-2xl" />
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.2em] text-slate-400">Work Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.2em] text-slate-400">Website URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body"
                />
              </div>

              <button className="w-full bg-primary text-primary-foreground rounded-xl py-5 font-bold font-display uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/95 transition-all group">
                Run audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            
            <p className="mt-8 text-center text-[10px] text-slate-400 font-body leading-relaxed flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Audit delivered to your inbox within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
