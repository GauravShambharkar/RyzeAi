import React from "react";
import { Activity, FileText, AlertCircle, Clock } from "lucide-react";
import type { DashboardData } from "@/features/seo-agent/data/dashboardData";

type Props = {
  data: DashboardData;
  domain: string;
};

const SCORE_CLASSES: Record<DashboardData["scoreBand"], {
  wrap: string;
  text: string;
  label: string;
  badge: string;
}> = {
  strong: {
    wrap: "from-emerald-50 to-white border-emerald-500/20",
    text: "text-emerald-700",
    label: "Strong",
    badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
  },
  fair: {
    wrap: "from-amber-50 to-white border-amber-500/20",
    text: "text-amber-700",
    label: "Fair",
    badge: "bg-amber-500/10 text-amber-700 border-amber-500/25",
  },
  "needs-work": {
    wrap: "from-rose-50 to-white border-rose-500/20",
    text: "text-rose-700",
    label: "Needs work",
    badge: "bg-rose-500/10 text-rose-700 border-rose-500/25",
  },
};

export const OverviewCard = ({ data, domain }: Props) => {
  const s = SCORE_CLASSES[data.scoreBand];

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl border bg-gradient-to-br p-4 sm:p-5 md:p-7 ${s.wrap}`}
    >
      <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 md:gap-6 items-center">
        {/* Score */}
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <div
            className={`font-display text-4xl sm:text-5xl md:text-7xl tracking-tighter leading-none ${s.text}`}
          >
            {data.score}
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm text-neutral-500 font-mono">
            / 100
          </div>
        </div>

        {/* Context */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5 sm:mb-2">
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide ${s.badge}`}
            >
              <Activity className="w-2.5 h-2.5" />
              {s.label}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 font-semibold">
              SEO Health
            </span>
          </div>
          <div className="font-mono text-xs sm:text-sm md:text-lg text-neutral-900 tracking-tight truncate">
            {domain}
          </div>
        </div>
      </div>

      {/* Stats row — wraps below on xs */}
      <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-black/5 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs text-neutral-600">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-neutral-400" />
          Scanned {data.scannedAgo}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-neutral-400" />
          <span className="font-mono tabular-nums text-neutral-900">
            {data.indexedPages}
          </span>{" "}
          indexed pages
        </span>
        <span className="inline-flex items-center gap-1.5">
          <AlertCircle
            className={`w-3 h-3 ${
              data.crawlErrors > 0 ? "text-rose-500" : "text-neutral-400"
            }`}
          />
          <span className="font-mono tabular-nums text-neutral-900">
            {data.crawlErrors}
          </span>{" "}
          crawl errors
        </span>
      </div>
    </div>
  );
};
