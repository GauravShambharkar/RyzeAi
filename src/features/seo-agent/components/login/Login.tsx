"use client";

import React from "react";
import { Lock, LogOut } from "lucide-react";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";

export const Login = () => {
  const {
    email,
    password,
    error,
    authed,
    setEmail,
    setPassword,
    handleSubmit,
    handleLogout,
  } = useLogin();

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="relative w-full max-w-sm">
        {/* Soft emerald glow behind the card */}
        <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative border border-white/10 bg-neutral-950 shadow-2xl shadow-black/60 p-8">
          {authed ? (
            <AuthedView email={email} onLogout={handleLogout} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Header */}
              <div className="flex flex-col items-center text-center space-y-3 mb-2">
                <div className="h-10 w-10 border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-300">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h1 className="font-display text-2xl text-white tracking-tight">
                    Sign <span className="italic text-emerald-300">in</span>
                  </h1>
                  <p className="text-xs text-neutral-500 mt-1">SEO Agent preview access</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-black/60 border border-white/10 px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-colors placeholder:text-neutral-700"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black/60 border border-white/10 px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-colors placeholder:text-neutral-700"
                  required
                />
              </div>

              {error && (
                <p className="text-xs text-rose-400 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-rose-400" />
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-white text-black py-2.5 text-sm font-semibold hover:bg-neutral-200 hover:-translate-y-px transition-all"
              >
                Sign in
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const AuthedView = ({ email, onLogout }: { email: string; onLogout: () => void }) => (
  <div className="space-y-4 text-center">
    <div className="h-10 w-10 mx-auto rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    </div>
    <div>
      <h1 className="font-display text-xl text-white tracking-tight">
        Welcome <span className="italic text-emerald-300">back</span>
      </h1>
      <p className="text-xs text-neutral-500 mt-1">Signed in as {email}</p>
    </div>
    <button
      onClick={onLogout}
      className="w-full inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.03] text-white/80 py-2.5 text-sm hover:bg-white/[0.06] hover:text-white transition-colors"
    >
      <LogOut className="w-3.5 h-3.5" />
      Sign out
    </button>
  </div>
);

export default Login;
