"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape / outside click.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen]);

  const visibleLinks =
    ready && authed
      ? NAV_LINKS.filter((l) => !AUTHED_BLOCKED_ROUTES.includes(l.href as (typeof AUTHED_BLOCKED_ROUTES)[number]))
      : NAV_LINKS;

  const onSignOut = () => {
    handleLogout();
    setMobileOpen(false);
    router.replace("/login");
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 lg:px-20"
    >
      <div
        className={`max-w-[1400px] mx-auto flex items-center justify-between rounded-full backdrop-blur-xl p-2 pl-6 pr-2 shadow-[0_8px_32px_-12px_rgba(20,20,20,0.12)] border transition-colors duration-300 ${
          scrolled
            ? "border-black/10 bg-white/70"
            : "border-white/20 bg-white/5"
        }`}
      >
        {/* Logo */}
        <div
          className={`flex items-center gap-2 text-xl font-semibold tracking-tighter font-display transition-colors duration-300 ${
            scrolled ? "text-neutral-900" : "text-white"
          }`}
        >
          <h1 className="inline">Ryze.ai</h1>
        </div>

        {/* Desktop nav links */}
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

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <div className="hidden md:block">
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

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={`md:hidden h-9 w-9 rounded-full flex items-center justify-center transition-colors ${
              scrolled
                ? "bg-neutral-900 text-white hover:bg-neutral-800"
                : "bg-white/15 text-white border border-white/25 hover:bg-white/25"
            }`}
          >
            {mobileOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden max-w-[1400px] mx-auto mt-2 origin-top transition-all duration-200 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div
          className={`rounded-3xl backdrop-blur-xl border shadow-[0_20px_60px_-20px_rgba(20,20,20,0.25)] p-3 ${
            scrolled
              ? "border-black/10 bg-white/90"
              : "border-white/20 bg-neutral-900/80"
          }`}
        >
          <div className="flex flex-col gap-1">
            {visibleLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm transition-colors ${
                    active
                      ? scrolled
                        ? "bg-neutral-900 text-white font-medium"
                        : "bg-white text-neutral-900 font-medium"
                      : scrolled
                        ? "text-neutral-700 hover:text-neutral-900 hover:bg-black/5"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div
            className={`mt-2 pt-3 border-t ${
              scrolled ? "border-black/10" : "border-white/15"
            }`}
          >
            {ready && authed ? (
              <button
                onClick={onSignOut}
                className={`w-full inline-flex items-center justify-center gap-1.5 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  scrolled
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "bg-white text-neutral-900 hover:bg-white/90"
                }`}
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign out
              </button>
            ) : (
              <button
                onClick={() => setMobileOpen(false)}
                className={`w-full rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  scrolled
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "bg-white text-neutral-900 hover:bg-white/90"
                }`}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
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
