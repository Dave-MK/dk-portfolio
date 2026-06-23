import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { StackSection } from "@/components/StackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { getGithubPagesProjects } from "@/lib/github";
import { getVercelProjects } from "@/lib/vercel";
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
  let devApps: PortfolioProject[] = [];

  try {
    liveApps = await getVercelProjects();
  } catch (error) {
    console.error(error);
  }

  try {
    devApps = await getGithubPagesProjects();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <FeaturedProjects liveApps={liveApps} devApps={devApps} />
        <StackSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
