import React from "react";

type Props = { title: string; subtitle: string };

export const Header = ({ title, subtitle }: Props) => (
  <div>
    <h2 className="text-sm font-semibold text-white">{title}</h2>
    <p className="text-[11px] text-neutral-400 mt-0.5">{subtitle}</p>
  </div>
);
