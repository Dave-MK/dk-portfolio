import type { Metadata } from "next";
import { DisciplineNav } from "@/components/DisciplineNav";
import { DisciplineHero } from "@/components/DisciplineHero";
import { MediaGallery } from "@/components/MediaGallery";
import { Footer } from "@/components/Footer";
import { getDiscipline, photographyItems } from "@/lib/disciplines";

const SITE_URL = "https://davidkilgallon.dev";
const discipline = getDiscipline("photography");

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Photography portfolio of David Kilgallon — portraits, landscapes, street, architecture and detail studies.",
  alternates: { canonical: `${SITE_URL}/photography` },
};

export default function PhotographyPage() {
  return (
    <main>
      <DisciplineNav />
      <DisciplineHero discipline={discipline} />

      <section className="px-4 sm:px-6 py-12">
        <div className="mx-auto max-w-260">
          <MediaGallery
            items={photographyItems}
            kind="photo"
            accentFrom={discipline.accentFrom}
            accentTo={discipline.accentTo}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
