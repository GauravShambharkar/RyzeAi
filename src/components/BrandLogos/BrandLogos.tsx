"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Forbes", src: "/collaborations/forbes.svg" },
  { name: "Axios", src: "/collaborations/axios.svg" },
  { name: "WSJ", src: "/collaborations/wsj.svg" },
  { name: "Fortune", src: "/collaborations/fortune.svg" },
  { name: "Business Insider", src: "/collaborations/business-insider.svg" },
];

export const BrandLogos = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 border-y border-border/50 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-12">
          2,000+ top brands trust Ryze to grow
        </p>

        <div className="relative">
          {/* Gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            className="flex overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex gap-20 items-center whitespace-nowrap flex-shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: isHovered ? 60 : 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={i}
                  className="relative h-8 md:h-10 w-[160px] md:w-[200px] shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    sizes="200px"
                    className="object-contain select-none invert brightness-200"
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
