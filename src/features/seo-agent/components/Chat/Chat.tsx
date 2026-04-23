"use client";

import React, { useState } from "react";
import { useChat } from "@/features/seo-agent/hooks/chat.hook";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { Sidebar } from "./Sidebar";

type Props = { userEmail: string };

export const Chat = ({ userEmail }: Props) => {
  const {
    threads,
    activeThreadId,
    messages,
    input,
    isStreaming,
    setInput,
    sendMessage,
    selectThread,
    deleteThread,
    newChat,
  } = useChat();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-neutral-900">
      <ChatHeader userEmail={userEmail} />

      <Sidebar
        threads={threads}
        activeThreadId={activeThreadId}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((v) => !v)}
        onSelect={selectThread}
        onNewChat={newChat}
        onDelete={deleteThread}
      />

      <div
        className={`min-h-screen flex flex-col pt-24 transition-[padding] duration-300 ease-out ${
          collapsed ? "md:pl-14" : "md:pl-64"
        }`}
      >
        <div className="flex-1 flex flex-col gap-4 max-w-5xl mx-auto w-full px-4 sm:px-6">
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
    </div>
  );
};
