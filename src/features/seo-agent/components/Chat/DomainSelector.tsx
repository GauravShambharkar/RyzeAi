"use client";

import React, { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { availableDomains } from "@/features/seo-agent/data/domains";

export const DomainSelector = () => {
  const [selected, setSelected] = useState(availableDomains[0]);
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

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 text-xs text-neutral-700 hover:text-neutral-900 bg-neutral-50 hover:bg-neutral-100 border border-black/5 rounded-full pl-2.5 pr-2 py-1 transition-colors"
      >
        <Globe className="w-3 h-3 text-emerald-600" />
        <span className="font-mono">{selected}</span>
        <ChevronDown
          className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 bottom-full mb-2 min-w-[220px] rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_-16px_rgba(20,20,20,0.2)] overflow-hidden z-20">
          <div className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 border-b border-black/5 bg-neutral-50/70">
            Select domain
          </div>
          {availableDomains.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => {
                setSelected(d);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-emerald-600/80" />
                <span className="font-mono">{d}</span>
              </span>
              {selected === d && <Check className="w-3.5 h-3.5 text-emerald-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
