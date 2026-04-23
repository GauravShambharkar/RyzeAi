"use client";

import React from "react";
import Image from "next/image";
import { Zap, Users, ShieldCheck } from "lucide-react";

export const EnterpriseBlock = () => (
  <div className="relative overflow-hidden group rounded-[2.5rem] border border-black/5 shadow-[0_24px_80px_-24px_rgba(20,20,20,0.12)]">
    <Image
      src="/pixelArt2/GreenROck.png"
      alt=""
      fill
      sizes="100vw"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/35" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-400/25 blur-[100px] group-hover:blur-[120px] transition-all" />

    <div className="relative z-10 max-w-3xl p-12 md:p-20 text-white">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-8">
        <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
        Scale edition
      </div>
      <h2 className="text-4xl md:text-6xl font-display mb-6 leading-[1.02] tracking-tighter drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
        Built to <span className="italic text-emerald-300">last</span> at enterprise scale
      </h2>
      <p className="text-white/85 font-body text-base md:text-lg max-w-2xl leading-6 tracking-tight mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
        For agencies and growth teams running dozens of accounts. Built for governance, reliability, and compounding wins across every client.
      </p>
      <div className="grid sm:grid-cols-2 gap-10 mb-12">
        <div>
          <h3 className="text-base md:text-lg font-display font-semibold tracking-tighter mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
            White-label reports
          </h3>
          <p className="text-white/75 text-sm font-body leading-relaxed">
            Present Ryze insights as your own with fully customizable branding.
          </p>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-display font-semibold tracking-tighter mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-300" />
            Team collaboration
          </h3>
          <p className="text-white/75 text-sm font-body leading-relaxed">
            Manage permissions, approvals, and workflows across large marketing teams.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full bg-white text-neutral-900 px-7 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all">
          Get enterprise access
        </button>
        <button className="rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white px-7 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em] hover:bg-white/20 transition-colors">
          View case studies
        </button>
      </div>
    </div>
  </div>
);
