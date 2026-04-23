import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ConnectionId = "gsc" | "ga4" | "ahrefs" | "semrush";

export const CONNECTIONS: {
  id: ConnectionId;
  label: string;
  short: string;
}[] = [
  { id: "gsc", label: "Google Search Console", short: "GSC" },
  { id: "ga4", label: "Google Analytics 4", short: "GA4" },
  { id: "ahrefs", label: "Ahrefs", short: "Ahrefs" },
  { id: "semrush", label: "SEMrush", short: "SEMrush" },
];

export type Property = {
  id: string;
  domain: string;
  label?: string;
  connections: Partial<Record<ConnectionId, boolean>>;
  addedAt: number;
};

type DomainState = {
  properties: Property[];
  selectedId: string | null;

  addProperty: (domain: string, label?: string) => string | null;
  removeProperty: (id: string) => void;
  selectProperty: (id: string) => void;
  renameProperty: (id: string, label: string) => void;
  toggleConnection: (id: string, connection: ConnectionId) => void;
};

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

// Strip protocol / path / trailing slashes so "https://get-ryze.ai/blog" → "get-ryze.ai".
const normalizeDomain = (raw: string): string =>
  raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .replace(/\/+$/, "");

const isValidDomain = (d: string) =>
  /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)+$/i.test(d);

const seedProperty = (): Property => ({
  id: uid(),
  domain: "get-ryze.ai",
  label: "Main site",
  connections: {},
  addedAt: Date.now(),
});

export const domainStore = create<DomainState>()(
  persist(
    (set, get) => {
      const seed = seedProperty();
      return {
        properties: [seed],
        selectedId: seed.id,

        addProperty: (rawDomain, label) => {
          const domain = normalizeDomain(rawDomain);
          if (!domain || !isValidDomain(domain)) return null;
          if (get().properties.some((p) => p.domain === domain)) {
            // Already added — select it instead of duplicating.
            const existing = get().properties.find((p) => p.domain === domain)!;
            set({ selectedId: existing.id });
            return existing.id;
          }
          const property: Property = {
            id: uid(),
            domain,
            label: label?.trim() || undefined,
            connections: {},
            addedAt: Date.now(),
          };
          set((s) => ({
            properties: [...s.properties, property],
            selectedId: property.id,
          }));
          return property.id;
        },

        removeProperty: (id) =>
          set((s) => {
            const remaining = s.properties.filter((p) => p.id !== id);
            const nextSelected =
              s.selectedId === id ? (remaining[0]?.id ?? null) : s.selectedId;
            return { properties: remaining, selectedId: nextSelected };
          }),

        selectProperty: (id) => {
          if (!get().properties.some((p) => p.id === id)) return;
          set({ selectedId: id });
        },

        renameProperty: (id, label) =>
          set((s) => ({
            properties: s.properties.map((p) =>
              p.id === id ? { ...p, label: label.trim() || undefined } : p
            ),
          })),

        toggleConnection: (id, connection) =>
          set((s) => ({
            properties: s.properties.map((p) =>
              p.id === id
                ? {
                    ...p,
                    connections: {
                      ...p.connections,
                      [connection]: !p.connections[connection],
                    },
                  }
                : p
            ),
          })),
      };
    },
    { name: "seo-domain-v2" }
  )
);

// Convenience selector — the currently active property, or null if none.
export const useActiveProperty = () =>
  domainStore((s) => s.properties.find((p) => p.id === s.selectedId) ?? null);
