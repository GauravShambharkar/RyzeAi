"use client";

import React from "react";
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
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display mb-6"
          >
            Autonomous Growth Engine
          </motion.h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg lowercase">
            Harness the power of AI agents dedicated to your success.
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
              className="p-10 rounded-3xl bg-secondary/20 border border-border/50 hover:bg-secondary/30 transition-all group"
            >
              <div className="mb-6 text-foreground group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-display mb-4">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary/10 rounded-[3rem] p-12 md:p-20 border border-border/50 shadow-inner">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display mb-8 leading-tight">
                Why Ryze <span className="italic">Outperforms</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg mb-12">
                Built from the ground up for performance at scale. Our agents don't just follow rules—they learn from data.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10">
                {benefits.map((b, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-3">
                      {b.icon}
                      <h4 className="font-display font-semibold uppercase tracking-wider text-sm">{b.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px]" />
              <div className="relative h-full flex items-center justify-center">
                 {/* This could be a complex illustration or a pixel art mascot */}
                 <div className="animate-float">
                   <div className="w-64 h-64 bg-foreground/5 backdrop-blur-3xl rounded-3xl border border-white/10 flex items-center justify-center p-8 shadow-2xl relative">
                      <div className="absolute -top-12 -right-12 w-24 h-24 rotate-12">
                          {/* Pixel Art Petting Lamb */}
                          <img src="/PixelArt/pettingLamb.png" alt="Ryze Asset" className="w-full h-full object-contain drop-shadow-lg" />
                      </div>
                      <BarChart className="w-32 h-32 text-primary/20" />
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
