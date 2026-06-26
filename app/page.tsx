import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { StackSection } from "@/components/StackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { getGithubPagesProjects } from "@/lib/github";
import { getVercelProjects } from "@/lib/vercel";
import { featuredProjects } from "@/lib/projects";
import type { PortfolioProject } from "@/lib/types";

const SITE_URL = "https://davidkilgallon.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "David Kilgallon",
      url: SITE_URL,
      jobTitle: "Creative Front-End Developer",
      description:
        "Creative front-end developer based in St Helens, Merseyside. Building clean, useful digital products with React, Next.js, TypeScript, and Tailwind CSS.",
      image: `${SITE_URL}/images/profile-pic.webp`,
      email: "ntice.digital@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/david-kilgallon/",
        "https://github.com/Dave-MK",
        "https://www.youtube.com/@ntice.digital",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "UI Design",
        "Web Accessibility",
        "Digital Media",
        "Motion Design",
        "Figma",
        "Responsive Web Design",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "St Helens",
        addressRegion: "Merseyside",
        addressCountry: "GB",
      },
      seeks: {
        "@type": "Demand",
        name: "Front-End Developer role",
        description: "Open to remote front-end developer roles, creative technology projects, and freelance web work in the UK.",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "David Kilgallon — Creative Front-End Developer",
      description:
        "Portfolio of David Kilgallon — creative front-end developer based in St Helens, UK. React, Next.js, TypeScript, UI design.",
      author: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-GB",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "David Kilgallon Portfolio",
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ],
};

export default async function HomePage() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <FeaturedProjects liveApps={liveApps} autoLiveApps={unFeaturedVercel} devApps={devApps} />
        <StackSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
