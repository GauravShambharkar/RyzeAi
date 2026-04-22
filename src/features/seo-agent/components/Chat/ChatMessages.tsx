"use client";

import React, { useEffect, useRef } from "react";
import type { Message } from "@/features/seo-agent/hooks/chat.hook";
import { ChatMessage } from "./ChatMessage";
import { EmptyState } from "./EmptyState";
import { TypingIndicator } from "./TypingIndicator";

type Props = {
  messages: Message[];
  isStreaming: boolean;
  onExamplePrompt: (prompt: string) => void;
};

export const ChatMessages = ({ messages, isStreaming, onExamplePrompt }: Props) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isStreaming]);

  if (messages.length === 0 && !isStreaming) {
    return <EmptyState onPromptSelect={onExamplePrompt} />;
  }

  return (
    <div className="flex-1 overflow-y-auto py-6 space-y-6 min-h-0">
      {messages.map((m) => (
        <ChatMessage key={m.id} message={m} />
      ))}
      {isStreaming && <TypingIndicator />}
      <div ref={endRef} />
    </div>
  );
};
