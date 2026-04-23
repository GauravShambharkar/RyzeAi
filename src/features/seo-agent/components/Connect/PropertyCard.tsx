"use client";

import React from "react";
import { Globe, Trash2, Check, Plug } from "lucide-react";
import { toast } from "sonner";
import {
  domainStore,
  CONNECTIONS,
  type Property,
  type ConnectionId,
} from "@/features/seo-agent/store/domain.store";

type Props = {
  property: Property;
  isActive: boolean;
};

export const PropertyCard = ({ property, isActive }: Props) => {
  const selectProperty = domainStore((s) => s.selectProperty);
  const removeProperty = domainStore((s) => s.removeProperty);
  const toggleConnection = domainStore((s) => s.toggleConnection);

  const connectedCount = CONNECTIONS.filter(
    (c) => property.connections[c.id]
  ).length;

  const onToggle = (connection: ConnectionId) => {
    const willEnable = !property.connections[connection];
    toggleConnection(property.id, connection);
    toast.success(
      willEnable
        ? `Connected ${CONNECTIONS.find((c) => c.id === connection)?.short}`
        : `Disconnected ${CONNECTIONS.find((c) => c.id === connection)?.short}`
    );
  };

  const onDelete = () => {
    removeProperty(property.id);
    toast.success("Property removed");
  };

  return (
    <div
      className={`rounded-3xl border p-5 md:p-6 transition-all ${
        isActive
          ? "border-emerald-500/30 bg-white shadow-[0_16px_50px_-20px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/10"
          : "border-black/5 bg-white/70 hover:bg-white hover:shadow-[0_12px_40px_-20px_rgba(20,20,20,0.1)]"
      }`}
    >
      {/* Top row: domain, label, active pill, delete */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-mono text-sm md:text-base text-neutral-900 truncate">
              {property.domain}
            </span>
            {isActive && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                <Check className="w-2.5 h-2.5" strokeWidth={3} />
                Active
              </span>
            )}
          </div>
          {property.label && (
            <div className="mt-1 text-xs text-neutral-500 truncate">
              {property.label}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {!isActive && (
            <button
              type="button"
              onClick={() => {
                selectProperty(property.id);
                toast.success("Active property changed", {
                  description: property.domain,
                });
              }}
              className="text-xs font-medium rounded-full px-3 py-1.5 text-neutral-700 hover:text-emerald-700 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all"
            >
              Set active
            </button>
          )}
          <button
            type="button"
            onClick={onDelete}
            aria-label="Remove property"
            className="p-2 rounded-full text-neutral-400 hover:text-rose-600 hover:bg-rose-500/10 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Connections */}
      <div className="mt-5 pt-4 border-t border-black/5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
            <Plug className="w-3 h-3" />
            Integrations
          </div>
          <div className="text-[10px] text-neutral-500 font-mono tabular-nums">
            {connectedCount} / {CONNECTIONS.length}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {CONNECTIONS.map((c) => {
            const connected = Boolean(property.connections[c.id]);
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => onToggle(c.id)}
                className={`group flex items-center justify-between rounded-2xl border px-3 py-2.5 text-left transition-all ${
                  connected
                    ? "border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500/10"
                    : "border-black/5 bg-white hover:border-emerald-500/20"
                }`}
              >
                <div className="min-w-0">
                  <div className="text-xs md:text-sm font-medium text-neutral-900 truncate">
                    {c.label}
                  </div>
                  <div
                    className={`text-[10px] mt-0.5 font-medium uppercase tracking-wide ${
                      connected ? "text-emerald-700" : "text-neutral-400"
                    }`}
                  >
                    {connected ? "Connected" : "Not connected"}
                  </div>
                </div>
                <div
                  className={`h-5 w-9 rounded-full relative transition-colors shrink-0 ml-3 ${
                    connected ? "bg-emerald-500" : "bg-neutral-200"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                      connected ? "left-[calc(100%-18px)]" : "left-0.5"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
