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
    <form onSubmit={submit} className="py-4 shrink-0 w-full sticky bottom-0 z-10 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/70 to-transparent">
      <div className="relative rounded-3xl border border-black/5 bg-white focus-within:border-emerald-500/40 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all duration-300 shadow-[0_12px_40px_-12px_rgba(20,20,20,0.12)] max-w-3xl mx-auto">
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
          className="w-full resize-none bg-transparent px-4 pt-3 pb-2 text-xs md:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none min-h-[56px] max-h-52 leading-relaxed scrollbar-chat"
        />

        <div className="flex items-center justify-between gap-3 px-3 pb-2.5 pt-1">
          <DomainSelector />
          <button
            type="submit"
            disabled={!canSubmit}
            aria-label="Send message"
            className={`h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              canSubmit
                ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_6px_20px_-4px_rgba(16,185,129,0.5)]"
                : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
            }`}
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </form>
  );
};
