"use client";

import React from "react";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { domainStore } from "@/features/seo-agent/store/domain.store";
import { ConnectHeader } from "./ConnectHeader";
import { AddPropertyForm } from "./AddPropertyForm";
import { PropertyCard } from "./PropertyCard";

type Props = { userEmail: string };

export const Connect = ({ userEmail }: Props) => {
  const properties = domainStore((s) => s.properties);
  const selectedId = domainStore((s) => s.selectedId);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-neutral-900">
      <ConnectHeader userEmail={userEmail} />

      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          {/* Intro */}
          <section className="mb-8 md:mb-10">
            <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-semibold mb-3">
              Properties &amp; integrations
            </div>
            <h1 className="font-display text-3xl md:text-4xl tracking-tighter text-neutral-900 leading-tight max-w-2xl">
              Give the agent{" "}
              <span className="italic text-emerald-700">context.</span>
            </h1>
            <p className="mt-3 text-sm text-neutral-600 max-w-2xl leading-relaxed">
              Add every domain you own, then connect the data sources behind
              them. The chat anchors its advice to the active property and
              references whichever integrations are connected.
            </p>
          </section>

          <section className="mb-8">
            <AddPropertyForm />
          </section>

          {/* Properties list */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-display text-lg md:text-xl tracking-tight text-neutral-900">
                Your properties
              </h2>
              <span className="text-[11px] text-neutral-500 font-mono tabular-nums">
                {properties.length}{" "}
                {properties.length === 1 ? "domain" : "domains"}
              </span>
            </div>

            {properties.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-black/10 bg-white/40 p-10 text-center">
                <Globe className="w-6 h-6 text-neutral-300 mx-auto mb-3" />
                <p className="text-sm text-neutral-500">
                  No properties yet. Add your first domain above to get started.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {properties.map((p) => (
                  <PropertyCard
                    key={p.id}
                    property={p}
                    isActive={p.id === selectedId}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Back-to-chat CTA */}
          {properties.length > 0 && (
            <section className="mt-10 flex items-center justify-center">
              <Link
                href="/seo-agent"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 hover:shadow-[0_12px_32px_-12px_rgba(20,20,20,0.4)] transition-all"
              >
                Back to chat
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};
