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
        className="w-full bg-black/60 border border-white/10 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500/60 focus:border-emerald-500/50 transition-all font-body font-mono text-white placeholder:text-neutral-600"
      />
    </div>

    <div>
      <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.22em] text-neutral-500">
        Website URL <span className="text-neutral-600 normal-case tracking-normal">(optional)</span>
      </label>
      <input
        type="url"
        placeholder="https://yoursite.com"
        className="w-full bg-black/60 border border-white/10 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500/60 focus:border-emerald-500/50 transition-all font-body font-mono text-white placeholder:text-neutral-600"
      />
    </div>

    <button className="relative w-full bg-gradient-to-b from-white to-neutral-200 text-black py-5 font-bold font-display uppercase tracking-[0.15em] flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.7),0_0_0_1px_rgba(16,185,129,0.4)] group">
      <span className="relative z-10 flex items-center gap-3">
        Run my free audit
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
    </button>
  </form>
);
