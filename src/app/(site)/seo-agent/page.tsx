"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";

export default function SeoAgentPage() {
  const router = useRouter();
  const { email, authed, ready, handleLogout } = useLogin();

  // Not authed → bounce to /login.
  useEffect(() => {
    if (ready && !authed) router.replace("/login");
  }, [ready, authed, router]);

  // While hydrating, or if we're about to redirect, render nothing.
  if (!ready || !authed) return null;

  const onSignOut = () => {
    handleLogout();
    router.replace("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="relative w-full max-w-xl">
        <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative border border-white/10 bg-neutral-950 shadow-2xl shadow-black/60 p-10">
          <div className="space-y-5 text-center">
            <div className="h-10 w-10 mx-auto rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div>
              <h1 className="font-display text-3xl text-white tracking-tight">
                SEO <span className="italic text-emerald-300">Agent</span>
              </h1>
              <p className="text-sm text-neutral-400 mt-2">
                Signed in as <span className="text-white font-mono">{email}</span>. The agent dashboard is under construction.
              </p>
            </div>
            <button
              onClick={onSignOut}
              className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] text-white/80 px-4 py-2 text-sm hover:bg-white/[0.06] hover:text-white transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
