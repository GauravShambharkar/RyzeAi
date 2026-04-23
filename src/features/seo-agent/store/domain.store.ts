import { create } from "zustand";
import { persist } from "zustand/middleware";
import { availableDomains } from "@/features/seo-agent/data/domains";

type DomainState = {
  selected: string;
  setSelected: (d: string) => void;
};

export const domainStore = create<DomainState>()(
  persist(
    (set) => ({
      selected: availableDomains[0],
      setSelected: (d) => set({ selected: d }),
    }),
    { name: "seo-domain-v1" }
  )
);
