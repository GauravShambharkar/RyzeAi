"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Search, TrendingUp, TrendingDown, Minus, ArrowUpRight } from "lucide-react";
import {
  type Keyword,
  promptForKeyword,
} from "@/features/seo-agent/data/dashboardData";

type Props = {
  keywords: Keyword[];
  domain: string;
};

const DeltaIcon = ({ delta }: { delta: number }) => {
  if (delta > 0)
    return <TrendingUp className="w-3 h-3 text-emerald-600" strokeWidth={2.5} />;
  if (delta < 0)
    return <TrendingDown className="w-3 h-3 text-rose-600" strokeWidth={2.5} />;
  return <Minus className="w-3 h-3 text-neutral-400" strokeWidth={2.5} />;
};

const deltaLabel = (d: number) => (d > 0 ? `+${d}` : d < 0 ? `${d}` : "–");

export const KeywordRankings = ({ keywords, domain }: Props) => {
  const router = useRouter();

  const askForFix = (kw: Keyword) => {
    const prompt = promptForKeyword(kw, domain);
    router.push(`/seo-agent?ask=${encodeURIComponent(prompt)}`);
  };

  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-emerald-600" />
          <h2 className="font-display text-lg md:text-xl tracking-tight text-neutral-900">
            Tracked keywords
          </h2>
        </div>
        <span className="text-[11px] text-neutral-500 font-mono tabular-nums">
          {keywords.length} tracked
        </span>
      </div>

      <div className="rounded-3xl border border-black/5 bg-white overflow-hidden shadow-[0_8px_32px_-16px_rgba(20,20,20,0.08)]">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 px-4 md:px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] text-neutral-500 font-semibold bg-neutral-50/70 border-b border-black/5">
          <span>Keyword</span>
          <span className="text-right">Pos.</span>
          <span className="text-right">7d</span>
          <span className="text-right hidden sm:inline">Vol.</span>
        </div>

        {keywords.map((kw) => (
          <button
            key={kw.keyword}
            type="button"
            onClick={() => askForFix(kw)}
            className="group w-full grid grid-cols-[1fr_auto_auto_auto] gap-x-4 items-center px-4 md:px-5 py-3 text-sm hover:bg-neutral-50/70 transition-colors border-b border-black/5 last:border-b-0 text-left"
          >
            <span className="font-mono text-xs md:text-sm text-neutral-800 truncate group-hover:text-emerald-700 transition-colors">
              {kw.keyword}
            </span>
            <span
              className={`font-mono text-xs md:text-sm tabular-nums font-medium ${
                kw.position <= 3
                  ? "text-emerald-700"
                  : kw.position <= 10
                    ? "text-neutral-900"
                    : "text-neutral-500"
              }`}
            >
              {kw.position}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-mono tabular-nums text-neutral-600">
              <DeltaIcon delta={kw.delta} />
              {deltaLabel(kw.delta)}
            </span>
            <span className="hidden sm:inline font-mono text-[11px] tabular-nums text-neutral-500">
              {kw.volume.toLocaleString()}
            </span>
          </button>
        ))}

        <div className="px-4 md:px-5 py-2.5 text-[10px] text-neutral-500 flex items-center justify-between gap-2 bg-neutral-50/50 border-t border-black/5">
          <span>Click a keyword to ask the agent how to rank it higher.</span>
          <ArrowUpRight className="w-3 h-3 text-neutral-400" />
        </div>
      </div>
    </section>
  );
};
