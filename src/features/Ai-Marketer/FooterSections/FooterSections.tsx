"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, Star, CheckCircle2, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Is Ryze an agency?",
    answer: "No, Ryze is an autonomous AI platform. We provide the agents that do the work of an agency—buying ads, optimizing SEO, and building websites—but at a fraction of the cost and 10x the speed."
  },
  {
    question: "Do I need to be a marketing pro to use it?",
    answer: "Not at all. Ryze is designed to be fully autonomous. You set your goals and budget, and our agents handle the technical execution. The chat interface lets you interact with your agents just like you would with a human team."
  },
  {
    question: "What platforms do you support?",
    answer: "We support major advertising platforms including Google Ads, Meta (Facebook/Instagram), TikTok, and Microsoft Ads, along with full SEO automation for Google Search."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most users see efficiency improvements within the first 72 hours as our agents begin pruning wasted spend. SEO results typically follow within 30-90 days depending on your industry competition."
  },
  {
    question: "Can I use it alongside my existing team?",
    answer: "Yes! Many of our clients use Ryze to augment their internal teams, handling the repetitive optimization tasks so their human talent can focus on high-level strategy and creative direction."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Corner pixel-art ornament — pastoral calm */}


      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1  bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            FAQ
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display mb-5 text-white leading-[1.05]">
            The answers <span className="italic">before</span> you ask
          </h2>
          <p className="text-neutral-400 font-body text-base md:text-lg leading-relaxed">
            Everything you need to know about Ryze&apos;s autonomous growth platform.
          </p>
        </div>

        <div className="border-t border-neutral-900">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`relative border-b transition-colors ${isOpen
                  ? "bg-neutral-950 border-neutral-800"
                  : "border-neutral-900 hover:bg-neutral-950/60"
                  }`}
              >
                {/* Editorial left accent on active */}
                <span
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-500 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full pl-7 pr-6 py-5 flex items-center justify-between text-left gap-6 group"
                >
                  <div className="flex items-baseline gap-5 flex-1 min-w-0">
                    <span
                      className={`font-display font-semibold text-[11px] uppercase tracking-[0.2em] tabular-nums shrink-0 transition-colors ${isOpen ? "text-emerald-400" : "text-neutral-600"
                        }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display font-semibold text-base md:text-lg leading-snug transition-colors ${isOpen ? "text-white" : "text-neutral-200 group-hover:text-white"
                        }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 transition-colors ${isOpen ? "text-emerald-400" : "text-neutral-500 group-hover:text-white"
                      }`}
                  >
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[4.5rem] pr-6 pb-6 pt-1 text-neutral-400 font-body leading-relaxed text-[15px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Soft follow-up */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm font-body">
            Still have questions?{" "}
            <a href="#" className="text-white font-semibold hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-neutral-700 hover:decoration-emerald-400">
              Talk to our team &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export const FinalStats = () => {
  const stats = [
    { value: "$250M+", label: "Ad spend managed", sub: "Across Google, Meta, TikTok" },
    { value: "2,000+", label: "Scale-ups & agencies", sub: "From seed to public" },
    { value: "4.8/5", label: "Trustpilot rating", sub: "Based on 1,200+ reviews", star: true },
  ];

  return (
    <section className="py-28 md:py-32 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      {/* Ambient wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.06] via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            By the numbers
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-6 text-center relative">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative px-4"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                {s.star && <Star className="w-7 h-7 md:w-9 md:h-9 fill-amber-400 text-amber-400" />}
                <div className="text-5xl md:text-7xl font-display tracking-tight text-white">
                  {s.value}
                </div>
              </div>
              <p className="text-white font-display font-semibold text-sm md:text-base">{s.label}</p>
              <p className="text-neutral-500 text-xs md:text-sm font-body mt-1">{s.sub}</p>

              {/* Thin dividers between columns (desktop only) */}
              {i < stats.length - 1 && (
                <span className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BottomCTA = () => {
  return (
    <section className="relative overflow-hidden bg-black  border-neutral-900">
      {/* Full-bleed pixel-art backdrop — dancing lamb = joy of shipping */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/PixelArt/lambDancing.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Legibility + cinematic falloff */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Eyebrow — live activity hook */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            247 audits running right now
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-display text-white leading-[1.02] tracking-tight max-w-4xl">
            Stop losing customers to your <span className="italic">competitors</span>.
          </h2>

          {/* Supporting copy — reduces friction before the CTA */}
          <p className="text-neutral-300 font-body text-base md:text-lg max-w-xl leading-relaxed">
            Get a free, AI-generated teardown of your ads, SEO, and funnel &mdash; delivered to your inbox within 24 hours. No calls, no sales pitch.
          </p>

          {/* CTA stack */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <button className="group bg-white text-black px-8 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] transition-all hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 flex items-center gap-3">
              Run my free audit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-6 py-3.5 text-sm font-semibold font-display uppercase tracking-[0.15em] text-white/90 border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2">
              <Sparkles size={16} className="text-emerald-400" />
              See sample report
            </button>
          </div>

          {/* Conversion proof row — stars · rating · review count */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-4 text-white/85 font-body">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.8/5</span>
              <span className="text-sm text-white/50">on Trustpilot</span>
            </div>
            <span className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">2,000+</span>
              <span className="text-white/50">teams scaling with Ryze</span>
            </div>
            <span className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">$250M+</span>
              <span className="text-white/50">ad spend managed</span>
            </div>
          </div>

          {/* Trust markers */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4">
            {[
              "No credit card required",
              "Full SEO teardown",
              "Ad leakage report",
              "Delivered in 24h",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-white/60 font-body text-[13px]">
                <CheckCircle2 size={14} className="text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
