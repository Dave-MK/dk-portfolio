import Image from "next/image";

export function ProfileConsole() {
  return (
    <div className="rounded-3xl border border-sky-400/30 bg-white/[0.04] p-6 shadow-[0_0_80px_rgba(56,189,248,0.10)] backdrop-blur-xl">
      {/* Avatar + name */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative h-16 w-16 shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 p-[2px]">
            <div className="h-full w-full overflow-hidden rounded-full bg-[#080A0F]">
              <Image
                src="/images/profile-pic.webp"
                alt="David Kilgallon"
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#F4F7FB]">David Kilgallon</h2>
          <p className="text-sm text-sky-400">Creative Front-End Developer</p>
        </div>
      </div>

      <div className="border-t border-white/10 mb-5" />

      {/* Status info */}
      <div className="flex flex-col gap-4 text-sm mb-5">
        <div>
          <span className="text-[#64748B] text-xs uppercase tracking-wider">Current focus</span>
          <p className="text-[#D8E0EA] mt-1 text-xs leading-relaxed">
            Building practical web apps with clean UI and real-world use cases.
          </p>
        </div>
        <div>
          <span className="text-[#64748B] text-xs uppercase tracking-wider">Status</span>
          <div className="mt-1 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <p className="text-[#D8E0EA] text-xs">Open to remote front-end / creative technology roles</p>
          </div>
        </div>
        <div>
          <span className="text-[#64748B] text-xs uppercase tracking-wider">Location</span>
          <p className="text-[#D8E0EA] mt-1 text-xs">St Helens, Merseyside, UK</p>
        </div>
      </div>

      <div className="border-t border-white/10 mb-5" />

      {/* Mini stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-2xl font-bold text-[#F4F7FB]">3+</p>
          <p className="text-xs text-[#9BA7B7] mt-0.5">Live Apps</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-2xl font-bold text-[#F4F7FB]">10+</p>
          <p className="text-xs text-[#9BA7B7] mt-0.5">Projects</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-xs text-[#9BA7B7] mb-1.5">Stack</p>
          <div className="flex flex-wrap gap-1">
            {["Next.js", "React", "TypeScript"].map((s) => (
              <span key={s} className="rounded-full bg-sky-400/10 px-1.5 py-0.5 text-[10px] text-sky-300">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-xs text-[#9BA7B7] mb-1.5">Background</p>
          <div className="flex flex-wrap gap-1">
            {["Digital Media", "Design"].map((s) => (
              <span key={s} className="rounded-full bg-violet-400/10 px-1.5 py-0.5 text-[10px] text-violet-300">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
