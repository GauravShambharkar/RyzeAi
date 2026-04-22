import React from "react";
import type { Message } from "@/features/seo-agent/hooks/chat.hook";

type Props = { message: Message };

export const ChatMessage = ({ message }: Props) => {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] bg-white text-black px-4 py-2.5 text-sm leading-relaxed rounded-2xl rounded-tr-md">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 text-xs font-display shrink-0">
        R
      </div>
      <div className="min-w-170 max-w-[150px] text-sm text-neutral-100 leading-relaxed whitespace-pre-wrap pt-1">
        {message.content}
      </div>
    </div>
  );
};
