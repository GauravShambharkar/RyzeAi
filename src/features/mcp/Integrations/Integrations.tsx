"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

type Logo = { label: string; src: string; invert?: boolean };

const AI_TOOLS: Logo[] = [
  { label: "Claude", src: "/services/claude_logo.png" },
  { label: "ChatGPT", src: "/services/ChatGPT-Logo.png", invert: true },
  { label: "Cursor", src: "/services/cursor-logo.png", invert: true },
];

const AD_ACCOUNTS: Logo[] = [
  { label: "Google Ads", src: "/services/google_ads.avif" },
  { label: "Meta Ads", src: "/services/meta.avif" },
  { label: "Google Analytics", src: "/services/google-analytics.svg" },
];

const LogoTile = ({ label, src, invert }: Logo) => (
  <div className="flex flex-col items-center gap-3">
    <div className="h-16 w-16 border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center p-3">
      <Image
        src={src}
        alt={label}
        width={64}
        height={64}
        className={`h-full w-full object-contain ${invert ? "invert brightness-0" : ""}`}
      />
    </div>
    <span className="text-xs text-white/60">{label}</span>
  </div>
);

export const Integrations = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-tight"
        >
          Connect any <span className="italic text-[#e35a32]">AI tool</span>{" "}
          with any ad account
        </motion.h2>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          <div className="flex items-center gap-8 md:gap-10">
            {AI_TOOLS.map((l) => (
              <LogoTile key={l.label} {...l} />
            ))}
          </div>

          <div className="h-10 w-10 border border-white/10 bg-white/5 flex items-center justify-center text-white/60">
            <Plus className="w-4 h-4" />
          </div>

          <div className="flex items-center gap-8 md:gap-10">
            {AD_ACCOUNTS.map((l) => (
              <LogoTile key={l.label} {...l} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
