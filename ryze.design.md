# Ryze.ai — Design Reference

> Source-of-truth for visual language, component patterns, and UX intent.
> Use this when adding new sections or modifying existing ones. When in doubt, match what's here — consistency is the brand.

---

## 1. Design Philosophy

Ryze.ai is **premium dark-mode editorial × futuristic HUD**, anchored by nostalgic **pixel-art Arcadian scenery** for emotion. Every section is built to communicate, not decorate.

1. **Function before decoration** — if an asset doesn't communicate, it's noise.
2. **Hierarchy through contrast, size, and rhythm** — eyebrow → headline → sub → action → proof.
3. **Emerald accent, restrained** — color earns attention.
4. **Pixel art is the soul** — every visible pastoral scene is intentional and thematic.
5. **Italic serif on a single word per headline** — the editorial hit that signatures the brand.

---

## 2. Color Palette

### 2.1 Surfaces & text

| Role | Class | Notes |
|---|---|---|
| Page surface | `bg-black`, `bg-background`, `bg-[#06080c]`, `bg-[#0f1115]` | Darkest variant reserved for HUD sections (AuditCTA) |
| Card surface | `bg-neutral-950` (+`/85` alpha for glass) | Pair with `backdrop-blur-xl` when on image bg |
| Card hover | `bg-neutral-900` or `bg-neutral-900/60` | `transition-colors duration-300` |
| Card border | `border-neutral-800` → `border-neutral-700` on hover | Glass variant: `border-white/10` → `border-white/15` |
| Text primary | `text-white` | Headlines, stats, titles |
| Text body | `text-neutral-200` / `text-neutral-300` | Paragraphs in cards |
| Text muted | `text-neutral-400` | Section subtitles |
| Text subtle | `text-neutral-500` | Labels, timestamps, helpers |
| Text hint | `text-neutral-600` | Placeholders, deep microcopy |

### 2.2 Accents

| Role | Class | Purpose |
|---|---|---|
| **Primary accent** | **`emerald-500 / 400 / 300`** | Live dots, CTA glow, italic headline words, active states |
| Gold / review | `fill-amber-400 text-amber-400` | Star ratings only |
| Warning | `bg-amber-500/10 text-amber-300` | Medium severity, pending |
| Danger | `bg-rose-500/10 text-rose-300` or `rose-400` | High severity, destructive metrics |
| Info | `blue-500` or `indigo-500` | Rare; used for Hero's "SEO" word and dashboard sparkline |

---

## 3. Typography

```
font-display  → Instrument Serif (serif, italic axis is the editorial hit)
font-body     → Inter (400 / 500 / 600)
font-mono     → monospace (data / metrics / URLs / timestamps)
```

### Scale

| Role | Recipe |
|---|---|
| Label | `text-[10px] font-semibold uppercase tracking-[0.12em–0.22em] text-neutral-500` |
| Helper | `text-[11px] text-neutral-400` |
| Body sm | `text-xs text-neutral-300` |
| Body | `text-[15px]` / `text-base leading-relaxed` |
| Body lg (subtitles) | `text-base md:text-lg leading-relaxed max-w-xl` |
| Stat sm | `text-lg font-semibold tracking-tight` |
| Stat xl | `text-5xl md:text-7xl font-display tracking-tight` |
| Card title | `text-sm / base / md:text-lg font-display font-semibold` |
| h3 | `text-xl / 2xl / 3xl font-display` |
| h2 | `text-3xl md:text-5xl / md:text-6xl font-display leading-[1.05] tracking-tight` |
| Hero h1 | `text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-tighter` |
| BottomCTA h2 | `text-5xl md:text-7xl font-display leading-[1.02] tracking-tight` |

### The italic-one-word rule

Every section headline puts **exactly one word** in `<span className="italic">`. In futuristic/HUD contexts, tint it `text-emerald-300`.

Examples:
- "Loved by teams *that ship*"
- "Autonomous agents, *compounding results*"
- "Everything built for *performance*"
- "Built to *last* at enterprise scale"
- "Stop losing customers to your *competitors*"
- "Run my *free* audit"

---

## 4. Radius Language

