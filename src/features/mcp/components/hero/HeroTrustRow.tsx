import React from "react";
import Image from "next/image";
import { trustLogos } from "@/features/mcp/data/mcpHero";

export const HeroTrustRow = () => (
  <div className="mt-8 flex items-center gap-5 text-white/50">
    <span className="text-[11px] uppercase tracking-[0.2em]">Connects to</span>
    <div className="flex items-center gap-3">
      {trustLogos.map((l) => (
        <div
          key={l.label}
          className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center p-1.5"
          title={l.label}
        >
          <Image src={l.src} alt={l.label} width={32} height={32} className="h-full w-full object-contain" />
        </div>
      ))}
    </div>
  </div>
);
