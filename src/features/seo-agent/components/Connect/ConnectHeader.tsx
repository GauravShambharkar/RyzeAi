"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, LogOut } from "lucide-react";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";

type Props = { userEmail: string };

export const ConnectHeader = ({ userEmail }: Props) => {
  const router = useRouter();
  const { handleLogout } = useLogin();

  const onSignOut = () => {
    handleLogout();
    router.replace("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 md:py-4 px-4 md:px-6 lg:px-8 bg-[#FAF7F2]/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/seo-agent"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 font-medium rounded-full px-2.5 py-1.5 hover:bg-neutral-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to chat</span>
          </Link>
          <span className="hidden sm:inline-block h-4 w-px bg-black/10 shrink-0" />
          <span className="font-display text-xl font-semibold tracking-tighter text-neutral-900 shrink-0">
            Ryze<span className="italic text-emerald-700">.ai</span>
          </span>
          <span className="hidden sm:inline-block h-4 w-px bg-black/10 shrink-0" />
          <h1 className="hidden sm:inline font-display text-sm md:text-base text-neutral-700 tracking-tighter truncate">
            Connected <span className="italic text-emerald-700">Properties</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
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
