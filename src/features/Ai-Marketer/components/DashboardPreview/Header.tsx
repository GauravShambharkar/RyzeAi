import React from "react";

type Props = { title: string; subtitle: string };

export const Header = ({ title, subtitle }: Props) => (
  <div>
    <h2 className="text-sm font-semibold text-neutral-900">{title}</h2>
    <p className="text-[11px] text-neutral-500 mt-0.5">{subtitle}</p>
  </div>
);
