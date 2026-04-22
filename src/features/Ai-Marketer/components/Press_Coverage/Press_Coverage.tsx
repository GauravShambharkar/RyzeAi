"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { pressBrands } from "@/features/Ai-Marketer/data/pressBrands";

export const Press_Coverage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 md:py-24 border-y border-border/50 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Press &amp; coverage
          </div>
          <p className="text-center text-sm md:text-[15px] text-neutral-400 font-body max-w-xl leading-relaxed">
            Trusted by <span className="text-white font-semibold">2,000+ teams</span> &mdash; and covered by the publications setting the pace for what&apos;s next.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div
            className="flex overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex gap-16 md:gap-24 items-center whitespace-nowrap flex-shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: isHovered ? 42 : 22, repeat: Infinity, ease: "linear" }}
            >
              {[...pressBrands, ...pressBrands].map((brand, i) => (
                <div
                  key={i}
                  className="relative h-7 md:h-9 w-[150px] md:w-[190px] shrink-0 transition-transform duration-500 ease-out hover:scale-110"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    sizes="200px"
                    className="object-contain select-none [filter:brightness(0)_invert(1)]"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
