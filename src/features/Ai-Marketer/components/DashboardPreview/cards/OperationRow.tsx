import React from "react";
import { CheckCircle2 } from "lucide-react";
import { CARD } from "../tokens";

type Props = {
  label: string;
  platform: string;
  status: "active" | "pending" | "complete";
};

export const OperationRow = ({ label, platform, status }: Props) => {
  const dot =
    status === "active"
      ? "bg-emerald-500/100 animate-pulse"
      : status === "pending"
      ? "bg-amber-400"
      : "bg-neutral-600";

  return (
    <div className={`${CARD} p-3 flex items-center justify-between`}>
      <div className="flex items-center gap-3">
        <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span className="text-xs font-medium text-neutral-200">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-400 font-medium">
          {platform}
        </span>
        {status === "complete" && <CheckCircle2 size={14} className="text-emerald-500" />}
      </div>
    </div>
  );
};
