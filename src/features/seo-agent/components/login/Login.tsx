"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, LogOut } from "lucide-react";

// Hardcoded gate — replace with real auth before going public.
const VALID_EMAIL = "admin@ryze.ai";
const VALID_PASSWORD = "ryze2026";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === VALID_EMAIL && password === VALID_PASSWORD) {
      setError(null);
      setAuthed(true);
    } else {
      setError("Invalid credentials. Check the demo hint below.");
    }
  };

  const handleLogout = () => {
    setAuthed(false);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#06080c] text-white px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute -inset-4 bg-emerald-500/15 blur-2xl pointer-events-none" />

        <div className="relative border border-white/10 bg-neutral-950/85 backdrop-blur-xl shadow-[0_50px_120px_-25px_rgba(0,0,0,0.9)] overflow-hidden">
          <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-emerald-400/60 pointer-events-none" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-emerald-400/60 pointer-events-none" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-emerald-400/60 pointer-events-none" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-emerald-400/60 pointer-events-none" />

          <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/[0.02]">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              {authed ? "Authenticated" : "Locked"}
            </span>
            <span className="text-[11px] font-mono text-neutral-400">ryze.ai/seo-agent</span>
          </div>

          <div className="p-8 md:p-9">
            {authed ? <AuthedView email={email} onLogout={handleLogout} /> : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h1 className="font-display text-2xl md:text-[28px] text-white leading-tight tracking-tight mb-1.5">
                  SEO Agent <span className="italic text-emerald-300">access</span>
                </h1>
                <p className="text-sm text-neutral-400 font-body mb-6">
                  Restricted preview. Sign in with your demo credentials.
                </p>

                <div>
                  <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.22em] text-neutral-500">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@ryze.ai"
                    className="w-full bg-black/60 border border-white/10 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500/60 focus:border-emerald-500/50 transition-all font-body font-mono text-white placeholder:text-neutral-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.22em] text-neutral-500">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-black/60 border border-white/10 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500/60 focus:border-emerald-500/50 transition-all font-body font-mono text-white placeholder:text-neutral-600"
                    required
                  />
                </div>

                {error && (
                  <p className="text-[12px] font-mono text-rose-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-rose-400" />
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="relative w-full bg-gradient-to-b from-white to-neutral-200 text-black py-5 font-bold font-display uppercase tracking-[0.15em] flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.7),0_0_0_1px_rgba(16,185,129,0.4)] group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Lock className="w-4 h-4" />
                    Unlock access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
                </button>

                <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-300/80" />
                    Demo preview
                  </span>
                  <span>
                    {VALID_EMAIL} / {VALID_PASSWORD}
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const AuthedView = ({ email, onLogout }: { email: string; onLogout: () => void }) => (
  <div className="space-y-5">
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      Session active
    </div>
    <h1 className="font-display text-2xl md:text-[28px] text-white leading-tight tracking-tight">
      Welcome to the <span className="italic text-emerald-300">SEO Agent</span>
    </h1>
    <p className="text-sm text-neutral-400 font-body leading-relaxed">
      Signed in as <span className="text-white font-mono">{email}</span>. The agent dashboard is not built yet — this is the access-gated surface.
    </p>
    <button
      onClick={onLogout}
      className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] text-white/80 px-4 py-2 text-[12px] font-display uppercase tracking-[0.18em] hover:bg-white/[0.06] hover:text-white transition-colors"
    >
      <LogOut className="w-3.5 h-3.5" />
      Sign out
    </button>
  </div>
);

export default Login;
