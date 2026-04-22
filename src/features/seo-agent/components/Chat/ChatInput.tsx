"use client";

import React, { type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSend: (v: string) => void;
  disabled?: boolean;
};

export const ChatInput = ({ value, onChange, onSend, disabled }: Props) => {
  const hasContent = value.trim().length > 0;
  const canSubmit = hasContent && !disabled;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onSend(value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(e as unknown as FormEvent);
    }
  };

  return (
    <form onSubmit={submit} className="py-5 shrink-0 relative w-full max-w-2xl mx-auto">
      {/* Soft emerald halo — activates when the user is typing */}
      <div
        className={`absolute inset-x-4 -top-2 -bottom-2 bg-emerald-500/10 blur-3xl pointer-events-none transition-opacity duration-500 ${hasContent ? "opacity-100" : "opacity-0"
          }`}
      />

      <div className="relative border border-white/10 bg-neutral-950/80 backdrop-blur-xl focus-within:border-emerald-500/40 transition-colors duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
        <textarea
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            e.target.style.height = "auto";
            const MIN_H = 64; // ~2 visible rows
            const MAX_H = 240;
            e.target.style.height = `${Math.max(MIN_H, Math.min(e.target.scrollHeight, MAX_H))}px`;
          }}
          onKeyDown={onKeyDown}
          placeholder="Ask the SEO agent anything..."
          rows={2}
          className="w-full resize-none bg-transparent px-5 pt-3 pb-2.5 text-[15px] text-white placeholder:text-neutral-600 focus:outline-none max-h-60 leading-relaxed scrollbar-chat"
        />

        <div className="flex items-center justify-between px-3 py-2.5 border-t border-white/5">
          <span className="text-[10px] text-neutral-600 font-mono pl-2">
            Enter to send · Shift+Enter for new line
          </span>
          <button
            type="submit"
            disabled={!canSubmit}
            aria-label="Send message"
            className={`h-9 w-9 flex items-center justify-center transition-all duration-200 ${canSubmit
                ? "bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_0_24px_-4px_rgba(16,185,129,0.7)]"
                : "bg-white/5 text-neutral-600 cursor-not-allowed"
              }`}
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </form>
  );
};
