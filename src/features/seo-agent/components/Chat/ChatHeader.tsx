import React from "react";

type Props = { userEmail: string };

export const ChatHeader = ({ userEmail }: Props) => (
  <div className="flex items-center justify-between py-4 border-b border-white/5 shrink-0">
    <div className="flex items-center gap-3">
      <span className="relative flex w-2 h-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
      </span>
      <h1 className="font-display text-base text-white tracking-tight">
        SEO <span className="italic text-emerald-300">Agent</span>
      </h1>
    </div>
    <span className="text-[11px] text-neutral-500 font-mono hidden sm:inline">
      {userEmail}
    </span>
  </div>
);
