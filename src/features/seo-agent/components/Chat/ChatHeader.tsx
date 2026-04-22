import React from "react";
import { LogOut } from "lucide-react";

type Props = { userEmail: string; onSignOut: () => void; onClear?: () => void };

export const ChatHeader = ({ userEmail, onSignOut }: Props) => (
  <div className="flex items-center justify-between py-4 border-b border-white/5 shrink-0">
    <div>
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-emerald-300 flex items-center gap-2">
        <span className="relative flex w-1.5 h-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </span>
        Agent online
      </div>
      <h1 className="font-display text-lg text-white mt-1 tracking-tight">
        SEO <span className="italic text-emerald-300">Agent</span>
      </h1>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-[11px] text-neutral-500 font-mono hidden sm:inline">{userEmail}</span>
      <button
        onClick={onSignOut}
        className="inline-flex items-center gap-1.5 border border-white/10 bg-white/[0.03] text-white/70 px-3 py-1.5 text-[11px] hover:text-white hover:bg-white/[0.06] transition-colors"
      >
        <LogOut className="w-3 h-3" />
        Sign out
      </button>
    </div>
  </div>
);
