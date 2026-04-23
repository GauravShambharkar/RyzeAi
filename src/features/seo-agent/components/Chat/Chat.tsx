"use client";

import React, { useEffect, useRef, useState } from "react";
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
    editMessage,
    selectThread,
    deleteThread,
    newChat,
  } = useChat();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle ?ask=... query param. Dashboard cards and future deep links land
  // here with a pre-filled prompt; we auto-send it once and scrub the URL so
  // refresh/back/forward don't re-fire it.
  const askConsumedRef = useRef(false);
  useEffect(() => {
    if (askConsumedRef.current) return;
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const ask = params.get("ask");
    if (!ask || !ask.trim()) return;
    askConsumedRef.current = true;
    window.history.replaceState({}, "", "/seo-agent");
    sendMessage(ask);
  }, [sendMessage]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-neutral-900">
      <ChatHeader
        userEmail={userEmail}
        onOpenHistory={() => setMobileOpen(true)}
      />

      <Sidebar
        threads={threads}
        activeThreadId={activeThreadId}
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggleCollapse={() => setCollapsed((v) => !v)}
        onMobileClose={() => setMobileOpen(false)}
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
            onEditMessage={editMessage}
            onAction={sendMessage}
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
