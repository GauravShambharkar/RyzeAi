"use client";

import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";
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

const threadHistory = (threadId: string) => {
  const thread = chatStore.getState().threads.find((t) => t.id === threadId);
  return (thread?.messages ?? []).map((m) => ({
    role: m.role,
    content: m.content,
  }));
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
  const editUserMessageAndTruncate = chatStore(
    (s) => s.editUserMessageAndTruncate
  );

  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeThreadId) ?? null,
    [threads, activeThreadId]
  );

  const requestReply = useCallback(
    async (threadId: string) => {
      setIsStreaming(true);
      const controller = new AbortController();
      const domain = domainStore.getState().selected;
      const history = threadHistory(threadId);

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
        toast.error("SEO Agent couldn't respond", { description: msg });
      } finally {
        setIsStreaming(false);
      }
    },
    [appendMessage]
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
      const isFirstMessage = (currentThread?.messages.length ?? 0) === 0;

      appendMessage(threadId, {
        id: uid(),
        role: "user",
        content: trimmed,
        timestamp: Date.now(),
      });

      if (isFirstMessage) renameThreadFromFirstMessage(threadId, trimmed);

      setInput("");
      await requestReply(threadId);
    },
    [
      activeThreadId,
      appendMessage,
      createThread,
      isStreaming,
      renameThreadFromFirstMessage,
      requestReply,
    ]
  );

  const editMessage = useCallback(
    async (messageId: string, newContent: string) => {
      if (isStreaming) return;
      const threadId = activeThreadId;
      if (!threadId) return;

      const ok = editUserMessageAndTruncate(threadId, messageId, newContent);
      if (!ok) return;

      await requestReply(threadId);
    },
    [activeThreadId, editUserMessageAndTruncate, isStreaming, requestReply]
  );

  const newChat = useCallback(() => {
    createThread();
    setInput("");
  }, [createThread]);

  const deleteThreadWithToast = useCallback(
    (id: string) => {
      deleteThread(id);
      toast.success("Chat deleted");
    },
    [deleteThread]
  );

  return {
    threads,
    activeThread,
    activeThreadId,
    messages: activeThread?.messages ?? [],
    input,
    isStreaming,
    setInput,
    sendMessage,
    editMessage,
    selectThread,
    deleteThread: deleteThreadWithToast,
    newChat,
  };
};
