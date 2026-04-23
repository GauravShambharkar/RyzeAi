"use client";

import React, { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Pencil } from "lucide-react";
import type { ChatMessage as Message } from "@/features/seo-agent/store/chat.store";
import { AssistantMessage } from "./AssistantMessage";

type Props = {
  message: Message;
  disabled?: boolean;
  onEdit?: (id: string, newContent: string) => void;
  onAction?: (action: string) => void;
};

export const ChatMessage = ({ message, disabled, onEdit, onAction }: Props) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(message.content);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!editing) return;
    const el = textareaRef.current;
    if (!el) return;
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 240)}px`;
  }, [editing]);

  if (message.role === "user") {
    const canEdit = Boolean(onEdit) && !disabled;

    const startEdit = () => {
      if (!canEdit) return;
      setDraft(message.content);
      setEditing(true);
    };

    const cancel = () => {
      setEditing(false);
      setDraft(message.content);
    };

    const save = () => {
      const trimmed = draft.trim();
      if (!trimmed || trimmed === message.content.trim()) {
        cancel();
        return;
      }
      onEdit?.(message.id, trimmed);
      setEditing(false);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        save();
      } else if (e.key === "Escape") {
        e.preventDefault();
        cancel();
      }
    };

    if (editing) {
      return (
        <div className="flex justify-end">
          <div className="w-full max-w-150 rounded-3xl rounded-tr-md bg-white border border-emerald-500/30 ring-2 ring-emerald-500/15 shadow-sm px-4 pt-3 pb-2">
            <textarea
              ref={textareaRef}
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = `${Math.min(e.target.scrollHeight, 240)}px`;
              }}
              onKeyDown={onKeyDown}
              rows={1}
              className="w-full resize-none bg-transparent text-xs md:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none leading-relaxed scrollbar-chat"
            />
            <div className="mt-2 pt-2 border-t border-black/5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={cancel}
                className="rounded-full px-3 py-1 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={save}
                disabled={!draft.trim()}
                className="rounded-full px-3 py-1 text-xs font-medium bg-emerald-500 text-white hover:bg-emerald-600 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed transition-colors"
              >
                Save & resend
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="group flex justify-end items-start gap-2">
        {canEdit && (
          <button
            type="button"
            onClick={startEdit}
            aria-label="Edit message"
            title="Edit message"
            className="opacity-0 group-hover:opacity-100 focus:opacity-100 mt-1 p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-all"
          >
            <Pencil className="w-3 h-3" />
          </button>
        )}
        <div className="max-w-150 bg-neutral-900 text-white px-4 py-2.5 text-xs md:text-sm leading-relaxed rounded-3xl rounded-tr-md shadow-sm whitespace-pre-wrap break-words">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 text-xs font-display shrink-0">
        R
      </div>
      <div className="max-w-[85%] md:max-w-[70%] pt-1 min-w-0">
        <AssistantMessage
          content={message.content}
          disabled={disabled}
          onAction={onAction}
        />
      </div>
    </div>
  );
};
