/**
 * DK monogram — the same vector mark used for the site favicon
 * (see app/icon.svg). Letters are drawn as gradient-stroked paths so the
 * logo and favicon stay pixel-identical.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="David Kilgallon monogram"
    >
      <defs>
        <linearGradient id="dk-logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38BDF8" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="8"
        fill="#0B0F17"
        stroke="#38BDF8"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <g
        fill="none"
        stroke="url(#dk-logo-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 22 V10 H12 Q16 10 16 16 Q16 22 12 22 H8" />
        <path d="M19 10 V22" />
        <path d="M19 16 L24.5 10" />
        <path d="M19 16 L24.5 22" />
      </g>
    </svg>
  );
}
