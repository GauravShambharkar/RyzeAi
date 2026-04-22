import React from "react";

export const AskPreview = () => (
  <div className="h-full flex flex-col justify-center gap-3">
    <div className="self-end max-w-[240px] rounded-2xl rounded-tr-sm bg-neutral-100 border border-black/5 px-4 py-2.5 text-sm text-neutral-800">
      How&apos;s my brand campaign doing?
    </div>
    <div className="flex items-start gap-2.5 max-w-[280px]">
      <div className="h-6 w-6 rounded-lg flex-shrink-0 bg-[#e35a32]/15 border border-[#e35a32]/40 flex items-center justify-center">
        <span className="text-[#e35a32] text-[10px] font-bold">✦</span>
      </div>
      <div className="rounded-2xl rounded-tl-sm bg-white border border-black/5 shadow-sm px-3 py-2 text-[12px] text-neutral-800 leading-relaxed">
        Brand ROAS is <span className="text-emerald-700 font-semibold">3.4×</span>, up +0.3× vs LW. Spend pacing on target.
      </div>
    </div>
  </div>
);
