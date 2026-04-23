"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Gauge, ArrowUpRight } from "lucide-react";
import {
  type WebVital,
  type VitalBand,
  promptForVital,
} from "@/features/seo-agent/data/dashboardData";

type Props = {
  vitals: WebVital[];
  domain: string;
};

const BAND_STYLES: Record<VitalBand, { dot: string; text: string; label: string; border: string; bg: string }> = {
  good: {
    dot: "bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]",
    text: "text-emerald-700",
    label: "Good",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    bg: "hover:shadow-[0_12px_32px_-12px_rgba(16,185,129,0.25)]",
  },
  "needs-improvement": {
    dot: "bg-amber-500 shadow-[0_0_0_3px_rgba(245,158,11,0.15)]",
    text: "text-amber-700",
    label: "Needs work",
    border: "border-amber-500/25 hover:border-amber-500/50",
    bg: "hover:shadow-[0_12px_32px_-12px_rgba(245,158,11,0.25)]",
  },
  poor: {
    dot: "bg-rose-500 shadow-[0_0_0_3px_rgba(244,63,94,0.15)]",
    text: "text-rose-700",
    label: "Poor",
    border: "border-rose-500/25 hover:border-rose-500/50",
    bg: "hover:shadow-[0_12px_32px_-12px_rgba(244,63,94,0.25)]",
  },
};

export const WebVitalsSection = ({ vitals, domain }: Props) => {
  const router = useRouter();

  const askForFix = (vital: WebVital) => {
    const prompt = promptForVital(vital, domain);
    router.push(`/seo-agent?ask=${encodeURIComponent(prompt)}`);
  };

  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-emerald-600" />
          <h2 className="font-display text-lg md:text-xl tracking-tight text-neutral-900">
            Core Web Vitals
          </h2>
        </div>
        <span className="text-[11px] text-neutral-500 font-mono">
          Field data, last 28 days
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {vitals.map((v) => {
          const s = BAND_STYLES[v.band];
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => askForFix(v)}
              className={`group text-left rounded-3xl border bg-white px-5 py-5 transition-all hover:-translate-y-0.5 ${s.border} ${s.bg}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`w-2 h-2 rounded-full ${s.dot}`} aria-hidden />
                <span
                  className={`text-[10px] uppercase tracking-wide font-semibold ${s.text}`}
                >
                  {s.label}
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <div className={`font-display text-3xl md:text-4xl tracking-tighter text-neutral-900`}>
                  {v.valueLabel}
                </div>
                <div className="text-[11px] text-neutral-400 font-mono">
                  {v.target}
                </div>
              </div>

              <div className="mt-3 text-xs font-medium text-neutral-800 leading-snug">
                {v.label}
              </div>
              <div className="mt-1 text-[11px] text-neutral-500 leading-relaxed">
                {v.helper}
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-medium text-neutral-500 group-hover:text-emerald-700 transition-colors">
                Ask AI to fix
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
