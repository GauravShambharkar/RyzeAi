import React from "react";
import { X } from "lucide-react";

type Props = { label: string; active: boolean; onClick: () => void };

export const BrowserTab = ({ label, active, onClick }: Props) => (
  <div
    onClick={onClick}
    className={`relative px-4 py-1.5 text-[11px] font-medium cursor-pointer transition-all flex items-center gap-2 group/tab ${
      active ? "bg-white text-neutral-900 rounded-t-lg border border-b-0 border-black/5" : "text-neutral-500 hover:text-neutral-900"
    }`}
  >
    {label}
    <X
      size={10}
      className={`transition-opacity ${
        active ? "opacity-100 text-neutral-400 hover:text-neutral-900" : "opacity-0 group-hover/tab:opacity-100"
      }`}
    />
  </div>
);
