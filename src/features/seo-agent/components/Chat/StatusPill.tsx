import React from "react";
import { Check, AlertTriangle, X } from "lucide-react";

export type StatusKind = "ok" | "fix" | "warn";

type Props = { kind: StatusKind };

const CONFIG: Record<
  StatusKind,
  { label: string; Icon: typeof Check; classes: string }
> = {
  ok: {
    label: "All good",
    Icon: Check,
    classes: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
  },
  fix: {
    label: "Needs fix",
    Icon: X,
    classes: "bg-rose-500/10 text-rose-700 border-rose-500/25",
  },
  warn: {
    label: "Heads up",
    Icon: AlertTriangle,
    classes: "bg-amber-500/10 text-amber-700 border-amber-500/30",
  },
};

export const StatusPill = ({ kind }: Props) => {
  const { label, Icon, classes } = CONFIG[kind];
  return (
    <span
      className={`inline-flex items-center gap-1 align-baseline rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide mr-1.5 ${classes}`}
    >
      <Icon className="w-2.5 h-2.5" strokeWidth={2.5} />
      {label}
    </span>
  );
};
