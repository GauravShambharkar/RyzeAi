"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";
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
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] bg-[#FAF7F2]">
            {/* ——————————————— LEFT · editorial brand column ——————————————— */}
            <aside className="relative hidden lg:flex flex-col justify-between overflow-hidden p-12 xl:p-16">
                <Image
                    src="/pixelArt2/openWorld.png"
                    alt=""
                    fill
                    sizes="55vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-transparent to-black/30" />

                {/* Brand mark */}
                <div className="relative z-10 flex items-center gap-2">
                    <span className="font-display text-2xl text-white tracking-tighter">Ryze<span className="text-emerald-300 italic">.ai</span></span>
                </div>

                {/* Editorial copy */}
                <div className="relative z-10 max-w-lg">
                    <div className="font-pixel text-[13px] uppercase tracking-[0.35em] text-emerald-300/90 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                        — SEO Agent
                    </div>
                    <p className="font-display text-5xl xl:text-6xl text-white leading-[1.05] tracking-tighter drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
                        The garden <span className="italic text-emerald-300">tends</span> itself.
                    </p>
                    <p className="mt-6 text-sm text-white/75 leading-6 tracking-tight max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                        While you sleep, the agent audits rankings, rewrites meta, and queues fixes — by morning the backlog is smaller than yesterday.
                    </p>
                </div>

                {/* Live ticker */}
                <div className="relative z-10 flex items-center gap-3 text-white/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="font-pixel text-sm tracking-[0.2em] uppercase">
                        247 audits running · 12 teams online
                    </span>
                </div>
            </aside>

            {/* ——————————————— RIGHT · form column ——————————————— */}
            <div className="relative flex flex-col px-6 sm:px-10 lg:px-16 py-10 lg:py-14">
                {/* Mobile brand strip */}
                <div className="lg:hidden flex items-center justify-between mb-10">
                    <span className="font-display text-xl text-neutral-900 tracking-tighter">Ryze<span className="text-emerald-700 italic">.ai</span></span>
                    <span className="font-pixel text-[11px] uppercase tracking-[0.3em] text-neutral-500">SEO Agent</span>
                </div>

                {/* Index marker — small editorial detail */}
                <div className="hidden lg:flex items-center gap-3 text-neutral-400 font-mono text-[11px] uppercase tracking-[0.25em]">
                    <span className="tabular-nums">01</span>
                    <span className="w-8 h-px bg-neutral-300" />
                    <span>Access</span>
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto lg:mx-0">
                    {/* Headline */}
                    <h1 className="font-display text-4xl sm:text-5xl text-neutral-900 tracking-tighter leading-[1.02]">
                        Welcome <span className="italic text-emerald-700">back.</span>
                    </h1>
                    <p className="mt-3 text-sm text-neutral-500 leading-6 tracking-tight">
                        Preview access for invited teams. If you&apos;re not on the list yet, drop us a note at{" "}
                        <a href="mailto:hello@get-ryze.ai" className="text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-emerald-600 hover:text-emerald-700 transition-colors">
                            hello@get-ryze.ai
                        </a>.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                        {/* Email */}
                        <div>
                            <div className="flex items-baseline justify-between mb-1.5">
                                <label className="text-[11px] text-neutral-500 font-medium uppercase tracking-[0.15em]">Email</label>
                                <span className="text-[10px] text-neutral-400 font-mono">required</span>
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                disabled={isSubmitting}
                                className="w-full rounded-full bg-white border border-black/5 shadow-[0_2px_8px_-4px_rgba(20,20,20,0.08)] px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-neutral-400 disabled:opacity-60"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-baseline justify-between mb-1.5">
                                <label className="text-[11px] text-neutral-500 font-medium uppercase tracking-[0.15em]">Password</label>
                                <button
                                    type="button"
                                    tabIndex={-1}
                                    className="text-[11px] text-neutral-500 hover:text-emerald-700 transition-colors"
                                >
                                    Forgot?
                                </button>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                disabled={isSubmitting}
                                className="w-full rounded-full bg-white border border-black/5 shadow-[0_2px_8px_-4px_rgba(20,20,20,0.08)] px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-neutral-400 disabled:opacity-60"
                                required
                            />
                        </div>

                        {error && (
                            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-[13px] text-rose-700 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group w-full rounded-full bg-neutral-900 text-white py-3.5 text-sm font-semibold hover:bg-neutral-800 hover:-translate-y-px hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Signing in…
                                </>
                            ) : (
                                <>
                                    Continue
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Trust strip */}
                    <div className="mt-10 pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-neutral-500 font-mono">
                        <span>SOC 2 · GDPR · SSO</span>
                        <span className="tabular-nums">2,000+ teams</span>
                    </div>
                </div>

                {/* Footer meta */}
                <div className="hidden lg:flex items-center justify-between mt-auto pt-8 text-[11px] text-neutral-400 font-mono">
                    <span>© Ryze.ai — {new Date().getFullYear()}</span>
                    <span>v0.4.2 · preview</span>
                </div>
            </div>
        </section>
    );
};

export default Login;
