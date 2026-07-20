import type { Metadata } from "next";
import { DisciplineNav } from "@/components/DisciplineNav";
import { DisciplineHero } from "@/components/DisciplineHero";
import { MediaGallery } from "@/components/MediaGallery";
import { Footer } from "@/components/Footer";
import { getDiscipline, videographyItems } from "@/lib/disciplines";

const SITE_URL = "https://davidkilgallon.dev";
const discipline = getDiscipline("videography");

export const metadata: Metadata = {
  title: "Videography & Editing",
  description:
    "Videography portfolio of David Kilgallon — brand films, event coverage, promos and social content.",
  alternates: { canonical: `${SITE_URL}/videography` },
};

export default function VideographyPage() {
  return (
    <main>
      <DisciplineNav />
      <DisciplineHero discipline={discipline} />

      <section className="px-4 sm:px-6 py-12">
        <div className="mx-auto max-w-260">
          <MediaGallery
            items={videographyItems}
            kind="video"
            accentFrom={discipline.accentFrom}
            accentTo={discipline.accentTo}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
