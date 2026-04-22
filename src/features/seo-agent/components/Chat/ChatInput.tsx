"use client";

import React, { type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";
import { DomainSelector } from "./DomainSelector";

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
    <form onSubmit={submit} className="py-4 shrink-0 w-full sticky bottom-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent">
      <div className="relative rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 focus-within:border-emerald-400/50 focus-within:bg-white/[0.06] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),_0_8px_32px_-8px_rgba(0,0,0,0.5)] max-w-3xl mx-auto">
        <textarea
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            e.target.style.height = "auto";
            const MIN_H = 56;
            const MAX_H = 200;
            e.target.style.height = `${Math.max(MIN_H, Math.min(e.target.scrollHeight, MAX_H))}px`;
          }}
          onKeyDown={onKeyDown}
          placeholder="Message SEO Agent..."
          rows={2}
          className="w-full resize-none bg-transparent px-4 pt-3 pb-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none min-h-[56px] max-h-52 leading-relaxed scrollbar-chat"
        />

        <div className="flex items-center justify-between gap-3 px-3 pb-2.5 pt-1">
          <DomainSelector />
          <button
            type="submit"
            disabled={!canSubmit}
            aria-label="Send message"
            className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              canSubmit
                ? "bg-emerald-500 text-white hover:bg-emerald-400 shadow-sm shadow-emerald-500/30"
                : "bg-white/10 text-neutral-500 cursor-not-allowed"
            }`}
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </form>
  );
};
