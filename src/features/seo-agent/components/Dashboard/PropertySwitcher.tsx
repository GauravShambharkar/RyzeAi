"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Globe, ChevronDown, Check, Plug, ArrowUpRight } from "lucide-react";
import {
  domainStore,
  CONNECTIONS,
  type Property,
} from "@/features/seo-agent/store/domain.store";

const connectionCount = (p: Property) =>
  CONNECTIONS.filter((c) => p.connections[c.id]).length;

// A larger variant of DomainSelector sized for the dashboard header area.
export const PropertySwitcher = () => {
  const properties = domainStore((s) => s.properties);
  const selectedId = domainStore((s) => s.selectedId);
  const selectProperty = domainStore((s) => s.selectProperty);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const active = properties.find((p) => p.id === selectedId) ?? null;
  const activeCount = active ? connectionCount(active) : 0;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-2xl border border-black/5 bg-white hover:border-emerald-500/30 px-4 py-2.5 text-sm transition-all shadow-[0_4px_16px_-8px_rgba(20,20,20,0.1)]"
      >
        <Globe className="w-4 h-4 text-emerald-600" />
        <div className="text-left min-w-0">
          <div className="font-mono text-neutral-900 truncate max-w-[200px]">
            {active?.domain ?? "No property"}
          </div>
          {active?.label && (
            <div className="text-[10px] text-neutral-500 truncate">
              {active.label}
            </div>
          )}
        </div>
        {active && (
          <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 text-emerald-700 px-2 py-0.5 text-[10px] font-medium tabular-nums">
            <Plug className="w-2.5 h-2.5" />
            {activeCount}
          </span>
        )}
        <ChevronDown
          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[320px] rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_-16px_rgba(20,20,20,0.2)] overflow-hidden z-20">
          <div className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 border-b border-black/5 bg-neutral-50/70">
            Switch property
          </div>

          {properties.length === 0 ? (
            <div className="px-3 py-4 text-xs text-neutral-500">
              No properties yet.
            </div>
          ) : (
            <div className="max-h-72 overflow-y-auto scrollbar-chat">
              {properties.map((p) => {
                const count = connectionCount(p);
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      selectProperty(p.id);
                      setOpen(false);
                    }}
                    className="w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-emerald-600/80 shrink-0" />
                        <span className="font-mono truncate">{p.domain}</span>
                      </div>
                      {p.label && (
                        <div className="text-[10px] text-neutral-400 mt-0.5 truncate pl-5">
                          {p.label}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] text-neutral-500 font-mono tabular-nums inline-flex items-center gap-0.5">
                        <Plug className="w-2.5 h-2.5" />
                        {count}
                      </span>
                      {p.id === selectedId && (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          <Link
            href="/seo-agent/connect"
            className="group flex items-center justify-between gap-2 px-3 py-2.5 border-t border-black/5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-emerald-700 transition-colors"
            onClick={() => setOpen(false)}
          >
            <span>Manage properties</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>
      )}
    </div>
  );
};
