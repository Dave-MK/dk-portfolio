import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";
import { disciplines } from "@/lib/disciplines";
import { disciplineIcons } from "@/components/disciplineIcons";

const SITE_URL = "https://davidkilgallon.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "David Kilgallon",
      url: SITE_URL,
      jobTitle: "Creative Developer & Digital Media Creator",
      description:
        "Creative developer and digital media creator based in St Helens, Merseyside. Working across software, videography, 3D art and photography.",
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
        "Videography",
        "Video Editing",
        "3D Art",
        "3D Animation",
        "Photography",
        "Motion Design",
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
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "David Kilgallon — Creative Developer & Digital Media",
      description:
        "Portfolio of David Kilgallon — software, videography, 3D art and photography.",
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

export default function HubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-12 px-4 sm:px-6">
          <div className="mx-auto w-full max-w-260">
            <FadeUp className="flex flex-col gap-6 text-center items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-1.5 text-xs font-medium text-sky-400 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                Open to opportunities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[#F4F7FB]">
                David Kilgallon
              </h1>

              <p className="text-lg sm:text-xl text-[#D8E0EA] font-medium">
                Developer{" "}
                <span className="text-sky-400/50">·</span> Videographer{" "}
                <span className="text-sky-400/50">·</span> 3D Artist{" "}
                <span className="text-sky-400/50">·</span> Photographer
              </p>

              <p className="text-[#9BA7B7] text-base sm:text-lg leading-relaxed max-w-2xl">
                A multi-disciplinary creative based in St Helens, UK. I build
                digital products and craft visual media — spanning software, film,
                3D art and photography. Pick an area below to explore the work.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Discipline cards */}
        <section className="px-4 sm:px-6 pb-24">
          <div className="mx-auto max-w-260 grid gap-5 sm:grid-cols-2">
            {disciplines.map((d, i) => {
              const Icon = disciplineIcons[d.slug];
              return (
                <FadeUp key={d.slug} delay={i * 0.08}>
                  <Link
                    href={d.href}
                    className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    {/* Accent bar */}
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${d.accentFrom} ${d.accentTo} opacity-70`}
                    />
                    {/* Hover glow */}
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br ${d.accentFrom} ${d.accentTo} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                      aria-hidden
                    />

                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex size-12 items-center justify-center rounded-2xl bg-linear-to-br ${d.accentFrom} ${d.accentTo} text-white shadow-lg`}
                      >
                        <Icon className="size-5.5" />
                      </span>
                      <ArrowUpRight className="size-5 text-[#7B8CA0] transition-all duration-300 group-hover:text-[#F4F7FB] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-[#F4F7FB]">{d.label}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-[#9BA7B7]">{d.blurb}</p>
                    </div>

                    <span className={`mt-auto text-sm font-medium ${d.accentText}`}>
                      Explore {d.label} →
                    </span>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </section>

        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
