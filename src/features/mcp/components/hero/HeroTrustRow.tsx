import React from "react";
import Image from "next/image";
import { trustLogos } from "@/features/mcp/data/mcpHero";

export const HeroTrustRow = () => (
  <div className="mt-8 flex items-center gap-5 text-white/75">
    <span className="text-[11px] uppercase tracking-[0.2em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Connects to</span>
    <div className="flex items-center gap-3">
      {trustLogos.map((l) => (
        <div
          key={l.label}
          className="h-8 w-8 rounded-xl border border-white/25 bg-white/15 backdrop-blur-sm flex items-center justify-center p-1.5 shadow-sm"
          title={l.label}
        >
          <Image src={l.src} alt={l.label} width={32} height={32} className="h-full w-full object-contain" />
        </div>
      ))}
    </div>
  </div>
);
