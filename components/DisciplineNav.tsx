"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { disciplines } from "@/lib/disciplines";
import { disciplineIcons } from "@/components/disciplineIcons";
import { cn } from "@/lib/utils";

/**
 * Segmented switcher shown near the top of each discipline page.
 * Highlights the active discipline based on the current path.
 */
export function DisciplineNav() {
  const pathname = usePathname();

  return (
    <div className="px-4 sm:px-6 pt-20 pb-1">
      <div className="mx-auto max-w-260 flex justify-center">
        <div className="max-w-full overflow-x-auto no-scrollbar">
          <div
            role="tablist"
            aria-label="Portfolio disciplines"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl"
          >
            {disciplines.map((d) => {
              const active = pathname === d.href;
              const Icon = disciplineIcons[d.slug];
              return (
                <Link
                  key={d.slug}
                  href={d.href}
                  role="tab"
                  aria-selected={active}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-all",
                    active
                      ? "bg-sky-400/15 text-sky-300 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.25)]"
                      : "text-[#9BA7B7] hover:text-[#F4F7FB] hover:bg-white/[0.05]"
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  {d.short}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