| Use | Radius |
|---|---|
| Inline chip / small metric tag | `rounded-md` or none |
| Input field (soft ctx) | `rounded-xl` |
| Input field (HUD ctx) | **no radius** |
| Standard card | `rounded-2xl` |
| Large feature card | `rounded-3xl` |
| Mega card | `rounded-[2rem]` or `rounded-[3rem]` |
| Pills / badges / avatars | `rounded-full` (semantic — never sharpen) |
| HUD / conversion card | **no radius** + crosshair corner brackets |
| Editorial list (FAQ) | **no radius** + top/bottom divider borders |

**Sharp rule:** conversion terminals and editorial lists drop all radii. Bento / feature / standard cards keep soft radii. The brand uses both languages intentionally — pick based on section intent.

---

## 5. Shadows & Glows

| Purpose | Class |
|---|---|
| Soft card | `shadow-lg shadow-black/20` |
| Dramatic card | `shadow-2xl shadow-black/60` |
| Dashboard frame | `shadow-[0_25px_80px_-12px_rgba(0,0,0,0.5)]` |
| Image card | `shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]` |
| HUD card | `shadow-[0_50px_120px_-25px_rgba(0,0,0,0.9)]` |
| Button hover (emerald lift) | `hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.6)]` |
| Button hover (premium) | `hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.7),0_0_0_1px_rgba(16,185,129,0.4)]` |
| Progress bar glow | `shadow-[0_0_18px_rgba(16,185,129,0.65)]` |
| Outer emerald halo | `-inset-4 bg-emerald-500/15 blur-2xl` |

---

## 6. Spacing & Layout

| Dimension | Value |
|---|---|
| Page container | `max-w-7xl mx-auto px-6` |
| Narrow container | `max-w-3xl mx-auto px-6` (FAQ, long-form) |
| Medium container | `max-w-5xl mx-auto px-6` (BottomCTA) |
| Nav / Hero container | `max-w-[1400px]` |
| Section padding | `py-20 md:py-24` (light) · `py-24 md:py-28/32` (medium) · `py-32` (heavy) · `py-32 md:py-40` (climactic) |
| Header → content | `mb-16 md:mb-20` |
| Header stacked gap | `gap-5`, `mb-5/6/7` below headline |
| Grid gaps | `gap-4 md:gap-5` (bento) · `gap-6/8` (features) · `gap-14 lg:gap-20` (2-col) |

---

## 7. Motion

### Default scroll-in
```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.06–0.1, duration: 0.5–0.7 }}
/>
```

### Specific recipes

| Behavior | Recipe |
|---|---|
| List stagger | `delay: i * 0.06` |
| Grid stagger | `delay: i * 0.08–0.1` |
| Card scale-in | `initial={{ scale: 0.95–0.97 }}`, no x/y |
| Image hover zoom | `group-hover:scale-[1.03–1.05] transition-transform duration-[1200ms] ease-out` |
| Button lift | `hover:-translate-y-0.5 transition-all duration-300` |
| Pulse dot | `animate-pulse` |
| Live ping halo | Double-layer span (see §8.1) |
| Float idle | `@keyframes float { 50% { translateY(-20px) } }`, `6s ease-in-out infinite` |
| Marquee | `animate={{ x: ["0%", "-50%"] }}`, `ease: "linear"`, doubled content |

---

## 8. Signature Patterns

### 8.1 ⭐ Eyebrow Pill — the most important pattern

Every section header uses this. Always pair with a pulse dot.

**Standard (neutral):**
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
  Section label
</div>
```

**Emerald-tinted (high-energy / live):**
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
  <span className="relative flex w-1.5 h-1.5">
    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
  </span>
  Audit engine online
</div>
```

**Glass (on image backdrop):**
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold uppercase tracking-widest text-white">
  …
</div>
```

Labels on the site: `Wall of Love` · `Press & coverage` · `Growth engine` · `Full stack` · `Scale edition` · `FAQ` · `By the numbers` · `Free growth audit` · `Audit engine online`.

### 8.2 ⭐ Section Header Block

```tsx
<div className="text-center mb-16 md:mb-20">
  {/* Eyebrow */}
  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
    Label
  </motion.div>

  {/* Headline — one word italic */}
  <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className="text-4xl md:text-6xl font-display mb-5 text-white leading-[1.05]">
    Primary statement <span className="italic">punchline</span>
  </motion.h2>

  {/* Subtitle */}
  <p className="text-neutral-400 font-body max-w-xl mx-auto text-base md:text-lg leading-relaxed">
    One tight sentence of supporting proof — no filler.
  </p>
