import React from "react";
import type { Message } from "@/features/seo-agent/hooks/chat.hook";

type Props = { message: Message };

export const ChatMessage = ({ message }: Props) => {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-white text-black px-4 py-2.5 text-sm leading-relaxed">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 max-w-[90%]">
      <div className="h-7 w-7 border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-300 text-[10px] font-display shrink-0">
        R
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300/80 mb-1.5">
          SEO Agent
        </div>
        <div className="text-sm text-neutral-200 leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>
      </div>
    </div>
  );
};
