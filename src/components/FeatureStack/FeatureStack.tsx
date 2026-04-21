"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  BarChart3,
  Target,
  FileSearch,
  PenTool,
  Users,
  ShieldCheck,
  LineChart,
} from "lucide-react";

const stackItems = [
  {
    title: "Predictive Modeling",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "AI forecasts performance before you spend a single dollar.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Custom Ad Creatives",
    icon: <PenTool className="w-6 h-6" />,
    description: "High-converting visual assets generated in seconds.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Technical SEO",
    icon: <FileSearch className="w-6 h-6" />,
    description: "Autonomous crawling and fixing of indexation issues.",
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Content Gen",
    icon: <PenTool className="w-6 h-6" />,
    description: "SEO-optimized articles and landing page copy that ranks.",
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Real-time Reporting",
    icon: <LineChart className="w-6 h-6" />,
    description: "Live dashboard with deep insights into every metric.",
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Conversion Optimization",
    icon: <Target className="w-6 h-6" />,
    description: "A/B testing running automatically on your website.",
    color: "bg-cyan-500/10 text-cyan-500"
  }
];

export const FeatureStack = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Full stack
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display mb-5 text-white leading-[1.05]">
            Everything built for <span className="italic">performance</span>
          </h2>
          <p className="text-neutral-400 font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Specialized agents across every layer of your growth stack &mdash; creative, technical, analytical.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {stackItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:bg-neutral-900 transition-all group flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-display mb-3 text-white">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-body">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section — monumental statue backdrop = enduring reliability */}
        <div className="relative rounded-[3rem] overflow-hidden group">
          {/* Pixel-art monument backdrop */}
          <Image
            src="/PixelArt/Gemini_Generated_Image_o1xa64o1xa64o1xa.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Layered washes — keep art visible, text fully readable */}
          {/* <div className="absolute inset-0 bg-black/70" /> */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-black/30" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/25 rounded-full blur-[100px] group-hover:blur-[120px] transition-all" />

          <div className="relative z-10 max-w-3xl p-12 md:p-20 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-8">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              Scale edition
            </div>
            <h2 className="text-4xl md:text-6xl font-display mb-6 leading-[1.02] tracking-tight">
              Built to <span className="italic">last</span> at enterprise scale
            </h2>
            <p className="text-white/70 font-body text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              For agencies and growth teams running dozens of accounts. Built for governance, reliability, and compounding wins across every client.
            </p>
            <div className="grid sm:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-base md:text-lg font-display font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  White-label reports
                </h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">Present Ryze insights as your own with fully customizable branding.</p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-display font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  Team collaboration
                </h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">Manage permissions, approvals, and workflows across large marketing teams.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-black rounded-full px-7 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all">
                Get enterprise access
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/15 text-white rounded-full px-7 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] hover:bg-white/10 transition-colors">
                View case studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
