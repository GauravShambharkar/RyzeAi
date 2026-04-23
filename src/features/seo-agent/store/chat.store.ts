import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: number;
};

export type ChatThread = {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
};

type ChatState = {
  threads: ChatThread[];
  activeThreadId: string | null;

  createThread: () => string;
  selectThread: (id: string) => void;
  deleteThread: (id: string) => void;
  appendMessage: (threadId: string, message: ChatMessage) => void;
  renameThreadFromFirstMessage: (threadId: string, firstUserMessage: string) => void;
  editUserMessageAndTruncate: (
    threadId: string,
    messageId: string,
    newContent: string
  ) => boolean;
};

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

const deriveTitle = (text: string) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return "New chat";
  return clean.length > 42 ? `${clean.slice(0, 42)}…` : clean;
};

export const chatStore = create<ChatState>()(
  persist(
    (set) => ({
      threads: [],
      activeThreadId: null,

      createThread: () => {
        const id = uid();
        const now = Date.now();
        const thread: ChatThread = {
          id,
          title: "New chat",
          messages: [],
          createdAt: now,
          updatedAt: now,
        };
        set((s) => ({
          threads: [thread, ...s.threads],
          activeThreadId: id,
        }));
        return id;
      },

      selectThread: (id) => set({ activeThreadId: id }),

      deleteThread: (id) =>
        set((s) => {
          const remaining = s.threads.filter((t) => t.id !== id);
          const nextActive =
            s.activeThreadId === id ? (remaining[0]?.id ?? null) : s.activeThreadId;
          return { threads: remaining, activeThreadId: nextActive };
        }),

      appendMessage: (threadId, message) =>
        set((s) => ({
          threads: s.threads.map((t) =>
            t.id === threadId
              ? { ...t, messages: [...t.messages, message], updatedAt: Date.now() }
              : t
          ),
        })),

      renameThreadFromFirstMessage: (threadId, firstUserMessage) =>
        set((s) => ({
          threads: s.threads.map((t) =>
            t.id === threadId ? { ...t, title: deriveTitle(firstUserMessage) } : t
          ),
        })),

      editUserMessageAndTruncate: (threadId, messageId, newContent) => {
        const trimmed = newContent.trim();
        if (!trimmed) return false;

        let didEdit = false;

        set((s) => ({
          threads: s.threads.map((t) => {
            if (t.id !== threadId) return t;
            const idx = t.messages.findIndex((m) => m.id === messageId);
            if (idx === -1) return t;
            const target = t.messages[idx];
            if (target.role !== "user") return t;

            didEdit = true;
            const kept = t.messages.slice(0, idx);
            const edited: ChatMessage = {
              ...target,
              content: trimmed,
              timestamp: Date.now(),
            };
            const nextMessages = [...kept, edited];
            const nextTitle = idx === 0 ? deriveTitle(trimmed) : t.title;

            return {
              ...t,
              messages: nextMessages,
              title: nextTitle,
              updatedAt: Date.now(),
            };
          }),
        }));

        return didEdit;
      },
    }),
    { name: "seo-chat-v2" }
  )
);
