import React from "react";
import { Globe, Plug, Calendar } from "lucide-react";
import {
  CONNECTIONS,
  type Property,
} from "@/features/seo-agent/store/domain.store";

type Props = {
  property: Property;
};

const formatAddedAt = (ts: number) => {
  try {
    return new Date(ts).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "—";
  }
};

export const OverviewCard = ({ property }: Props) => {
  const active = CONNECTIONS.filter((c) => property.connections[c.id]);
  const hasConnections = active.length > 0;

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-4 sm:p-5 md:p-7 shadow-[0_8px_32px_-16px_rgba(20,20,20,0.08)]">
      <div className="flex items-start justify-between gap-3 sm:gap-4 flex-wrap">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 font-semibold mb-1 sm:mb-1.5">
            <Globe className="w-3 h-3 text-emerald-600" />
            Property
          </div>
          <div className="font-display text-xl sm:text-2xl md:text-3xl tracking-tighter text-neutral-900 truncate">
            {property.domain}
          </div>
          {property.label && (
            <div className="mt-0.5 text-[11px] sm:text-xs text-neutral-500 truncate">
              {property.label}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap shrink-0">
          {hasConnections ? (
            active.map((c) => (
              <span
                key={c.id}
                className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide"
              >
                <Plug className="w-2.5 h-2.5" />
                {c.short}
              </span>
            ))
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 border border-black/5 text-neutral-500 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide">
              <Plug className="w-2.5 h-2.5" />
              No sources connected
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-black/5 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs text-neutral-600">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-neutral-400" />
          Added{" "}
          <span className="font-mono text-neutral-900">
            {formatAddedAt(property.addedAt)}
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Plug className="w-3 h-3 text-neutral-400" />
          <span className="font-mono tabular-nums text-neutral-900">
            {active.length}
          </span>{" "}
          of {CONNECTIONS.length} connected
        </span>
      </div>
    </div>
  );
};
