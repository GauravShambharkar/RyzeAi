import React from "react";
import { Sparkles } from "lucide-react";
import { auditPrompt, auditSlideStats } from "@/features/mcp/data/connectorShowcase";
import { CardShell } from "../CardShell";

export const AccountAudit = () => (
  <CardShell docName="Leapwiseacademy googleads audit · PPTX">
    <div className="rounded-2xl border border-black/5 bg-neutral-50 p-4">
      <div className="flex items-start gap-3">
        <div className="h-7 w-7 rounded-lg bg-[#e35a32]/15 border border-[#e35a32]/40 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-[#e35a32]" />
        </div>
        <p className="text-xs text-neutral-700 leading-relaxed">{auditPrompt}</p>
      </div>
    </div>

    <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-50 to-emerald-100/60 p-4 relative overflow-hidden">
      <div className="text-[10px] uppercase tracking-widest text-emerald-700">Slide 4 / 12</div>
      <div className="mt-2 font-display text-xl text-neutral-900 leading-tight">Budget &amp; spend analysis</div>
      <div className="mt-4 grid grid-cols-5 gap-1.5">
        {auditSlideStats.map((v, i) => (
          <div key={i} className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 py-2 text-center">
            <div className="text-[10px] font-mono text-neutral-900">{v}%</div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-[9px] uppercase tracking-wider text-emerald-700 text-center">
        Budget utilization
      </div>
    </div>
  </CardShell>
);