</div>
```

### 8.3 ⭐ Pixel-Art Backdrop (section-level)

```tsx
<section className="py-32 relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <Image src="/PixelArt/<name>.png" alt="" fill sizes="100vw" className="object-cover" />
    <div className="absolute inset-0 bg-black/55-to-80" />                                           {/* legibility wash */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />       {/* vignette */}
  </div>
  <div className="absolute … w-[500-700px] h-[500-700px] bg-emerald-500/10 rounded-full blur-[120-140px] pointer-events-none" />   {/* ambient glow */}

  <div className="max-w-7xl mx-auto px-6 relative z-10">…</div>
</section>
```

**Wash alpha tuning:**
- Full-cover + text on top → `bg-black/70–80`
- Full-cover + cards with `backdrop-blur-xl` → `bg-black/55–60`
- Hero style → `brightness-85` on image + soft top/bottom gradient fades

### 8.4 Crosshair HUD Corners

Pairs with sharp-edged cards and mono inputs.

```tsx
<span className="absolute top-3 left-3  w-4 h-4 border-t border-l border-emerald-400/60 pointer-events-none" />
<span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-emerald-400/60 pointer-events-none" />
<span className="absolute bottom-3 left-3  w-4 h-4 border-b border-l border-emerald-400/60 pointer-events-none" />
<span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-emerald-400/60 pointer-events-none" />
```

### 8.5 Grid Overlay (futuristic texture)

```tsx
<div
  className="absolute inset-0 opacity-[0.22] mix-blend-screen"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
  }}
/>
```

### 8.6 Live Counter (top-right of CTA cards)

```tsx
<span className="text-[11px] font-mono tabular-nums text-neutral-400">
  <span className="text-white font-semibold">247</span> audits running now
</span>
```

### 8.7 Conversion Proof Row

Delimited by `·` and `|` separators. Tabular numbers bold-white, labels muted.

```tsx
<div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/85 font-body">
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
    <span className="text-sm font-semibold">4.8/5</span>
    <span className="text-sm text-white/50">on Trustpilot</span>
  </div>
  <span className="hidden md:block w-px h-4 bg-white/20" />
  …
</div>
```

---

## 9. Button Language

### 9.1 Primary — white pill
```tsx
<button className="bg-white text-black rounded-full px-8 py-3.5 text-sm font-bold font-display uppercase tracking-[0.15em]
  hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 transition-all
  flex items-center gap-3 group">
  Run my free audit
  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
</button>
```

### 9.2 Secondary — glass pill
```tsx
<button className="bg-white/5 backdrop-blur-md border border-white/15 text-white/90 rounded-full px-6 py-3.5 text-sm font-semibold font-display uppercase tracking-[0.15em]
  hover:bg-white/10 transition-colors flex items-center gap-2">
  <Sparkles size={16} className="text-emerald-400" />
  See sample report
</button>
```

### 9.3 HUD submit — sharp + shine sweep
```tsx
<button className="relative w-full bg-gradient-to-b from-white to-neutral-200 text-black py-5 font-bold font-display uppercase tracking-[0.15em]
  flex items-center justify-center gap-3 overflow-hidden transition-all duration-300
  hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.7),0_0_0_1px_rgba(16,185,129,0.4)] group">
  <span className="relative z-10 flex items-center gap-3">
    Run my free audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </span>
  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out
    bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
</button>
```

### Icon / label rules
- Arrow always right, with `group-hover:translate-x-1 transition-transform`.
- Button label: uppercase `font-display`, `tracking-[0.15em]`.

---

## 10. Input Language

### 10.1 Standard dark (soft context)
```tsx
<input
  type="email"
  placeholder="name@company.com"
  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4
    focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/30
    transition-all font-body text-white placeholder:text-neutral-600"
/>
```

### 10.2 HUD / sharp
```tsx
<input
  type="email"
  placeholder="name@company.com"
  className="w-full bg-black/60 border border-white/10 px-5 py-4
    focus:outline-none focus:ring-1 focus:ring-emerald-500/60 focus:border-emerald-500/50
    transition-all font-body font-mono text-white placeholder:text-neutral-600"
/>
```

### Label + optional marker
```tsx
<label className="block text-[10px] font-bold mb-2 font-display uppercase tracking-[0.22em] text-neutral-500">
  Work email
