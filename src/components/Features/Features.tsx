"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Search, Layout, BarChart, Zap, ShieldCheck, Globe } from "lucide-react";

const mainFeatures = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Autonomous PPC Optimization",
    description: "AI manages paid ads automatically, adjusting bids and budgets 24/7 to improve ROI without manual tweaking."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Autonomous SEO Agent",
    description: "Keyword tracking, rankings monitoring, and SEO suggestions delivered by an AI that understands search intent."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Autonomous Website Builder",
    description: "AI-generated pages with conversion-focused layouts, optimized for speed and user experience out of the box."
  }
];

const benefits = [
  {
    icon: <Zap className="w-5 h-5 text-accent" />,
    title: "Real-time optimization",
    text: "While humans sleep, our agents are adjusting your campaigns every second."
  },
  {
    icon: <BarChart className="w-5 h-5 text-accent" />,
    title: "Ad Spend Fine-tuned",
    text: "Fine-tuned on real ad spend data across thousands of industries."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    title: "Insider Knowledge",
    text: "Built on insider platform knowledge to stay ahead of algorithm shifts."
  },
  {
    icon: <Globe className="w-5 h-5 text-accent" />,
    title: "Cross-platform",
    text: "Works seamlessly across Google, Meta, TikTok, and more."
  }
];

export const Features = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Growth engine
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display mb-6 text-white leading-[1.05]"
          >
            Autonomous agents, <span className="italic">compounding results</span>
          </motion.h2>
          <p className="text-neutral-400 font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Three always-on AI agents covering the full funnel &mdash; ads, SEO, and site &mdash; learning from every click.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {mainFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800 hover:bg-neutral-900 transition-all group"
            >
              <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-display mb-4 text-white">{f.title}</h3>
              <p className="text-neutral-400 leading-relaxed font-body">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-neutral-950 rounded-[3rem] p-12 md:p-20 border border-neutral-800 shadow-inner shadow-black/40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display mb-8 leading-tight text-white">
                Why Ryze <span className="italic">Outperforms</span>
              </h2>
              <p className="text-neutral-400 font-body text-lg mb-12">
                Built from the ground up for performance at scale. Our agents don't just follow rules—they learn from data.
              </p>

              <div className="grid sm:grid-cols-2 gap-10">
                {benefits.map((b, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-3">
                      {b.icon}
                      <h4 className="font-display font-semibold uppercase tracking-wider text-sm text-white">{b.title}</h4>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pixel-art editorial showcase — nurturing growth, visualized */}
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-[80px] pointer-events-none" />
              <div className="relative animate-float rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] group">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/PixelArt/lambGettingPet.png"
                    alt="A caretaker cradling a lamb — autonomous agents nurturing your growth"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                  {/* Bottom scrim for caption legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  {/* Floating stat badge — top-right */}
                  <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Always on
                  </div>
                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
                    <p className="text-white font-display text-xl md:text-2xl leading-tight drop-shadow-md">
                      Nurturing your growth, <span className="italic">24/7</span>
                    </p>
                    <p className="text-white/70 text-[12px] font-body uppercase tracking-[0.2em]">
                      Agents running while you sleep
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
