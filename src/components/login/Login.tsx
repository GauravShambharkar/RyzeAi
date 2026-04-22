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

    useEffect(() => {
        if (ready && authed) router.replace("/seo-agent");
    }, [ready, authed, router]);

    if (ready && authed) return null;

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#FAF7F2] text-neutral-900 px-6">
            <div className="relative w-full max-w-sm">
                {/* Soft emerald glow behind the card */}
                <div className="absolute -inset-6 bg-emerald-400/20 blur-3xl pointer-events-none" />

                <div className="relative rounded-3xl border border-black/5 bg-white shadow-[0_30px_80px_-24px_rgba(20,20,20,0.15)] p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Header */}
                        <div className="flex flex-col items-center text-center space-y-3 mb-2">
                            <div className="h-11 w-11 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-700">
                                <Lock className="w-4 h-4" />
                            </div>
                            <div>
                                <h1 className="font-display text-2xl text-neutral-900 tracking-tight">
                                    Sign <span className="italic text-emerald-700">in</span>
                                </h1>
                                <p className="text-xs text-neutral-500 mt-1">SEO Agent preview access</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[11px] text-neutral-500 mb-1.5 font-medium">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                disabled={isSubmitting}
                                className="w-full rounded-full bg-neutral-50 border border-black/5 px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/25 focus:bg-white transition-all placeholder:text-neutral-400 disabled:opacity-60"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-[11px] text-neutral-500 mb-1.5 font-medium">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                disabled={isSubmitting}
                                className="w-full rounded-full bg-neutral-50 border border-black/5 px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/25 focus:bg-white transition-all placeholder:text-neutral-400 disabled:opacity-60"
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-xs text-rose-600 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-rose-600" />
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-full bg-neutral-900 text-white py-3 text-sm font-semibold hover:bg-neutral-800 hover:-translate-y-px hover:shadow-[0_12px_32px_-8px_rgba(16,185,129,0.35)] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
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
