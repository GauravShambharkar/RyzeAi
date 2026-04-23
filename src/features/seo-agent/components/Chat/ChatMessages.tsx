"use client";

import React, { useEffect, useRef } from "react";
import type { ChatMessage as Message } from "@/features/seo-agent/store/chat.store";
import { ChatMessage } from "./ChatMessage";
import { EmptyState } from "./EmptyState";
import { TypingIndicator } from "./TypingIndicator";

type Props = {
  messages: Message[];
  isStreaming: boolean;
  onExamplePrompt: (prompt: string) => void;
  onEditMessage: (id: string, newContent: string) => void;
};

export const ChatMessages = ({
  messages,
  isStreaming,
  onExamplePrompt,
  onEditMessage,
}: Props) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isStreaming]);

  if (messages.length === 0 && !isStreaming) {
    return <EmptyState onPromptSelect={onExamplePrompt} />;
  }

  return (
    <div className="flex-1 py-6 space-y-6">
      {messages.map((m) => (
        <ChatMessage
          key={m.id}
          message={m}
          disabled={isStreaming}
          onEdit={onEditMessage}
        />
      ))}
      {isStreaming && <TypingIndicator />}
      <div ref={endRef} />
    </div>
  );
};
