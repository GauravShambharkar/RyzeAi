"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

type Item = {
  kind: "text" | "image";
  text: string;
  author: string;
  title: string;
  metric?: string;
  image?: string;
  span?: string; // grid span classes applied at lg
};

/* Bento layout (4-col grid, 3 rows):
   [T] [T] [IMG 2col]
   [IMG 2col] [T] [T]
   [T] [IMG 2col] [T]
*/
const items: Item[] = [
  {
    kind: "text",
    text: "These AI-driven ads outperform human optimization by a huge margin. +63% revenue in 90 days.",
    author: "Alex Rivers",
    title: "Growth Lead @ Spectrum",
    metric: "+63% Revenue",
  },
  {
    kind: "text",
    text: "Ryze is remarkably speedy. The autonomous SEO agent started ranking our keywords faster than any agency we've ever worked with.",
    author: "Sarah Chen",
    title: "Product Manager @ Openpay",
    metric: "#1 Ranking",
  },
  {
    kind: "image",
    text: "Standing on stage at SaaStr telling the story of how Ryze took our CAC from $180 to $62 in a single quarter.",
    author: "Marcus Vogel",
    title: "Founder @ Calyx",
    image: "/WallOfLove/StagedSpeech.avif",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    kind: "image",
    text: "Our whole growth team moved to Ryze last April. One tool replaced three. Nothing we've ever shipped has made this much of a dent.",
    author: "Jessica Lam",
    title: "Head of Marketing @ FinTech",
    image: "/WallOfLove/GrpImage.avif",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    kind: "text",
    text: "The transparency sold us. Every bid adjustment, every reasoning — it's all there. Total trust.",
    author: "David Knight",
    title: "CMO @ RetailFlow",
    metric: "-40% CPA",
  },
  {
    kind: "text",
    text: "Replaced three different apps with Ryze. It runs our entire front-of-funnel on autopilot.",
    author: "Elena Rossi",
    title: "E-commerce Director",
    metric: "3.5x ROI",
  },
  {
    kind: "text",
    text: "The website builder shipped a high-converting landing page in minutes. Watching it optimize in real-time feels like magic.",
    author: "Priya Patel",
    title: "VP Growth @ Lumen",
    metric: "4.8/5 Trustpilot",
  },
  {
    kind: "image",
    text: "The only tool that actually delivers on the 'AI Agent' promise. It doesn't just suggest — it executes.",
    author: "James Ortiz",
    title: "Founder @ Northline",
    image: "/WallOfLove/slfee.avif",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    kind: "text",
    text: "We finally have a marketing team that works while we sleep. 24/7 optimization with zero meetings.",
    author: "Nora Ahmed",
    title: "COO @ Kinly",
    metric: "2.1x Pipeline",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Ambient corner decor */}
      <div className="absolute left-[-150px] top-[8%] opacity-[0.04] rotate-[-15deg] pointer-events-none scale-150">
        <Image src="/PixelArt/lambDancing.png" alt="" width={800} height={800} />
      </div>
      <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Wall of Love
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display text-white mb-5 leading-[1.05]"
          >
            Loved by teams <span className="italic">that ship</span>
          </motion.h2>
          <p className="text-neutral-400 font-body max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Real results from founders, growth leads, and CMOs scaling with autonomous AI.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(280px,1fr)]">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.5 }}
              className={t.span ?? ""}
            >
              {t.kind === "text" ? <TextCard {...t} /> : <ImageCard {...t} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────────────────────────── Cards ───────────────────────────── */

const TextCard = ({ text, author, title, metric }: Item) => (
  <div className="h-full flex flex-col gap-5 p-6 md:p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-colors duration-300">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>

    <p className="text-neutral-200 leading-relaxed font-body text-[15px] flex-1">
      "{text}"
    </p>

    <div className="flex items-center justify-between pt-5 border-t border-neutral-800">
      <AuthorBlock author={author} title={title} />
      {metric && (
        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-[9px] font-semibold uppercase tracking-widest whitespace-nowrap">
          {metric}
        </span>
      )}
    </div>
  </div>
);

const ImageCard = ({ text, author, title, image }: Item) => (
  <div className="h-full relative rounded-2xl overflow-hidden border border-neutral-800 group">
    {/* Photo */}
    <Image
      src={image!}
      alt={author}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-out brightness-[1.7] contrast-105 saturate-125"
    />

    {/* Readability gradient — soft, only darkens the very bottom for text legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    {/* Content */}
    <div className="relative h-full flex flex-col justify-between p-6 md:p-7">
      {/* Top badge */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold uppercase tracking-widest text-white">
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          Customer story
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      {/* Quote + author at bottom */}
      <div className="space-y-4">
        <p className="text-white font-display text-xl md:text-[22px] leading-[1.3] drop-shadow-md">
          "{text}"
        </p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[11px] font-semibold text-white">
            {author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{author}</p>
            <p className="text-[11px] text-white/70 uppercase tracking-wider">{title}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AuthorBlock = ({ author, title }: { author: string; title: string }) => (
  <div className="flex items-center gap-3 min-w-0">
    <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center font-display text-neutral-500 text-xs shrink-0">
      {author.charAt(0)}
    </div>
    <div className="min-w-0">
      <p className="text-sm font-semibold text-white truncate">{author}</p>
      <p className="text-[11px] text-neutral-500 uppercase tracking-wider truncate">{title}</p>
    </div>
  </div>
);
