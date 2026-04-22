"use client";

import { useCallback, useRef, useState } from "react";

export type Role = "user" | "assistant";
export type Message = {
  id: string;
  role: Role;
  content: string;
  timestamp: number;
};

// Seeded replies — swapped with a real backend when the api route is wired up.
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const replyIndex = useRef(0);

  const sendMessage = useCallback(
    (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isStreaming) return;

      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "user", content: trimmed, timestamp: Date.now() },
      ]);
      setInput("");
      setIsStreaming(true);

      const replyText = MOCK_REPLIES[replyIndex.current % MOCK_REPLIES.length];
      replyIndex.current += 1;
      const delay = 800 + Math.random() * 700;

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: uid(), role: "assistant", content: replyText, timestamp: Date.now() },
        ]);
        setIsStreaming(false);
      }, delay);
    },
    [isStreaming]
  );

  const clearChat = useCallback(() => {
    setMessages([]);
    replyIndex.current = 0;
  }, []);

  return { messages, input, isStreaming, setInput, sendMessage, clearChat };
};
