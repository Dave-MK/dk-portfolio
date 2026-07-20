import { FadeUp } from "@/components/FadeUp";
import { disciplineIcons } from "@/components/disciplineIcons";
import type { Discipline } from "@/lib/disciplines";

type Props = {
  discipline: Discipline;
};

/** Intro block shown at the top of each discipline page. */
export function DisciplineHero({ discipline }: Props) {
  const Icon = disciplineIcons[discipline.slug];

  return (
    <section className="px-4 sm:px-6 pt-6 pb-2">
      <div className="mx-auto max-w-260">
        <FadeUp className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex size-11 items-center justify-center rounded-2xl bg-linear-to-br ${discipline.accentFrom} ${discipline.accentTo} text-white shadow-lg`}
            >
              <Icon className="size-5" />
            </span>
            <p className={`text-xs font-semibold uppercase tracking-widest ${discipline.accentText}`}>
              {discipline.eyebrow}
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[#F4F7FB]">
            {discipline.title}
          </h1>

          <p className="text-[#9BA7B7] text-base sm:text-lg leading-relaxed max-w-2xl">
            {discipline.description}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
