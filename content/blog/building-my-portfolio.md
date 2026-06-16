---
title: "Building a Self-Updating Portfolio with Next.js and Vercel"
date: "2025-05-28"
description: "How I built a developer portfolio that auto-pulls live projects from Vercel and GitHub APIs — no manual updates required."
tags: ["Next.js", "React", "TypeScript", "Portfolio"]
---

## The Goal

Most portfolio sites are a manual chore — every time you ship a new project, you update a JSON file or hardcode a new card. I wanted mine to stay current automatically.

The solution: pull live data directly from Vercel and GitHub APIs at build time, using Next.js ISR to keep it fresh every hour without rebuilding.

## How It Works

### Vercel API

The site calls the Vercel API to fetch all production deployments, resolves the best domain for each (preferring custom domains over `.vercel.app` aliases), and enriches the data with GitHub repo metadata.

### GitHub Pages

For projects not yet on Vercel, the site queries the GitHub API for any repo with an active Pages deployment — so in-progress work has a home alongside the live apps.

Both data sources use Next.js `fetch` with `revalidate: 3600` so the data refreshes every hour without hammering the APIs on every request.

## The Tech Stack

- **Next.js App Router** — server components handle all the API calls; the client only receives rendered HTML
- **Tailwind CSS 4** — dark theme with cyan accent, built on the OKLCH colour space
- **Framer Motion** — spring animations on cards, AnimatePresence for the skills cycling component
- **Vercel Analytics + Speed Insights** — Core Web Vitals and page view tracking built in from day one

## SEO from Day One

Portfolio sites are often SEO afterthoughts. I built this one with indexing in mind from the start:

- Full OpenGraph and Twitter Card metadata for social previews
- JSON-LD structured data with `Person` and `WebSite` schemas for Google rich results
- Dynamic sitemap via Next.js App Router's built-in `sitemap.ts`
- Canonical URLs and Googlebot-specific max-snippet/image-preview directives
- Security headers configured in `next.config.ts`

## Performance

The hero background image and profile photo are served as `.webp`, and the profile image uses Next.js `priority` to preload as the Largest Contentful Paint element. Vercel Speed Insights monitors Core Web Vitals in production.

## What's Next

Case studies for the individual projects — breaking down the design decisions, technical challenges, and outcomes behind each one. That kind of long-form content is what actually drives organic traffic for developer portfolios.
