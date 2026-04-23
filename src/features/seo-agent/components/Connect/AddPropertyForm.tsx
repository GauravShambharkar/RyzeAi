"use client";

import React, { useState, type FormEvent } from "react";
import { Plus, Globe } from "lucide-react";
import { toast } from "sonner";
import { domainStore } from "@/features/seo-agent/store/domain.store";

export const AddPropertyForm = () => {
  const addProperty = domainStore((s) => s.addProperty);
  const [domain, setDomain] = useState("");
  const [label, setLabel] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = domain.trim();
    if (!trimmed) return;

    const id = addProperty(trimmed, label);
    if (!id) {
      toast.error("Couldn't add property", {
        description: `"${trimmed}" isn't a valid domain.`,
      });
      return;
    }

    setDomain("");
    setLabel("");
    toast.success("Property added", {
      description: "Selected as the active domain for chat.",
    });
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-black/5 bg-white p-5 md:p-6 shadow-[0_12px_40px_-20px_rgba(20,20,20,0.12)]"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="h-7 w-7 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-700">
          <Plus className="w-3.5 h-3.5" />
        </div>
        <h2 className="font-display text-base md:text-lg tracking-tight text-neutral-900">
          Add a property
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-2">
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="example.com"
            className="w-full rounded-full bg-white border border-black/10 pl-8 pr-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono"
            required
          />
        </div>

        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Label (optional, e.g. Main site)"
          className="rounded-full bg-white border border-black/10 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20 transition-all"
        />

        <button
          type="submit"
          disabled={!domain.trim()}
          className="rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          Add
        </button>
      </div>

      <p className="mt-3 text-[11px] text-neutral-500 leading-relaxed">
        Protocols and paths are stripped automatically. The active property is
        the one your chat queries will be anchored to.
      </p>
    </form>
  );
};
