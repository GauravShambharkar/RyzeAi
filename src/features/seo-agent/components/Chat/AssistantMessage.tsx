"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { StatusPill, type StatusKind } from "./StatusPill";
import { ActionPills } from "./ActionPills";

type Props = {
  content: string;
  disabled?: boolean;
  onAction?: (action: string) => void;
};

const ACTIONS_RE = /\[ACTIONS\]([\s\S]*?)\[\/ACTIONS\]\s*$/;

// Pulls the trailing [ACTIONS]...[/ACTIONS] block (if present) off the message
// content and returns the cleaned body + parsed action lines.
const extractActions = (raw: string): { body: string; actions: string[] } => {
  const match = raw.match(ACTIONS_RE);
  if (!match) return { body: raw, actions: [] };

  const body = raw.slice(0, match.index).trimEnd();
  const actions = match[1]
    .split("\n")
    .map((line) => line.trim())
    .map((line) => line.replace(/^[-*]\s+/, ""))
    .filter(Boolean);

  return { body, actions };
};

const TOKEN_RE = /\[(OK|FIX|WARN)\]/g;

const TOKEN_TO_KIND: Record<string, StatusKind> = {
  OK: "ok",
  FIX: "fix",
  WARN: "warn",
};

// Replace [OK] / [FIX] / [WARN] inside a plain-text node with StatusPill
// components, preserving the surrounding text.
const replaceTokens = (text: string): React.ReactNode => {
  TOKEN_RE.lastIndex = 0;
  if (!TOKEN_RE.test(text)) return text;

  TOKEN_RE.lastIndex = 0;
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = TOKEN_RE.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    const kind = TOKEN_TO_KIND[match[1]];
    parts.push(<StatusPill key={`${match.index}-${kind}`} kind={kind} />);
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
};

// Walk arbitrary markdown-rendered children; stringify any string leaves and
// swap status tokens for <StatusPill />.
const withPills = (children: React.ReactNode): React.ReactNode => {
  if (typeof children === "string") return replaceTokens(children);
  if (Array.isArray(children)) {
    return children.map((c, i) => (
      <React.Fragment key={i}>{withPills(c)}</React.Fragment>
    ));
  }
  return children;
};

export const AssistantMessage = ({ content, disabled, onAction }: Props) => {
  const { body, actions } = extractActions(content);
  const canShowActions = actions.length > 0 && Boolean(onAction);

  return (
    <div className="prose-seo text-xs md:text-sm text-neutral-800 leading-relaxed max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        h1: ({ children }) => (
          <h1 className="font-display text-xl md:text-2xl tracking-tighter text-neutral-900 mt-4 mb-2 first:mt-0">
            {withPills(children)}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-display text-lg md:text-xl tracking-tighter text-neutral-900 mt-4 mb-2 first:mt-0">
            {withPills(children)}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-display text-base md:text-lg tracking-tight text-neutral-900 mt-3 mb-1.5 first:mt-0">
            {withPills(children)}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="font-medium text-sm text-neutral-900 mt-3 mb-1 first:mt-0">
            {withPills(children)}
          </h4>
        ),
        p: ({ children }) => (
          <p className="my-2 first:mt-0 last:mb-0">{withPills(children)}</p>
        ),
        ul: ({ children }) => (
          <ul className="my-2 pl-5 space-y-1 list-disc marker:text-neutral-300">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="my-2 pl-5 space-y-1 list-decimal marker:text-neutral-400">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed">{withPills(children)}</li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-neutral-900">
            {withPills(children)}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-neutral-700">{withPills(children)}</em>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-3 border-l-2 border-emerald-500/40 pl-3 text-neutral-600 italic">
            {children}
          </blockquote>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 underline underline-offset-2 decoration-emerald-300 hover:decoration-emerald-600"
          >
            {withPills(children)}
          </a>
        ),
        code: ({ children, className }) => {
          const isBlock = Boolean(className);
          if (isBlock) {
            return (
              <code className="block bg-neutral-900 text-neutral-100 rounded-xl px-3 py-2 text-[11px] md:text-xs font-mono leading-relaxed overflow-x-auto scrollbar-chat">
                {children}
              </code>
            );
          }
          return (
            <code className="px-1 py-0.5 rounded-md bg-neutral-100 text-neutral-800 text-[0.9em] font-mono">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="my-2 overflow-hidden rounded-xl">{children}</pre>
        ),
        hr: () => <hr className="my-4 border-t border-black/5" />,
        table: ({ children }) => (
          <div className="my-3 overflow-x-auto scrollbar-chat rounded-xl border border-black/5 bg-white">
            <table className="w-full text-[11px] md:text-xs border-collapse">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-neutral-50/80 text-neutral-600 uppercase tracking-wide text-[10px]">
            {children}
          </thead>
        ),
        tbody: ({ children }) => (
          <tbody className="divide-y divide-black/5">{children}</tbody>
        ),
        tr: ({ children }) => <tr>{children}</tr>,
        th: ({ children }) => (
          <th className="text-left font-medium px-3 py-2">
            {withPills(children)}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-3 py-2 align-top text-neutral-700">
            {withPills(children)}
          </td>
        ),
        }}
      >
        {body}
      </ReactMarkdown>
      {canShowActions && onAction && (
        <ActionPills
          actions={actions}
          disabled={disabled}
          onAction={onAction}
        />
      )}
    </div>
  );
};
