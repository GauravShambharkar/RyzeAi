"use client";

import React from "react";
import {
  Plus,
  MessageSquare,
  Trash2,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import type { ChatThread } from "@/features/seo-agent/store/chat.store";

type Props = {
  threads: ChatThread[];
  activeThreadId: string | null;
  collapsed: boolean;
  onToggleCollapse: () => void;
  onSelect: (id: string) => void;
  onNewChat: () => void;
  onDelete: (id: string) => void;
};

export const Sidebar = ({
  threads,
  activeThreadId,
  collapsed,
  onToggleCollapse,
  onSelect,
  onNewChat,
  onDelete,
}: Props) => (
  <aside
    className={`hidden md:flex fixed left-0 top-0 bottom-0 border-r border-black/5 bg-white/60 backdrop-blur-sm flex-col pt-24 pb-4 z-20 transition-[width] duration-300 ease-out ${
      collapsed ? "w-14 px-2" : "w-64 px-3"
    }`}
  >
    {/* Top row: collapse toggle + new chat */}
    <div
      className={`flex items-center gap-2 ${collapsed ? "flex-col" : "flex-row"}`}
    >
      <button
        type="button"
        onClick={onToggleCollapse}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="h-9 w-9 shrink-0 rounded-xl flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors"
      >
        {collapsed ? (
          <PanelLeft className="w-4 h-4" />
        ) : (
          <PanelLeftClose className="w-4 h-4" />
        )}
      </button>

      <button
        type="button"
        onClick={onNewChat}
        aria-label="New chat"
        title="New chat"
        className={`group flex items-center gap-2 rounded-xl border border-black/5 bg-white hover:border-emerald-500/30 hover:shadow-[0_8px_24px_-8px_rgba(20,20,20,0.1)] text-sm font-medium text-neutral-800 transition-all ${
          collapsed
            ? "h-9 w-9 justify-center"
            : "flex-1 px-3 py-2.5 justify-start"
        }`}
      >
        <Plus className="w-4 h-4 text-emerald-600 shrink-0" />
        {!collapsed && <span className="truncate">New chat</span>}
      </button>
    </div>

    {!collapsed && (
      <div className="mt-6 px-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
        History
      </div>
    )}

    <div
      className={`flex-1 overflow-y-auto scrollbar-chat space-y-0.5 ${
        collapsed ? "mt-3" : "mt-2 pr-1"
      }`}
    >
      {threads.length === 0 && !collapsed && (
        <div className="px-3 py-4 text-xs text-neutral-400 leading-6 tracking-tight">
          Your chat history will appear here.
        </div>
      )}

      {threads.map((t) => {
        const active = t.id === activeThreadId;

        if (collapsed) {
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect(t.id)}
              aria-label={t.title}
              title={t.title}
              className={`w-full h-9 rounded-xl flex items-center justify-center transition-colors ${
                active
                  ? "bg-emerald-500/10 text-emerald-700"
                  : "text-neutral-400 hover:bg-neutral-100/80 hover:text-neutral-700"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </button>
          );
        }

        return (
          <div
            key={t.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(t.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(t.id);
            }}
            className={`group flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm cursor-pointer transition-colors ${
              active
                ? "bg-emerald-500/10 text-neutral-900"
                : "text-neutral-600 hover:bg-neutral-100/80 hover:text-neutral-900"
            }`}
          >
            <MessageSquare
              className={`w-3.5 h-3.5 shrink-0 ${
                active ? "text-emerald-600" : "text-neutral-400"
              }`}
            />
            <span className="flex-1 truncate">{t.title}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(t.id);
              }}
              aria-label="Delete chat"
              className="opacity-0 group-hover:opacity-100 p-1 rounded-md hover:bg-white text-neutral-400 hover:text-red-500 transition-all"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        );
      })}
    </div>
  </aside>
);
