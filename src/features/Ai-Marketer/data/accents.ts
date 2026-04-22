export type AccentName = "blue" | "purple" | "amber" | "emerald" | "rose" | "cyan";

export type Accent = {
  text: string; // foreground — labels, metric values
  bg: string;   // solid fill — dots, small markers
  bar: string;  // bottom hover bars (slightly bolder than bg)
};

// Full Tailwind class strings kept literal so the JIT picks them up.
export const accents: Record<AccentName, Accent> = {
  blue:    { text: "text-blue-400",    bg: "bg-blue-400",    bar: "bg-blue-500" },
  purple:  { text: "text-purple-400",  bg: "bg-purple-400",  bar: "bg-purple-500" },
  amber:   { text: "text-amber-400",   bg: "bg-amber-400",   bar: "bg-amber-500" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-400", bar: "bg-emerald-500" },
  rose:    { text: "text-rose-400",    bg: "bg-rose-400",    bar: "bg-rose-500" },
  cyan:    { text: "text-cyan-400",    bg: "bg-cyan-400",    bar: "bg-cyan-500" },
};
