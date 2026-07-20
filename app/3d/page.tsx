import type { Metadata } from "next";
import { DisciplineNav } from "@/components/DisciplineNav";
import { DisciplineHero } from "@/components/DisciplineHero";
import { MediaGallery } from "@/components/MediaGallery";
import { Footer } from "@/components/Footer";
import { getDiscipline, threeDVideoItems, threeDImageItems } from "@/lib/disciplines";

const SITE_URL = "https://davidkilgallon.dev";
const discipline = getDiscipline("3d");

export const metadata: Metadata = {
  title: "3D Art & Motion",
  description:
    "3D portfolio of David Kilgallon — models, renders and animations, from product visuals to concept work.",
  alternates: { canonical: `${SITE_URL}/3d` },
};

export default function ThreeDPage() {
  return (
    <main>
      <DisciplineNav />
      <DisciplineHero discipline={discipline} />

      {/* Animations */}
      <section className="px-4 sm:px-6 py-12">
        <div className="mx-auto max-w-260">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-1.5">
              Motion
            </p>
            <h2 className="text-xl font-semibold text-[#D8E0EA]">Animations &amp; Renders</h2>
            <p className="mt-1.5 text-sm text-[#9BA7B7]">
              Animated pieces, motion loops and render reels.
            </p>
          </div>
          <MediaGallery
            items={threeDVideoItems}
            kind="video"
            accentFrom={discipline.accentFrom}
            accentTo={discipline.accentTo}
          />
        </div>
      </section>

      {/* Stills */}
      <section className="px-4 sm:px-6 py-12">
        <div className="mx-auto max-w-260">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-1.5">
              Stills
            </p>
            <h2 className="text-xl font-semibold text-[#D8E0EA]">Image Gallery</h2>
            <p className="mt-1.5 text-sm text-[#9BA7B7]">
              Rendered stills — modelling, texturing and lighting studies.
            </p>
          </div>
          <MediaGallery
            items={threeDImageItems}
            kind="model"
            accentFrom={discipline.accentFrom}
            accentTo={discipline.accentTo}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
