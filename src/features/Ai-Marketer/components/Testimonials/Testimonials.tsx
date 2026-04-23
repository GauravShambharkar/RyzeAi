"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/features/Ai-Marketer/data/testimonials";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { TextCard } from "./TextCard";
import { ImageCard } from "./ImageCard";

export const Testimonials = () => (
  <section className="py-32 relative overflow-hidden bg-[#FAF7F2]">
    <div className="absolute inset-0 pointer-events-none">
      <Image src="/pixelArt2/hoverFloor.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FAF7F2] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
      <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-emerald-400/15 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <TestimonialsHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(280px,1fr)]">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.06, duration: 0.5 }}
            className={`${t.span ?? ""} ${t.kind === "text" ? "hidden md:block" : ""}`}
          >
            {t.kind === "text" ? <TextCard {...t} /> : <ImageCard {...t} />}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
