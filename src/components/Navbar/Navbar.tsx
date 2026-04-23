"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";
import { AUTHED_BLOCKED_ROUTES } from "@/features/seo-agent/hooks/authGuard.hook";

const NAV_LINKS = [
  { label: "AI Marketer", href: "/ai-marketer" },
  { label: "MCP", href: "/mcp" },
  { label: "SEO Agent", href: "/seo-agent" },
] as const;

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { authed, ready, handleLogout } = useLogin();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const threshold = () => window.innerHeight * 0.6;
    const onScroll = () => setScrolled(window.scrollY > threshold());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const visibleLinks =
    ready && authed
      ? NAV_LINKS.filter((l) => !AUTHED_BLOCKED_ROUTES.includes(l.href as (typeof AUTHED_BLOCKED_ROUTES)[number]))
      : NAV_LINKS;

  const onSignOut = () => {
    handleLogout();
    router.replace("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 lg:px-20">
      <div
        className={`max-w-[1400px] mx-auto flex items-center justify-between rounded-full backdrop-blur-xl p-2 pl-6 pr-2 shadow-[0_8px_32px_-12px_rgba(20,20,20,0.12)] border transition-colors duration-300 ${
          scrolled
            ? "border-black/10 bg-white/70"
            : "border-white/20 bg-white/5"
        }`}
      >
        {/* Left: Logo */}
        <div
          className={`flex items-center gap-2 text-xl font-semibold tracking-tighter font-display transition-colors duration-300 ${
            scrolled ? "text-neutral-900" : "text-white"
          }`}
        >
          <h1 className="hidden sm:inline">Ryze.ai</h1>
        </div>

        {/* Right: Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {visibleLinks.map(({ label, href }) => (
            <NavLink
              key={href}
              label={label}
              href={href}
              active={pathname === href}
              scrolled={scrolled}
            />
          ))}
        </div>

        {/* CTA */}
        {ready && authed ? (
          <button
            onClick={onSignOut}
            className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              scrolled
                ? "bg-neutral-900 text-white border-transparent hover:bg-neutral-800 hover:shadow-md"
                : "bg-white/60 text-neutral-800 border-black/5 hover:bg-white hover:shadow-sm"
            }`}
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        ) : (
          <button
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              scrolled
                ? "bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-md"
                : "bg-white text-neutral-900 hover:bg-white/90 hover:shadow-md"
            }`}
          >
            Get Started
          </button>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({
  label,
  href,
  active,
  scrolled,
}: {
  label: string;
  href: string;
  active: boolean;
  scrolled: boolean;
}) => (
  <Link
    href={href}
    className={`rounded-full px-4 py-2 text-sm transition-all ${
      active
        ? scrolled
          ? "bg-neutral-900 text-white font-medium shadow-sm"
          : "bg-white/80 backdrop-blur-md shadow-lg text-neutral-900 font-medium"
        : scrolled
          ? "text-neutral-700 hover:text-neutral-900 hover:bg-black/5"
          : "text-white hover:text-neutral-900 hover:bg-white"
    }`}
  >
    {label}
  </Link>
);
