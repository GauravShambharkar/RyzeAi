"use client";

import React from "react";
import Image from "next/image";
import { Zap, Users, ShieldCheck } from "lucide-react";

export const EnterpriseBlock = () => (
  <div className="relative overflow-hidden group">
    <Image
      src="/PixelArt/Gemini_Generated_Image_o1xa64o1xa64o1xa.png"
      alt=""
      fill
      sizes="100vw"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-black/30" />
    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/25 blur-[100px] group-hover:blur-[120px] transition-all" />

    <div className="relative z-10 max-w-3xl p-12 md:p-20 text-white">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-8">
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
          <p className="text-white/60 text-sm font-body leading-relaxed">
            Present Ryze insights as your own with fully customizable branding.
          </p>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-display font-semibold mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            Team collaboration
          </h3>
          <p className="text-white/60 text-sm font-body leading-relaxed">
            Manage permissions, approvals, and workflows across large marketing teams.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="bg-white text-black px-7 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all">
          Get enterprise access
        </button>
        <button className="bg-white/5 backdrop-blur-md border border-white/15 text-white px-7 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] hover:bg-white/10 transition-colors">
          View case studies
        </button>
      </div>
    </div>
  </div>
);
