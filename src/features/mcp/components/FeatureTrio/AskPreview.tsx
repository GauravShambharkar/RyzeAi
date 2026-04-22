import React from "react";

export const AskPreview = () => (
  <div className="h-full flex flex-col justify-center gap-3">
    <div className="self-end max-w-[240px] bg-white/10 border border-white/10 px-4 py-2.5 text-sm text-white">
      How&apos;s my brand campaign doing?
    </div>
    <div className="flex items-start gap-2.5 max-w-[280px]">
      <div className="h-6 w-6 flex-shrink-0 bg-[#e35a32]/15 border border-[#e35a32]/40 flex items-center justify-center">
        <span className="text-[#e35a32] text-[10px] font-bold">✦</span>
      </div>
      <div className="bg-[#0b0b0b] border border-white/10 px-3 py-2 text-[12px] text-white/80 leading-relaxed">
        Brand ROAS is <span className="text-emerald-400">3.4×</span>, up +0.3× vs LW. Spend pacing on target.
      </div>
    </div>
  </div>
);
