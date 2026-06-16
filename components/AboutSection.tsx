import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeUp } from "@/components/FadeUp";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile image */}
          <FadeUp className="relative order-2 lg:order-1">
            {/* Dotted grid decoration */}
            <div
              className="pointer-events-none absolute -left-6 -top-6 h-48 w-48 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #38BDF8 1.5px, transparent 1.5px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden
            />
            {/* Glow behind image */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/10 via-violet-500/8 to-transparent blur-2xl" aria-hidden />
            {/* Gradient border wrapper */}
            <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-sky-400/40 via-violet-400/20 to-transparent">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/profile-pic.webp"
                  alt="David Kilgallon"
                  width={600}
                  height={700}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.1} className="order-1 lg:order-2">
            <div className="mb-8">
              <SectionHeading
                label="About"
                heading="I'm David, a creative front-end developer."
              />
            </div>
            <div className="space-y-4 text-[#9BA7B7] text-sm sm:text-base leading-relaxed">
              <p>
                Based in St Helens, Merseyside. My background is in digital media, design,
                video, and visual storytelling.
              </p>
              <p>
                I&apos;m now focused on building web apps that combine clean code, strong UI,
                and practical real-world ideas.
              </p>
              <p>
                I&apos;m especially interested in projects that make information clearer,
                workflows easier, or digital tools more accessible.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a
                href="https://www.linkedin.com/in/david-kilgallon/"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with David Kilgallon on LinkedIn"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[#F4F7FB] transition-all hover:bg-white/10"
              >
                Connect on LinkedIn →
              </a>
              <Link
                href="/cv"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-[#9BA7B7] transition-all hover:text-[#F4F7FB] hover:border-white/20"
              >
                View CV
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
