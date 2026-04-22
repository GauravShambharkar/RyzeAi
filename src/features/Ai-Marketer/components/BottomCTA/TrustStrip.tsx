import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { trustMarkers, proofItems } from "@/features/Ai-Marketer/data/bottomCta";

export const TrustStrip = () => (
  <>
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-4 text-white/85 font-body">
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-sm font-semibold">4.8/5</span>
        <span className="text-sm text-white/50">on Trustpilot</span>
      </div>
      {proofItems.map((p, i) => (
        <React.Fragment key={i}>
          <span className="hidden md:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{p.bold}</span>
            <span className="text-white/50">{p.label}</span>
          </div>
        </React.Fragment>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4">
      {trustMarkers.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5 text-white/60 font-body text-[13px]">
          <CheckCircle2 size={14} className="text-emerald-400" />
          {item}
        </div>
      ))}
    </div>
  </>
);
