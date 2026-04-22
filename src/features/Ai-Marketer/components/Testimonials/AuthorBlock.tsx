import React from "react";

type Props = { author: string; title: string };

export const AuthorBlock = ({ author, title }: Props) => (
  <div className="flex items-center gap-3 min-w-0">
    <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center font-display text-neutral-500 text-xs shrink-0">
      {author.charAt(0)}
    </div>
    <div className="min-w-0">
      <p className="text-sm font-semibold text-white truncate">{author}</p>
      <p className="text-[11px] text-neutral-500 uppercase tracking-wider truncate">{title}</p>
    </div>
  </div>
);
