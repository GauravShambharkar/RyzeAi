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
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim() || disabled) return;
    onSend(value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(e as unknown as FormEvent);
    }
  };

  return (
    <form onSubmit={submit} className="py-4 shrink-0">
      <div className="relative border border-white/10 bg-neutral-950 focus-within:border-emerald-500/40 transition-colors">
        <textarea
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`;
          }}
          onKeyDown={onKeyDown}
          placeholder="Ask the SEO agent anything..."
          rows={1}
          className="w-full resize-none bg-transparent px-4 py-3.5 pr-14 text-sm text-white placeholder:text-neutral-600 focus:outline-none max-h-40"
        />
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          aria-label="Send message"
          className="absolute right-2 bottom-2 h-9 w-9 flex items-center justify-center bg-white text-black disabled:bg-neutral-800 disabled:text-neutral-600 hover:bg-neutral-200 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
      <p className="text-[10px] text-neutral-600 mt-2 px-1 font-mono">
        Preview mode · responses are simulated. Enter to send · Shift+Enter for new line.
      </p>
    </form>
  );
};
