# David Kilgallon Portfolio

Personal portfolio site built with Next.js. The homepage introduces David Kilgallon, highlights creative and technical skills, and separates showcased work into live deployed apps and GitHub Pages projects still in development.

## Features

- Full-screen hero section with profile image, animated skills carousel, and social/contact links
- Sticky header with centered pill navigation for `Live`, `Development`, and `Contact`
- `Live Apps` section powered by Vercel project data, with a fallback list for known deployed apps
- `Apps in Development` section sourced from GitHub repositories that have GitHub Pages enabled
- Responsive project cards with live-site links, GitHub links, stars, and deployment metadata where available
- Vercel Analytics and Speed Insights enabled in the root layout

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `motion` for card interactions
- shadcn/ui primitives for cards, buttons, and badges

## Project Data Flow

The homepage is assembled server-side in `app/page.tsx` from two data sources:

1. `lib/vercel.ts` builds the `Live Apps` section.
2. `lib/github.ts` builds the `Apps in Development` section.

### Live Apps

The Vercel flow:

1. If `VERCEL_TOKEN` is present, request projects from the Vercel REST API.
2. Read each project’s latest production deployment and choose the best public domain.
3. Enrich the result with GitHub repository metadata when a linked repo is available.
4. Merge API results with a small fallback list so known live apps still render without a Vercel token.

### Apps in Development

The GitHub Pages flow:

1. Read `GITHUB_USERNAME` from the environment.
2. Request up to 100 repositories from `https://api.github.com/users/<username>/repos`.
3. Filter out forked and archived repositories.
4. Check each remaining repository for a GitHub Pages deployment.
5. Render only repositories that return a valid Pages URL.

GitHub and Vercel responses are revalidated every hour.

## Environment Variables

Create a `.env.local` file in the project root.

```env
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-token
VERCEL_TOKEN=your-vercel-token
VERCEL_TEAM_ID=
VERCEL_TEAM_SLUG=david-mk
```

- `GITHUB_USERNAME` is required for the `Apps in Development` section.
- `GITHUB_TOKEN` is optional but recommended to reduce GitHub API rate limiting.
- `VERCEL_TOKEN` is optional. If omitted, the `Live Apps` section falls back to the checked-in live app list in `lib/vercel.ts`.
- `VERCEL_TEAM_ID` is optional.
- `VERCEL_TEAM_SLUG` defaults to `david-mk`.

An example file is included at `.env.example`.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` starts the Next.js dev server with Turbopack
- `npm run build` creates a production build with Turbopack
- `npm run start` serves the production build
- `npm run lint` runs ESLint

## Project Structure

```text
app/
  layout.tsx        Root layout, metadata, background, analytics
  page.tsx          Homepage and server-side section assembly
components/
  SiteHeader.tsx    Sticky header and scroll-aware navigation
  ProjectCard.tsx   Individual project card UI
  ProjectsGrid.tsx  Project grid and empty state
  CyclingSkills.tsx Animated skills text
lib/
  github.ts         GitHub Pages project discovery
  vercel.ts         Vercel live app discovery and fallback handling
  types.ts          Shared project types
  utils.ts          Shared class name utility
public/images/      Portfolio imagery and social icons
```

## Deployment Notes

This site is designed for Vercel deployment.

- For fully automatic `Live Apps` discovery in production, add `VERCEL_TOKEN` to the Vercel project environment.
- Without `VERCEL_TOKEN`, the live apps section still renders the fallback entries defined in `lib/vercel.ts`.
- For the GitHub Pages section, make sure production includes the same `GITHUB_*` variables used locally.
