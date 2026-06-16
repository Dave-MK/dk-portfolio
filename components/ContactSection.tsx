import { ContactForm } from "@/components/ContactForm";
import { FadeUp } from "@/components/FadeUp";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 sm:px-12 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-sky-500/10 blur-[80px]" />
          </div>

          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F7FB] mb-4">
              Let&apos;s build something useful.
            </h2>
            <p className="max-w-md mx-auto text-[#9BA7B7] text-sm sm:text-base leading-relaxed mb-10">
              Open to remote front-end roles, creative technology projects, freelance web work,
              and collaboration on digital products.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="https://github.com/Dave-MK"
                target="_blank"
                rel="noreferrer"
                aria-label="David Kilgallon on GitHub"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-medium text-[#9BA7B7] transition-all hover:text-[#F4F7FB] hover:bg-white/[0.06]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/david-kilgallon/"
                target="_blank"
                rel="noreferrer"
                aria-label="David Kilgallon on LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-medium text-[#9BA7B7] transition-all hover:text-[#F4F7FB] hover:bg-white/[0.06]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ntice.digital@gmail.com?subject=Enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-medium text-[#9BA7B7] transition-all hover:text-[#F4F7FB] hover:bg-white/[0.06]"
              >
                ntice.digital@gmail.com
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
