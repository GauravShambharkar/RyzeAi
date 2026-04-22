export type AccentName = "blue" | "purple" | "amber" | "emerald" | "rose" | "cyan";

export type Accent = {
  text: string; // foreground — labels, metric values
  bg: string;   // solid fill — dots, small markers
  bar: string;  // bottom hover bars (slightly bolder than bg)
};

// Full Tailwind class strings kept literal so the JIT picks them up.
export const accents: Record<AccentName, Accent> = {
  blue:    { text: "text-blue-600",    bg: "bg-blue-500",    bar: "bg-blue-600" },
  purple:  { text: "text-purple-600",  bg: "bg-purple-500",  bar: "bg-purple-600" },
  amber:   { text: "text-amber-600",   bg: "bg-amber-500",   bar: "bg-amber-600" },
  emerald: { text: "text-emerald-700", bg: "bg-emerald-500", bar: "bg-emerald-600" },
  rose:    { text: "text-rose-600",    bg: "bg-rose-500",    bar: "bg-rose-600" },
  cyan:    { text: "text-cyan-600",    bg: "bg-cyan-500",    bar: "bg-cyan-600" },
};
