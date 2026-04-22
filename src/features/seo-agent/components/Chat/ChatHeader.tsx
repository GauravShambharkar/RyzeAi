import React from "react";

type Props = { userEmail: string };

export const ChatHeader = ({ userEmail }: Props) => (
  <div className="flex items-center justify-between py-4 border-b border-black/5 shrink-0">
    <h1 className="font-display text-lg text-neutral-900 tracking-tight">
      SEO <span className="italic text-emerald-700">Agent</span>
    </h1>
    <span className="text-xs text-neutral-500 hidden sm:inline">{userEmail}</span>
  </div>
);
