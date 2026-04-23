"use client";

import { useCallback, useMemo, useState } from "react";
import { chatStore, type ChatMessage } from "@/features/seo-agent/store/chat.store";
import { domainStore } from "@/features/seo-agent/store/domain.store";

export type { ChatMessage as Message } from "@/features/seo-agent/store/chat.store";

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

type ApiOk = { reply: string };
type ApiErr = { error: string };

const fetchReply = async (
  messages: Pick<ChatMessage, "role" | "content">[],
  domain: string,
  signal: AbortSignal
): Promise<string> => {
  const res = await fetch("/api/v1/seo-agent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, domain }),
    signal,
  });

  const data = (await res.json().catch(() => ({}))) as Partial<ApiOk & ApiErr>;
  if (!res.ok || typeof data.reply !== "string") {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data.reply;
};

export const useChat = () => {
  const threads = chatStore((s) => s.threads);
  const activeThreadId = chatStore((s) => s.activeThreadId);
  const createThread = chatStore((s) => s.createThread);
  const selectThread = chatStore((s) => s.selectThread);
  const deleteThread = chatStore((s) => s.deleteThread);
  const appendMessage = chatStore((s) => s.appendMessage);
  const renameThreadFromFirstMessage = chatStore(
    (s) => s.renameThreadFromFirstMessage
  );

  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeThreadId) ?? null,
    [threads, activeThreadId]
  );

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isStreaming) return;

      let threadId = activeThreadId;
      if (!threadId) threadId = createThread();

      const currentThread = chatStore
        .getState()
        .threads.find((t) => t.id === threadId);
      const priorMessages = currentThread?.messages ?? [];
      const isFirstMessage = priorMessages.length === 0;

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

      const controller = new AbortController();
      const domain = domainStore.getState().selected;
      const history = [...priorMessages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      try {
        const reply = await fetchReply(history, domain, controller.signal);
        appendMessage(threadId, {
          id: uid(),
          role: "assistant",
          content: reply,
          timestamp: Date.now(),
        });
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Something went wrong. Try again.";
        setError(msg);
      } finally {
        setIsStreaming(false);
      }
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

  const dismissError = useCallback(() => setError(null), []);

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
    dismissError,
  };
};
