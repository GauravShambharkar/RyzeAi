import React from "react";

export const TypingIndicator = () => (
  <div className="flex items-start gap-3 max-w-[90%]">
    <div className="h-7 w-7 border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-300 text-[10px] font-display shrink-0">
      R
    </div>
    <div className="flex items-center gap-1.5 py-2.5">
      <span
        className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  </div>
);
