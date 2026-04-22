"use client";

import React from "react";
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

  // Authed admins only see the SEO Agent link; public links are hidden.
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
      <div className="max-w-[1400px] border border-white/20 bg-white/10 backdrop-blur-md mx-auto p-2 pl-6 pr-2 flex items-center justify-between shadow-lg shadow-black/5">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <span className="hidden sm:inline">Ryze.ai</span>
        </div>

        {/* Right: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {visibleLinks.map(({ label, href }) => (
            <NavLink
              key={href}
              label={label}
              href={href}
              active={pathname === href}
            />
          ))}
        </div>

        {/* CTA: Sign out when authed, Get Started otherwise */}
        {ready && authed ? (
          <button
            onClick={onSignOut}
            className="inline-flex items-center gap-1.5 bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        ) : (
          <button className="bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:ring-2 hover:ring-ring hover:ring-offset-2 transition-all">
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
}: {
  label: string;
  href: string;
  active: boolean;
}) => (
  <Link
    href={href}
    className={`relative text-sm transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-white after:transition-all ${active
        ? "text-white font-medium after:w-full"
        : "text-white/70 hover:text-white after:w-0 hover:after:w-full"
      }`}
  >
    {label}
  </Link>
);
