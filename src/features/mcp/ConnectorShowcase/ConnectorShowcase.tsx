"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText, Share2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Shared primitives                                                   */
/* ------------------------------------------------------------------ */

const CardShell = ({
  docName,
  children,
}: {
  docName: string;
  children: React.ReactNode;
}) => (
  <div className="border border-white/10 bg-[#0b0b0b]/80 backdrop-blur-sm overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 text-[11px] text-white/50">
      <div className="flex items-center gap-1.5">
        <FileText className="w-3.5 h-3.5" />
        <span className="truncate">{docName}</span>
      </div>
      <button className="inline-flex items-center gap-1 border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/70 hover:text-white">
        <Share2 className="w-3 h-3" /> Share
      </button>
    </div>
    <div className="p-5">{children}</div>
    <div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between text-[10px] text-white/40">
      <span>Claude is AI and can make mistakes. Double-check responses.</span>
      <span className="font-mono text-white/50">Opus 4.6</span>
    </div>
  </div>
);

const Kpi = ({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: "pos" | "neg" | "neutral";
}) => {
  const toneCls =
    tone === "pos"
      ? "text-emerald-400"
      : tone === "neg"
      ? "text-rose-400"
      : "text-white/50";
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-white/40">
        {label}
      </div>
      <div className="mt-1 text-lg font-medium text-white font-mono">
        {value}
      </div>
      {delta && <div className={`text-[10px] mt-0.5 ${toneCls}`}>{delta}</div>}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Card A — Weekly report                                              */
/* ------------------------------------------------------------------ */

const WeeklyReport = () => (
  <CardShell docName="Google Ads account audit · weekly snapshot">
    <div className="text-xs text-white/50">
      Mar 3 – Mar 9, 2026 · vs prior week
    </div>
    <h4 className="mt-1 text-base font-medium text-white">
      Weekly performance snapshot
    </h4>

    <div className="mt-5 grid grid-cols-5 gap-3">
      <Kpi label="Spend" value="$9,840" delta="−3.2%" tone="pos" />
      <Kpi label="Conv." value="312" delta="+6.3%" tone="pos" />
      <Kpi label="CPA" value="$31.54" delta="−10.6%" tone="pos" />
      <Kpi label="ROAS" value="3.4×" delta="+0.3×" tone="pos" />
      <Kpi label="CTR" value="4.6%" delta="+0.1pp" tone="pos" />
    </div>

    {/* tiny line chart */}
    <div className="mt-6 border border-white/5 bg-black/30 p-4">
      <div className="flex items-center justify-between text-[10px] text-white/50">
        <span>Daily spend</span>
        <span>Mon–Sun</span>
      </div>
      <svg
        viewBox="0 0 200 60"
        className="w-full h-16 mt-2"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="spend-g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e35a32" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#e35a32" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 L30,25 L60,30 L90,15 L120,35 L150,20 L180,28 L200,22"
          fill="none"
          stroke="#e35a32"
          strokeWidth="1.5"
        />
        <path
          d="M0,40 L30,25 L60,30 L90,15 L120,35 L150,20 L180,28 L200,22 L200,60 L0,60 Z"
          fill="url(#spend-g)"
        />
      </svg>

      <div className="flex items-center justify-between text-[10px] text-white/50 mt-3">
        <span>Daily conversions</span>
      </div>
      <div className="mt-2 flex items-end gap-1 h-10">
        {[28, 34, 40, 52, 46, 58, 64].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-[#e35a32]/40 to-[#e35a32]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  </CardShell>
);

/* ------------------------------------------------------------------ */
/* Card B — Cross-platform overlap                                     */
/* ------------------------------------------------------------------ */

const CrossOverlap = () => (
  <CardShell docName="Cross-platform overlap · February">
    <h4 className="text-base font-medium text-white">
      Where your ad budget actually lands
    </h4>

    <div className="mt-5 grid grid-cols-4 gap-3">
      <Kpi label="Monthly spend" value="$42,600" />
      <Kpi label="Overlap" value="$6,820" tone="neg" delta="16%" />
      <Kpi label="Overlap rate" value="16%" />
      <Kpi label="Recoverable" value="$4,100" tone="pos" />
    </div>

    <div className="mt-6 grid grid-cols-[1.2fr_1fr] gap-4">
      {/* stacked bar */}
      <div className="border border-white/5 bg-black/30 p-4">
        <div className="text-[10px] text-white/50">
          Spend overlap by campaign type
        </div>
        <div className="mt-3 space-y-2.5">
          {[
            { label: "Brand", a: 38, b: 14 },
            { label: "Retargeting", a: 56, b: 30 },
            { label: "Non-brand", a: 70, b: 18 },
            { label: "PMax/Adv+", a: 44, b: 24 },
          ].map((r) => (
            <div key={r.label} className="flex items-center gap-2">
              <span className="text-[10px] text-white/50 w-20">{r.label}</span>
              <div className="flex-1 h-2 bg-white/5 overflow-hidden flex">
                <div
                  className="bg-[#e35a32]"
                  style={{ width: `${r.a}%` }}
                />
                <div
                  className="bg-[#fbbf24]/70"
                  style={{ width: `${r.b}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* donut */}
      <div className="border border-white/5 bg-black/30 p-4 flex flex-col items-center justify-center">
        <div className="text-[10px] text-white/50 self-start">
          $42.6K / mo · split
        </div>
        <svg viewBox="0 0 42 42" className="w-24 h-24 mt-2 -rotate-90">
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#1f1f1f" strokeWidth="6" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#e35a32" strokeWidth="6" strokeDasharray="38 100" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#fbbf24" strokeWidth="6" strokeDasharray="32 100" strokeDashoffset="-38" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#60a5fa" strokeWidth="6" strokeDasharray="30 100" strokeDashoffset="-70" />
        </svg>
        <div className="mt-3 text-[10px] text-white/50 text-center">
          Google only · <span className="text-white">16,180</span>
        </div>
      </div>
    </div>
  </CardShell>
);

/* ------------------------------------------------------------------ */
/* Card C — True CPA analysis                                          */
/* ------------------------------------------------------------------ */

const TrueCPA = () => (
  <CardShell docName="True CPA & ROAS · funnel stage breakdown">
    <div className="text-xs text-white/50 italic">
      "What's my true CPA and ROAS by funnel stage?"
    </div>
    <h4 className="mt-1 text-base font-medium text-white">
      True CPA & ROAS by funnel stage
    </h4>
    <div className="text-[11px] text-white/40 mt-0.5">
      Feb 2026 · Google + Meta blended · Deduplicated
    </div>

    <div className="mt-5 grid grid-cols-4 gap-3">
      <Kpi label="Total spend" value="$42,600" />
      <Kpi label="Reported CPA" value="$26.40" />
      <Kpi label="True CPA" value="$38.70" tone="neg" />
      <Kpi label="True ROAS" value="2.8×" tone="pos" />
    </div>

    <div className="mt-5 border border-white/5 bg-black/30 overflow-hidden">
      <table className="w-full text-[11px]">
        <thead className="text-white/40 border-b border-white/5">
          <tr>
            <th className="text-left py-2 px-3 font-normal">Stage</th>
            <th className="text-right py-2 px-3 font-normal">Spend</th>
            <th className="text-right py-2 px-3 font-normal">Inflation</th>
            <th className="text-right py-2 px-3 font-normal">True CPA</th>
            <th className="text-right py-2 px-3 font-normal">Verdict</th>
          </tr>
        </thead>
        <tbody className="text-white/70 font-mono">
          <tr className="border-b border-white/5">
            <td className="py-2 px-3">Top of funnel</td>
            <td className="py-2 px-3 text-right">$14,200</td>
            <td className="py-2 px-3 text-right text-amber-300">+34%</td>
            <td className="py-2 px-3 text-right">$437.60</td>
            <td className="py-2 px-3 text-right text-white/50">Expected</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="py-2 px-3">Mid funnel</td>
            <td className="py-2 px-3 text-right">$12,800</td>
            <td className="py-2 px-3 text-right text-rose-400">+37%</td>
            <td className="py-2 px-3 text-right">$64.60</td>
            <td className="py-2 px-3 text-right text-rose-400">Over-inflated</td>
          </tr>
          <tr>
            <td className="py-2 px-3">Bottom funnel</td>
            <td className="py-2 px-3 text-right">$15,600</td>
            <td className="py-2 px-3 text-right text-amber-300">+37%</td>
            <td className="py-2 px-3 text-right">$19.80</td>
            <td className="py-2 px-3 text-right text-emerald-400">Efficient</td>
          </tr>
        </tbody>
      </table>
    </div>
  </CardShell>
);

/* ------------------------------------------------------------------ */
/* Card D — Account audit                                              */
/* ------------------------------------------------------------------ */

const AccountAudit = () => (
  <CardShell docName="Leapwiseacademy googleads audit · PPTX">
    <div className="border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start gap-3">
        <div className="h-7 w-7 bg-[#e35a32]/20 border border-[#e35a32]/40 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-[#e35a32]" />
        </div>
        <p className="text-xs text-white/70 leading-relaxed">
          Audit this Google Ads account as a senior PPC strategist: analyze
          account structure, budget/spend, keyword performance, ad copy,
          landing-page drop-offs, audience/device data, and competitors. Give
          metrics, a letter grade, 5–7 recs (Impact/Effort) and a 30/60/90-day
          roadmap.
        </p>
      </div>
    </div>

    {/* slide preview */}
    <div className="mt-5 border border-white/10 bg-gradient-to-br from-emerald-900/40 to-emerald-950/60 p-4 relative overflow-hidden">
      <div className="text-[10px] uppercase tracking-widest text-emerald-300/80">
        Slide 4 / 12
      </div>
      <div className="mt-2 font-display text-xl text-white leading-tight">
        Budget & spend analysis
      </div>
      <div className="mt-4 grid grid-cols-5 gap-1.5">
        {[54, 112, 87, 43, 39].map((v, i) => (
          <div
            key={i}
            className="border border-emerald-300/20 bg-emerald-400/10 py-2 text-center"
          >
            <div className="text-[10px] font-mono text-white">{v}%</div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-[9px] uppercase tracking-wider text-emerald-300/60 text-center">
        Budget utilization
      </div>
    </div>
  </CardShell>
);

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const CARDS = [
  { title: "Weekly report", node: <WeeklyReport /> },
  { title: "Cross-platform overlap", node: <CrossOverlap /> },
  { title: "True CPA analysis", node: <TrueCPA /> },
  { title: "Account audit", node: <AccountAudit /> },
];

export const ConnectorShowcase = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#060606]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex items-center gap-3 justify-center">
          <Sparkles className="w-5 h-5 text-[#e35a32]" />
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-tight text-center">
            What you can do with Claude Connector
          </h2>
        </div>

        <p className="mt-4 text-center text-sm text-white/50 max-w-xl mx-auto">
          Four real conversations across reporting, budgeting, attribution, and
          strategy — delivered in the tools you already use.
        </p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3">
                <span className="text-[#e35a32]">▍</span> {c.title}
              </div>
              {c.node}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
