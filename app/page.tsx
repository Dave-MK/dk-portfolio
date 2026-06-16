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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://davidkilgallon.dev/#person",
      name: "David Kilgallon",
      url: "https://davidkilgallon.dev",
      jobTitle: "Creative Front-End Developer",
      description:
        "Creative front-end developer building clean, useful digital products. Web development, UI design, digital media, and practical problem-solving.",
      image: "https://davidkilgallon.dev/images/profile-pic.webp",
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
        "Digital Media",
        "Motion Design",
        "Figma",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "St Helens",
        addressRegion: "Merseyside",
        addressCountry: "GB",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://davidkilgallon.dev/#website",
      url: "https://davidkilgallon.dev",
      name: "David Kilgallon Portfolio",
      description: "Creative front-end developer portfolio.",
      author: { "@id": "https://davidkilgallon.dev/#person" },
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
