"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "These AI-driven ads outperform human optimization by a huge margin. We've seen a +63% increase in revenue in just 90 days.",
    author: "Alex Rivers",
    title: "Growth Lead @ Spectrum",
    metric: "+63% Revenue",
    type: "twitter"
  },
  {
    text: "Ryze is remarkably speedy. The autonomous SEO agent started ranking our keywords faster than any agency we've ever worked with.",
    author: "Sarah Chen",
    title: "Product Manager @ Openpay",
    metric: "#1 Ranking",
    type: "quote"
  },
  {
    text: "The website builder created a high-converting landing page in minutes. It feels like magic to see it optimize in real-time.",
    author: "Marcus Vogel",
    title: "Founder @ Calyx",
    metric: "4.8/5 Trustpilot",
    type: "trustpilot"
  },
  {
    text: "Literally the only tool that actually delivers on the 'AI Agent' promise. It doesn't just suggest, it executes.",
    author: "Jessica Lam",
    title: "Head of Marketing @ FinTech",
    metric: "10x Efficency",
    type: "twitter"
  },
  {
    text: "The transparency is what sold us. Seeing every bid adjustment and the reasoning behind it builds total trust.",
    author: "David Knight",
    title: "CMO @ RetailFlow",
    metric: "-40% CPA",
    type: "quote"
  },
  {
    text: "We replaced three different apps with Ryze. It runs our entire front-of-funnel on autopilot.",
    author: "Elena Rossi",
    title: "E-commerce Director",
    metric: "3.5x ROI",
    type: "trustpilot"
  }
];

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Testimonials = () => {
  return (
    <section className="py-32 bg-[#f9fafb] relative overflow-hidden">
      {/* Background Pixel Art - subtle corner decor */}
      <div className="absolute left-[-150px] top-[10%] opacity-[0.03] rotate-[-15deg] pointer-events-none scale-150">
        <Image src="/PixelArt/lambDancing.png" alt="" width={800} height={800} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display text-slate-900 mb-6"
          >
            Wall of Love ❤️
          </motion.h2>
          <p className="text-slate-500 font-body max-w-2xl mx-auto text-lg leading-relaxed">
            Real results from businesses scaling with autonomous AI. No fluff, just performance.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid bg-white border border-slate-200 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-800 leading-relaxed font-body text-[15px] mb-8">
                "{t.text}"
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-display text-slate-400 text-xs">
                      {t.author.charAt(0)}
                   </div>
                   <div>
                     <p className="text-sm font-bold text-slate-900">{t.author}</p>
                     <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{t.title}</p>
                   </div>
                </div>
                {t.type === 'twitter' ? (
                  <XIcon />
                ) : (
                  <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
                    {t.metric}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
