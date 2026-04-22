import React from "react";

export const TypingIndicator = () => (
  <div className="flex items-start gap-3">
    <div className="h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 text-xs font-display shrink-0">
      R
    </div>
    <div className="flex items-center gap-1.5 py-3">
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