</label>
```
```tsx
<span className="text-neutral-600 normal-case tracking-normal">(optional)</span>
```

---

## 11. Card Patterns

### Soft card
```tsx
<div className="p-6 md:p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:bg-neutral-900 transition-colors duration-300">
  …
</div>
```

### Glass card on image background (CRITICAL)
`backdrop-blur-xl` must be **always on**. Applying it only on hover creates an abrupt snap. The `/85` default alpha keeps the frost property live.
```tsx
<div className="p-6 md:p-7 bg-neutral-950/85 backdrop-blur-xl border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-colors duration-300">
  …
</div>
```

### HUD card (conversion)
- No radius.
- Crosshair corner brackets (§8.4).
- Outer emerald halo (§5).
- Sharp inputs + mono labels inside.

### Editorial list row (FAQ-style)
- No radius.
- Top/bottom divider borders (`border-t border-neutral-900`).
- Active state: emerald 2px left-accent bar + white title + emerald number prefix.

### Metric chip
```tsx
<span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest whitespace-nowrap">
  +63% Revenue
</span>
```

---

## 12. Pixel-Art System

All assets in `/public/PixelArt/`. Shared Arcadian-meadow visual language — cypresses, fluffy clouds, pastoral scenes, ancient ruins.

| Asset | Placement | Intent |
|---|---|---|
| `lambDancing.png` | Testimonials bg · BottomCTA bg | **Joy of shipping**, celebration |
| `lambGettingPet.png` | Features right-panel showcase | **Nurturing** — agents care for your growth |
| `pettingLamb.png` | Small floating sticker | Warmth, pastoral comfort |
| `brokenPillers.png` | Hero bg · AuditCTA bg | **Revealing cracks** in foundations |
| `Gemini_Generated_Image_o1xa64o1xa64o1xa.png` | FeatureStack Enterprise bg | **Monumentality** — enduring, enterprise-grade |
| `goat.png` | FAQ corner ornament | Pastoral calm = clear answers |

**Rules for new usage:**
1. Full-cover bg → always paired with `bg-black/55–80` wash + top/bottom vignette.
2. Floating sticker → `drop-shadow-2xl`, sometimes `rotate-[8deg]`.
3. Image card → aspect ratio (`aspect-[4/5]` or `aspect-[597/328]`), `object-cover`, rounded card + border + caption scrim (`bg-gradient-to-t from-black/85 via-black/20 to-transparent`).
4. Never below `opacity-40` — ghost watermarks fail the "communicates" test.

---

## 13. Section Visual Rules

Quick visual spec for each section. Use when matching style for a sibling.

### Hero
- Full viewport `h-screen`, `brokenPillers.png` backdrop at `brightness-85`.
- Top + bottom gradient fades for image emerge/dissolve.
- H1 uses italic + `mix-blend-screen` color hit (`text-blue-500`) — unique to Hero.
- Pill-style email input + "Get started" button, `rounded-full`, side-by-side on sm+.

### Navbar
- Fixed top, `z-50`, `max-w-[1400px]`.
- Glass pill shell: `border border-white/20 bg-white/10 backdrop-blur-md`.
- White CTA button on the right.

### DashboardPreview
- Simulated browser frame with cursor + scroll + notification animations.
- 24s orchestrated cycle using `cubic-bezier(0.45, 0, 0.25, 1)`.
- Treat as isolated artifact — do not casually edit timing.

### Testimonials
- Full-cover `lambDancing.png` with `bg-black/55` wash.
- Bento: 4-col grid, `auto-rows-[minmax(280px,1fr)]`; image cards span 2 cols.
- **Sharp cards** (no radius). TextCard uses always-on `backdrop-blur-xl`.

### Press & Coverage
- Marquee, 5 logos doubled. `duration: hovered ? 42 : 22` linear.
- Edge fades `w-24 md:w-40`, 3-stop gradient.
- Logos uniform white via `[filter:brightness(0)_invert(1)]` — do not use `invert brightness-200`, that leaves grey on greyscale SVGs.

### AuditCTA (conversion-critical)
- Ultra-dark `bg-[#06080c]` + `brokenPillers` bg + grid overlay + emerald ambient glow.
- **Left:** soft rounded sample-report preview (editorial window chrome, severity badges, progress bar).
- **Right:** sharp HUD terminal — crosshair corners, live status strip, mono inputs, shine-sweep button, trust row.

### Features
- Top: 3 feature cards, `rounded-3xl`, icon scale on hover.
- Bottom: mega card `rounded-[3rem]` + 2-col — left benefits, right pixel-art image showcase with caption scrim.

### FeatureStack
- 6 items grid, each with a colored icon chip (blue/purple/amber/emerald/rose/cyan).
- Enterprise block with statue pixel-art bg, emerald glow blob, two CTAs (solid + glass).

### FAQ (editorial list)
- `max-w-3xl` narrow reading width.
- Sharp items, top/bottom borders.
- **Numbered prefix** `01 / 02 / …` in uppercase tabular caps.
- Active state: 2px emerald left-accent + emerald number + white title.
- Plain `+` / `−` stroked icon (no bg). Answer indents to `pl-[4.5rem]`.

### FinalStats
- 3-col with vertical gradient dividers between columns (md+).
- Hero stat `text-5xl md:text-7xl font-display`.
- Gold star only beside the 4.8 rating.

### BottomCTA (conversion climax)
- Full-bleed `lambDancing.png` + `bg-black/70` + vignette + centered 700×700 emerald blur.
- `max-w-5xl`, `py-32 md:py-40`.
- Stack: eyebrow ping pill → italic h2 `text-5xl md:text-7xl` → sub → dual CTA → proof row → 4 trust markers.

---

## 14. Copy & Visual Hierarchy Rules

- **Em dash everywhere** — separates a claim from its qualifier.
- **Section labels:** 2–3 words, uppercase, tracked.
- **Headlines:** 6–9 words max. Exactly one italic word.
- **Subtitles:** one sentence, ≤ 20 words, often ends with a clause after an em dash.
- **Microcopy:** lowercase or sentence-case; mono when it's a system/data hint.
- **Numbers:** always `tabular-nums` + `font-mono` when displayed as data.
- **Trust markers:** emerald `CheckCircle2` + body-sized text; terse ("No credit card required", not "You don't need a credit card").

---

## 15. Design Checklist for New Sections

- [ ] Wrap in `<section>` with `relative overflow-hidden` + section padding (`py-24 md:py-32` default).
- [ ] Container: `max-w-7xl mx-auto px-6 relative z-10`.
- [ ] **Header block:** eyebrow pill → italic headline → subtitle, wrapped in `text-center mb-16 md:mb-20`.
- [ ] Eyebrow uses canonical recipe (§8.1).
- [ ] Headline has exactly **one italic word** (tint emerald in HUD contexts).
- [ ] Scroll-in motion on headline + eyebrow (§7).
- [ ] Grid items stagger with `delay: i * 0.06–0.1`.
- [ ] If pixel-art bg: wash `bg-black/55–80` + vignette gradient (§8.3).
- [ ] If card:
  - Soft → `rounded-2xl/3xl`, `bg-neutral-950`, `border-neutral-800`, `hover:bg-neutral-900`, 300ms transition.
  - Glass on image → `backdrop-blur-xl` **always on** + `/85` default alpha.
  - HUD → no radius, crosshair corners, emerald outer halo.
- [ ] If form:
  - Label: `text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500`.
  - Input: standard (§10.1) or HUD (§10.2), never mix.
  - Focus ring always emerald.
- [ ] Primary CTA uses §9.1 (white pill) or §9.3 (HUD shine).
- [ ] Add proof row below CTA — never ship a CTA without adjacent proof.
- [ ] Labels / button text: `uppercase tracking-[0.15–0.22em]`.

---

## 16. Quick Reference Snippets

### Section shell
```tsx
<section className="py-32 bg-black relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="text-center mb-16 md:mb-20">
      {/* Eyebrow / h2 / subtitle */}
    </div>
    {/* content */}
  </div>
</section>
```

### Live pulse dot (double layer)
```tsx
<span className="relative flex w-1.5 h-1.5">
  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
</span>
```

### White logo filter
```tsx
className="[filter:brightness(0)_invert(1)]"
```

### Staggered list motion
```tsx
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08, duration: 0.5 }}
  >
    …
  </motion.div>
))}
```

---

*When any rule above changes, update this file in the same change. It is the source of truth — drift destroys consistency.*
