"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Plug, LayoutDashboard, Menu } from "lucide-react";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";

type Props = {
  userEmail: string;
  onOpenHistory?: () => void;
};

export const ChatHeader = ({ userEmail, onOpenHistory }: Props) => {
  const router = useRouter();
  const { handleLogout } = useLogin();

  const onSignOut = () => {
    handleLogout();
    router.replace("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 md:py-4 px-4 md:px-6 lg:px-8 bg-[#FAF7F2]/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        {/* Left — brand + page title */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          {onOpenHistory && (
            <button
              type="button"
              onClick={onOpenHistory}
              aria-label="Open chat history"
              className="md:hidden h-9 w-9 shrink-0 rounded-xl flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}
          <span className="font-display text-xl font-semibold tracking-tighter text-neutral-900 shrink-0">
            Ryze<span className="italic text-emerald-700">.ai</span>
          </span>
          <span className="hidden sm:inline-block h-4 w-px bg-black/10 shrink-0" />
          <h1 className="hidden sm:inline font-display text-sm md:text-base text-neutral-700 tracking-tighter truncate">
            SEO <span className="italic text-emerald-700">Agent</span>
          </h1>
        </div>

        {/* Right — dashboard + manage + user + sign out */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/seo-agent/dashboard"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white hover:bg-neutral-50 hover:border-emerald-500/25 text-neutral-700 hover:text-emerald-700 px-3 py-2 text-xs md:text-sm font-medium transition-all"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          <Link
            href="/seo-agent/connect"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white hover:bg-neutral-50 hover:border-emerald-500/25 text-neutral-700 hover:text-emerald-700 px-3 py-2 text-xs md:text-sm font-medium transition-all"
          >
            <Plug className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Manage</span>
          </Link>
          <span className="text-xs text-neutral-500 hidden md:inline font-mono truncate max-w-[200px]">
            {userEmail}
          </span>
          <button
            type="button"
            onClick={onSignOut}
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white px-3 md:px-4 py-2 text-xs md:text-sm font-medium hover:bg-neutral-800 hover:shadow-md transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        </div>
      </div>
    </header>
  );
};
