import React from "react";
import type { ChatMessage as Message } from "@/features/seo-agent/store/chat.store";

type Props = { message: Message };

export const ChatMessage = ({ message }: Props) => {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] bg-neutral-900 text-white px-4 py-2.5 text-xs md:text-sm leading-relaxed rounded-3xl rounded-tr-md shadow-sm">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 text-xs font-display shrink-0">
        R
      </div>
      <div className="max-w-[85%] md:max-w-[55%] text-xs md:text-sm text-neutral-800 leading-relaxed whitespace-pre-wrap pt-1">
        {message.content}
      </div>
    </div>
  );
};
