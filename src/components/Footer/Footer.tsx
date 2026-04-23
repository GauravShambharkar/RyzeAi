"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const COMPANY = [
  { label: "Work with us", href: "#" },
  { label: "Brand Assets", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Get in Touch", href: "mailto:ryzeaiteam@gmail.com" },
] as const;

const PRODUCTS = [
  { label: "SEO-Agent", href: "/seo-agent" },
  { label: "Landing page", href: "/ai-marketer" },
  { label: "MCP Connector", href: "/mcp" },
] as const;

const SOCIAL = [
  { label: "Discord", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Mirror", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" },
] as const;

export const Footer = () => (
  <footer className="relative isolate overflow-hidden bg-[#0b0b0b] text-white">
    {/* ——— Top gradient CTA banner ——— */}


    {/* ——— Footer body ——— */}
    <div className="relative px-4 md:px-8 lg:px-20">
      {/* Giant low-opacity brand text (behind content) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden"
      >
        <span
          className="font-display leading-none tracking-tighter select-none bg-clip-text text-transparent text-[clamp(9rem,24vw,26rem)] translate-y-[18%] bg-[linear-gradient(to_bottom,#dbeafe_0%,#bfdbfe_18%,#60a5fa_38%,#3b82f6_55%,#1e3a8a_70%,#0a1930_82%,#0b0b0b_90%)] [-webkit-text-fill-color:transparent]"
        >
          RYZE.AI
        </span>
      </div>

      {/* Top border glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto pt-20 md:pt-24 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
          <FooterColumn title="Company" links={COMPANY} />
          <FooterColumn title="Products" links={PRODUCTS} />
          <FooterColumn title="Social" links={SOCIAL} />
        </div>

        {/* Bottom bar */}
        <div className="mt-28 md:mt-40 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span className="font-body">© 2024 — Ryze</span>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hover:text-white/80 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-white/80 transition-colors"
            >
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) => (
  <div>
    <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45 mb-6">
      {title}
    </h4>
    <ul className="flex flex-col gap-3.5">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="group inline-flex items-center gap-1.5 text-sm text-white/75 hover:text-white transition-colors"
          >
            <span>{label}</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
