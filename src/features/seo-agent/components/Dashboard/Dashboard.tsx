"use client";

import React from "react";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { useActiveProperty } from "@/features/seo-agent/store/domain.store";
import { DashboardHeader } from "./DashboardHeader";
import { PropertySwitcher } from "./PropertySwitcher";
import { OverviewCard } from "./OverviewCard";
import { WebVitalsSection } from "./WebVitalsSection";
import { KeywordRankings } from "./KeywordRankings";
import { IssuesList } from "./IssuesList";

type Props = { userEmail: string };

export const Dashboard = ({ userEmail }: Props) => {
  const active = useActiveProperty();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-neutral-900">
      <DashboardHeader userEmail={userEmail} />

      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Page intro + property switcher */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4 mb-5 sm:mb-6 md:mb-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-500 font-semibold mb-1.5 sm:mb-2">
                Domain dashboard
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tighter text-neutral-900 leading-tight">
                A snapshot of{" "}
                <span className="italic text-emerald-700">where you stand.</span>
              </h1>
            </div>
            <PropertySwitcher />
          </div>

          {!active ? (
            <div className="rounded-3xl border border-dashed border-black/10 bg-white/40 p-6 sm:p-10 text-center">
              <Globe className="w-6 h-6 text-neutral-300 mx-auto mb-3" />
              <p className="text-xs sm:text-sm text-neutral-600 mb-4">
                Add a property to see its dashboard.
              </p>
              <Link
                href="/seo-agent/connect"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2.5 text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Add a property
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <OverviewCard property={active} />
              <WebVitalsSection vitals={[]} domain={active.domain} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                <KeywordRankings keywords={[]} domain={active.domain} />
                <IssuesList issues={[]} domain={active.domain} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
