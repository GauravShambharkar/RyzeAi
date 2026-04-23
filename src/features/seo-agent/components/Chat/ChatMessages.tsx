"use client";

import React, { useEffect, useRef } from "react";
import type { ChatMessage as Message } from "@/features/seo-agent/store/chat.store";
import { ChatMessage } from "./ChatMessage";
import { EmptyState } from "./EmptyState";
import { TypingIndicator } from "./TypingIndicator";
import { ChatError } from "./ChatError";

type Props = {
  messages: Message[];
  isStreaming: boolean;
  error: string | null;
  onDismissError: () => void;
  onExamplePrompt: (prompt: string) => void;
};

export const ChatMessages = ({
  messages,
  isStreaming,
  error,
  onDismissError,
  onExamplePrompt,
}: Props) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isStreaming, error]);

  if (messages.length === 0 && !isStreaming && !error) {
    return <EmptyState onPromptSelect={onExamplePrompt} />;
  }

  return (
    <div className="flex-1 py-6 space-y-6">
      {messages.map((m) => (
        <ChatMessage key={m.id} message={m} />
      ))}
      {isStreaming && <TypingIndicator />}
      {error && <ChatError message={error} onDismiss={onDismissError} />}
      <div ref={endRef} />
    </div>
  );
};
