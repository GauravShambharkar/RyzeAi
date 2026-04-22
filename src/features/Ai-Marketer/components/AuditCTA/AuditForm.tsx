import React from "react";
import { ArrowRight } from "lucide-react";

export const AuditForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.22em] text-neutral-500">
        Work email
      </label>
      <input
        type="email"
        placeholder="name@company.com"
        className="w-full rounded-full bg-neutral-50 border border-black/5 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all font-body font-mono text-neutral-900 placeholder:text-neutral-400"
      />
    </div>

    <div>
      <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.22em] text-neutral-500">
        Website URL <span className="text-neutral-400 normal-case tracking-normal">(optional)</span>
      </label>
      <input
        type="url"
        placeholder="https://yoursite.com"
        className="w-full rounded-full bg-neutral-50 border border-black/5 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all font-body font-mono text-neutral-900 placeholder:text-neutral-400"
      />
    </div>

    <button className="relative w-full rounded-full bg-neutral-900 text-white py-5 font-bold font-display uppercase tracking-[0.15em] flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.5),0_0_0_1px_rgba(16,185,129,0.3)] group">
      <span className="relative z-10 flex items-center gap-3">
        Run my free audit
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
    </button>
  </form>
);
