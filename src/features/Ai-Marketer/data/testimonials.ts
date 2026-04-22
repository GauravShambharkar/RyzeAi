export type Testimonial = {
  kind: "text" | "image";
  text: string;
  author: string;
  title: string;
  metric?: string;
  image?: string;
  span?: string; // grid-span utility classes applied at md/lg
};

/* Bento layout (4-col grid, 3 rows):
   [T] [T] [IMG 2col]
   [IMG 2col] [T] [T]
   [T] [IMG 2col] [T]
*/
export const testimonials: Testimonial[] = [
  {
    kind: "text",
    text: "These AI-driven ads outperform human optimization by a huge margin. +63% revenue in 90 days.",
    author: "Alex Rivers",
    title: "Growth Lead @ Spectrum",
    metric: "+63% Revenue",
  },
  {
    kind: "text",
    text: "Ryze is remarkably speedy. The autonomous SEO agent started ranking our keywords faster than any agency we've ever worked with.",
    author: "Sarah Chen",
    title: "Product Manager @ Openpay",
    metric: "#1 Ranking",
  },
  {
    kind: "image",
    text: "Standing on stage at SaaStr telling the story of how Ryze took our CAC from $180 to $62 in a single quarter.",
    author: "Marcus Vogel",
    title: "Founder @ Calyx",
    image: "/WallOfLove/StagedSpeech.avif",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    kind: "image",
    text: "Our whole growth team moved to Ryze last April. One tool replaced three. Nothing we've ever shipped has made this much of a dent.",
    author: "Jessica Lam",
    title: "Head of Marketing @ FinTech",
    image: "/WallOfLove/GrpImage.avif",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    kind: "text",
    text: "The transparency sold us. Every bid adjustment, every reasoning — it's all there. Total trust.",
    author: "David Knight",
    title: "CMO @ RetailFlow",
    metric: "-40% CPA",
  },
  {
    kind: "text",
    text: "Replaced three different apps with Ryze. It runs our entire front-of-funnel on autopilot.",
    author: "Elena Rossi",
    title: "E-commerce Director",
    metric: "3.5x ROI",
  },
  {
    kind: "text",
    text: "The website builder shipped a high-converting landing page in minutes. Watching it optimize in real-time feels like magic.",
    author: "Priya Patel",
    title: "VP Growth @ Lumen",
    metric: "4.8/5 Trustpilot",
  },
  {
    kind: "image",
    text: "The only tool that actually delivers on the 'AI Agent' promise. It doesn't just suggest — it executes.",
    author: "James Ortiz",
    title: "Founder @ Northline",
    image: "/WallOfLove/slfee.avif",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    kind: "text",
    text: "We finally have a marketing team that works while we sleep. 24/7 optimization with zero meetings.",
    author: "Nora Ahmed",
    title: "COO @ Kinly",
    metric: "2.1x Pipeline",
  },
];
