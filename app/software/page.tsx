import type { Metadata } from "next";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { StackSection } from "@/components/StackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { DisciplineNav } from "@/components/DisciplineNav";
import { DisciplineHero } from "@/components/DisciplineHero";
import { getGithubPagesProjects } from "@/lib/github";
import { getVercelProjects } from "@/lib/vercel";
import { featuredProjects } from "@/lib/projects";
import { getDiscipline } from "@/lib/disciplines";
import type { PortfolioProject } from "@/lib/types";

const discipline = getDiscipline("software");

const SITE_URL = "https://davidkilgallon.dev";

export const metadata: Metadata = {
  title: "Software & Web Development",
  description:
    "Software portfolio of David Kilgallon — live products, tools and web apps built with React, Next.js, TypeScript and Tailwind CSS.",
  alternates: { canonical: `${SITE_URL}/software` },
};

export default async function SoftwarePage() {
  let liveApps: PortfolioProject[] = [];
  let githubApps: PortfolioProject[] = [];

  try {
    liveApps = await getVercelProjects();
  } catch (error) {
    console.error(error);
  }

  try {
    githubApps = await getGithubPagesProjects();
  } catch (error) {
    console.error(error);
  }

  // Normalise a URL for dedup comparison (strip trailing slash, lowercase)
  const normalise = (url: string) => url.replace(/\/$/, "").toLowerCase();

  // URLs already shown as featured cards — exclude from archive
  const featuredUrls = new Set(featuredProjects.map((p) => normalise(p.liveUrl)));

  // Vercel projects not already featured → show in archive
  const unFeaturedVercel = liveApps.filter(
    (app) => app.homepageUrl && !featuredUrls.has(normalise(app.homepageUrl))
  );

  // GitHub repos with homepage set, deduped against Vercel archive entries
  const vercelUrls = new Set(unFeaturedVercel.map((a) => normalise(a.homepageUrl ?? "")));
  const uniqueGithub = githubApps.filter(
    (app) =>
      app.homepageUrl &&
      !featuredUrls.has(normalise(app.homepageUrl)) &&
      !vercelUrls.has(normalise(app.homepageUrl))
  );

  const devApps = [...uniqueGithub];

  return (
    <main>
      <DisciplineNav />
      <DisciplineHero discipline={discipline} />
      <FeaturedProjects liveApps={liveApps} autoLiveApps={unFeaturedVercel} devApps={devApps} />
      <StackSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
