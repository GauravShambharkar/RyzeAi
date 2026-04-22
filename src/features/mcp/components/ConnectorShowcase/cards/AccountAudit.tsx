import React from "react";
import { Sparkles } from "lucide-react";
import { auditPrompt, auditSlideStats } from "@/features/mcp/data/connectorShowcase";
import { CardShell } from "../CardShell";

export const AccountAudit = () => (
  <CardShell docName="Leapwiseacademy googleads audit · PPTX">
    <div className="border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start gap-3">
        <div className="h-7 w-7 bg-[#e35a32]/20 border border-[#e35a32]/40 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-[#e35a32]" />
        </div>
        <p className="text-xs text-white/70 leading-relaxed">{auditPrompt}</p>
      </div>
    </div>

    <div className="mt-5 border border-white/10 bg-gradient-to-br from-emerald-900/40 to-emerald-950/60 p-4 relative overflow-hidden">
      <div className="text-[10px] uppercase tracking-widest text-emerald-300/80">Slide 4 / 12</div>
      <div className="mt-2 font-display text-xl text-white leading-tight">Budget & spend analysis</div>
      <div className="mt-4 grid grid-cols-5 gap-1.5">
        {auditSlideStats.map((v, i) => (
          <div key={i} className="border border-emerald-300/20 bg-emerald-400/10 py-2 text-center">
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
