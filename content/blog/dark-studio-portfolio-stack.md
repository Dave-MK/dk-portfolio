---
title: "How I built a dark-studio portfolio with Next.js 16 and Tailwind CSS 4"
description: "A technical walkthrough of the design decisions, component architecture, dynamic data layer, and SEO setup behind this portfolio — from design tokens to print-optimised PDF."
date: "2026-06-10"
tags: ["Next.js", "Tailwind CSS", "Design", "Portfolio"]
---

When I decided to rebuild my portfolio from scratch, I had one non-negotiable constraint: it had to look like something I'd actually want to ship, not just a quick CV page with a few project cards.

This is a walkthrough of every meaningful decision I made — the design system, the data layer, the animations, and a few things that didn't work the way I expected.

## The design system

The brief I gave myself was "dark studio" — premium, confident, and purposeful. Not gamer-dark with neon everywhere, but the kind of dark aesthetic you'd see on a high-end agency or SaaS product.

The foundation is a three-token colour system:

- **Background:** `#080A0F` — almost black, with a faint blue-black cast
- **Accent blue:** `#38BDF8` (sky-400) — used for interactive elements, labels, and highlights
- **Accent violet:** `#A78BFA` (violet-400) — used for gradients and secondary accents

Glass panels sit on top using `bg-white/[0.03]` with `border border-white/[0.06]` — just enough contrast to read as a surface without looking pasted on.

The ambient background uses three fixed `blur-[120px]` radial glows (sky, violet, emerald) at low opacity. They're `pointer-events-none`, `fixed`, and `-z-10`, so they follow the user as they scroll without affecting layout.

## Typography

Two fonts from Google Fonts via `next/font/google`:

- **Space Grotesk** for headings — geometric, modern, distinctive
- **Inter** for body copy — the most readable screen font available

Both are loaded with CSS variables (`--font-heading`, `--font-primary`) and applied in globals.css so they cascade correctly through Tailwind's `font-sans` utility.

## Tailwind CSS 4

Moving from Tailwind v3 to v4 required a few adjustments. The main change is that v4 uses CSS-native `@theme` blocks instead of a JavaScript config file, and arbitrary values are interpreted differently in some contexts.

The design tokens live in `:root` as hex values, mapped through an `@theme inline` block:

```css
:root {
  --primary: #38BDF8;
}

@theme inline {
  --color-primary: var(--primary);
}
```

This means I can use `text-primary`, `bg-primary/10`, etc. throughout — Tailwind picks them up correctly in v4.

## Dynamic project data

I wanted the portfolio to stay accurate without manual updates every time a project ships or changes. The solution is a hybrid data layer:

1. **Featured projects** are defined statically in `lib/projects.ts` — because I control the copy, descriptions, and tech stacks manually
2. **Live URLs** are enriched at request time by fetching from the Vercel API and matching project names
3. **Archive projects** are pulled from the GitHub API (repos with GitHub Pages enabled)

If either API call fails or the environment variables aren't set, the page falls back gracefully to static data. The whole data fetch is wrapped in `try/catch` and the page still renders correctly with zero live data.

## Scroll animations with Motion

The `motion` package (Framer Motion v12, now published as `motion`) powers all the scroll-triggered animations. The approach is deliberately restrained:

- All section headings use a simple `FadeUp` client component wrapper
- Project grids stagger in with 90ms between cards
- The hero entrance animates left and right columns independently with a 150ms offset

```tsx
export function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
```

The `ease` curve `[0.21, 0.47, 0.32, 0.98]` is a custom cubic bezier that feels snappier than `ease-out` without the harsh start of `ease-in-out`. Worth keeping in a design token somewhere.

## SEO setup

Four files handle the entire SEO setup automatically:

- **`app/robots.ts`** — allows all crawlers and points to the sitemap
- **`app/sitemap.ts`** — generates URLs for home, blog posts, CV, and work pages
- **`app/manifest.ts`** — PWA manifest for mobile install support
- **JSON-LD** in `app/page.tsx` — `Person` and `WebSite` schemas for Google rich results

The JSON-LD includes `sameAs` links to GitHub, LinkedIn, and YouTube, which helps Google connect the portfolio to my professional profiles.

## The CV page — visual + print-ready

This was the most interesting problem to solve. I needed a single page that looks great on screen (dark studio aesthetic) but prints as a clean, ATS-friendly black-on-white PDF.

The solution is entirely CSS-based — no PDF generation library, no Puppeteer, no backend. A `@media print` block in globals.css does the heavy lifting:

- Resets `body` background to white, text to `#111111`, font to Arial
- Hides the site header, footer, and download button
- Converts the glass cards to `border: 1pt solid #d1d5db`
- Converts the two-column layout to single column with `display: block`
- Skill pills become minimal bordered chips

The "Download PDF" button calls `window.print()`. The browser's print-to-PDF dialogue produces a clean, selectable-text PDF that ATS systems can parse correctly.

The key insight: ATS parsers care about the underlying HTML structure, not the visual styling. Since the page uses semantic elements (`<section>`, `<h2>/<h3>`, `<ul>/<li>`) throughout, the ATS reads it correctly regardless of the dark glassmorphism styling on screen.

## What's next

- Project detail / case study pages for each featured project
- A contact form backed by Resend (instead of a plain `mailto:` link)
- More blog posts — writing about building things is its own kind of portfolio

The source for this site is on [GitHub](https://github.com/Dave-MK/dk-portfolio) if you want to look at the implementation in detail.
