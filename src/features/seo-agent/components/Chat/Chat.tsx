"use client";

import React from "react";
import { useChat } from "@/features/seo-agent/hooks/chat.hook";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

type Props = { userEmail: string };

export const Chat = ({ userEmail }: Props) => {
  const { messages, input, isStreaming, setInput, sendMessage } = useChat();

  return (
    <div className="min-h-screen flex flex-col pt-24 bg-black text-white">
      <div className="flex-1 flex flex-col gap-4 max-w-5xl mx-auto w-full px-4 sm:px-6">
        <ChatHeader userEmail={userEmail} />
        <ChatMessages
          messages={messages}
          isStreaming={isStreaming}
          onExamplePrompt={sendMessage}
        />
        <ChatInput
          value={input}
          onChange={setInput}
          onSend={sendMessage}
          disabled={isStreaming}
        />
      </div>
    </div>
  );
};
