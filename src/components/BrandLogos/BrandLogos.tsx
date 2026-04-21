"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "The New York Times",
  "Forbes",
  "Axios",
  "WSJ",
  "Fortune",
  "TechCrunch",
  "Bloomberg",
  "Wired"
];

export const BrandLogos = () => {
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
          
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-16 items-center whitespace-nowrap animate-marquee flex-shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...brands, ...brands].map((brand, i) => (
                <span 
                  key={i} 
                  className="text-2xl md:text-3xl font-display text-muted-foreground/40 hover:text-foreground transition-colors cursor-default select-none tracking-tighter"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
