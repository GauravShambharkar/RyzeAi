"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2 } from "lucide-react";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";

export const Login = () => {
    const router = useRouter();
    const {
        email,
        password,
        error,
        authed,
        ready,
        isSubmitting,
        setEmail,
        setPassword,
        handleSubmit,
    } = useLogin();

    // If a valid session exists (or we just authed), bounce to the app.
    useEffect(() => {
        if (ready && authed) router.replace("/seo-agent");
    }, [ready, authed, router]);

    // Avoid a form-flash during redirect.
    if (ready && authed) return null;

    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
            <div className="relative w-full max-w-sm">
                {/* Soft emerald glow behind the card */}
                <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl pointer-events-none" />

                <div className="relative border border-white/10 bg-neutral-950 shadow-2xl shadow-black/60 p-8">
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
                                disabled={isSubmitting}
                                className="w-full bg-black/60 border border-white/10 px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-colors placeholder:text-neutral-700 disabled:opacity-60"
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
                                disabled={isSubmitting}
                                className="w-full bg-black/60 border border-white/10 px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-colors placeholder:text-neutral-700 disabled:opacity-60"
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
                            disabled={isSubmitting}
                            className="w-full bg-white text-black py-2.5 text-sm font-semibold hover:bg-neutral-200 hover:-translate-y-px transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
