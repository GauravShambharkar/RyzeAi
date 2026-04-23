"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AlertOctagon, ArrowUpRight } from "lucide-react";
import {
  type Issue,
  type IssueSeverity,
  promptForIssue,
} from "@/features/seo-agent/data/dashboardData";

type Props = {
  issues: Issue[];
  domain: string;
};

const SEVERITY_STYLES: Record<
  IssueSeverity,
  { label: string; dot: string; badge: string; border: string; pill: string }
> = {
  critical: {
    label: "Critical",
    dot: "bg-rose-500 shadow-[0_0_0_3px_rgba(244,63,94,0.15)]",
    badge: "bg-rose-500/10 text-rose-700 border-rose-500/25",
    border: "border-rose-500/20 hover:border-rose-500/40",
    pill: "hover:shadow-[0_8px_24px_-12px_rgba(244,63,94,0.25)]",
  },
  warning: {
    label: "Warning",
    dot: "bg-amber-500 shadow-[0_0_0_3px_rgba(245,158,11,0.15)]",
    badge: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    border: "border-amber-500/25 hover:border-amber-500/45",
    pill: "hover:shadow-[0_8px_24px_-12px_rgba(245,158,11,0.25)]",
  },
  info: {
    label: "Info",
    dot: "bg-neutral-400",
    badge: "bg-neutral-100 text-neutral-700 border-black/5",
    border: "border-black/5 hover:border-neutral-300",
    pill: "hover:shadow-[0_8px_24px_-12px_rgba(20,20,20,0.12)]",
  },
};

export const IssuesList = ({ issues, domain }: Props) => {
  const router = useRouter();

  const askForFix = (issue: Issue) => {
    const prompt = promptForIssue(issue, domain);
    router.push(`/seo-agent?ask=${encodeURIComponent(prompt)}`);
  };

  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 text-emerald-600" />
          <h2 className="font-display text-lg md:text-xl tracking-tight text-neutral-900">
            Issues to fix
          </h2>
        </div>
        <span className="text-[11px] text-neutral-500 font-mono tabular-nums">
          {issues.length} open
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {issues.map((issue) => {
          const s = SEVERITY_STYLES[issue.severity];
          return (
            <button
              key={issue.id}
              type="button"
              onClick={() => askForFix(issue)}
              className={`group text-left rounded-3xl border bg-white p-5 transition-all hover:-translate-y-0.5 ${s.border} ${s.pill}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${s.dot}`} aria-hidden />
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${s.badge}`}
                  >
                    {s.label}
                  </span>
                </div>
                <div className="font-mono text-xs tabular-nums text-neutral-900 shrink-0">
                  {issue.count}
                  <span className="text-neutral-400 font-normal">
                    {issue.count === 1 ? " page" : " pages"}
                  </span>
                </div>
              </div>

              <h3 className="mt-3 font-medium text-sm md:text-base text-neutral-900 leading-snug">
                {issue.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed line-clamp-2">
                {issue.detail}
              </p>

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
