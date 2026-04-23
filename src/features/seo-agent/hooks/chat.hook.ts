"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { chatStore, type ChatMessage } from "@/features/seo-agent/store/chat.store";

export type { ChatMessage as Message } from "@/features/seo-agent/store/chat.store";

const MOCK_REPLIES = [
  "I'd run a keyword gap analysis against your top 3 competitors and surface 20–30 terms you could realistically rank for in 60 days.",
  "Let me scan your indexed pages. Typical findings are missing meta descriptions, weak H1s, and duplicate titles — easy wins across the board.",
  "Pulling your organic traffic trend. Want the 30-day cut or the 90-day view with YoY overlay?",
  "For site speed I'd start with LCP and CLS — both move SEO and conversion. Hero images and webfont loading are the usual culprits.",
  "I'll draft three content angles targeting that intent: an informational deep-dive, a comparison piece, and a commercial landing page.",
];

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

export const useChat = () => {
  const threads = chatStore((s) => s.threads);
  const activeThreadId = chatStore((s) => s.activeThreadId);
  const createThread = chatStore((s) => s.createThread);
  const selectThread = chatStore((s) => s.selectThread);
  const deleteThread = chatStore((s) => s.deleteThread);
  const appendMessage = chatStore((s) => s.appendMessage);
  const renameThreadFromFirstMessage = chatStore((s) => s.renameThreadFromFirstMessage);

  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const replyIndex = useRef(0);

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeThreadId) ?? null,
    [threads, activeThreadId]
  );

  const sendMessage = useCallback(
    (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isStreaming) return;

      let threadId = activeThreadId;
      if (!threadId) threadId = createThread();

      const current = chatStore.getState().threads.find((t) => t.id === threadId);
      const isFirstMessage = !current || current.messages.length === 0;

      const userMsg: ChatMessage = {
        id: uid(),
        role: "user",
        content: trimmed,
        timestamp: Date.now(),
      };
      appendMessage(threadId, userMsg);

      if (isFirstMessage) renameThreadFromFirstMessage(threadId, trimmed);

      setInput("");
      setIsStreaming(true);
      setError(null);

      const replyText = MOCK_REPLIES[replyIndex.current % MOCK_REPLIES.length];
      replyIndex.current += 1;
      const delay = 800 + Math.random() * 700;
      const targetThreadId = threadId;

      setTimeout(() => {
        appendMessage(targetThreadId, {
          id: uid(),
          role: "assistant",
          content: replyText,
          timestamp: Date.now(),
        });
        setIsStreaming(false);
      }, delay);
    },
    [
      activeThreadId,
      appendMessage,
      createThread,
      isStreaming,
      renameThreadFromFirstMessage,
    ]
  );

  const newChat = useCallback(() => {
    createThread();
    setInput("");
    setError(null);
  }, [createThread]);

  return {
    threads,
    activeThread,
    activeThreadId,
    messages: activeThread?.messages ?? [],
    input,
    isStreaming,
    error,
    setInput,
    sendMessage,
    selectThread,
    deleteThread,
    newChat,
  };
};
