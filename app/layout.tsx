import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const SITE_URL = "https://davidkilgallon.dev";
const OG_IMAGE = "/images/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "David Kilgallon | Creative Front-End Developer",
    template: "%s | David Kilgallon",
  },
  description:
    "Creative front-end developer building clean, useful digital products. Portfolio of David Kilgallon — web development, UI design, digital media, and creative technology.",
  keywords: [
    "David Kilgallon",
    "portfolio",
    "front-end developer",
    "web developer",
    "creative technology",
    "Next.js",
    "React",
    "TypeScript",
    "UI design",
    "digital media",
    "Tailwind CSS",
    "St Helens",
    "Merseyside",
  ],
  authors: [{ name: "David Kilgallon", url: SITE_URL }],
  creator: "David Kilgallon",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "David Kilgallon Portfolio",
    title: "David Kilgallon | Creative Front-End Developer",
    description:
      "Creative front-end developer building clean, useful digital products. Web development, UI design, digital media.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "David Kilgallon — Creative Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Kilgallon | Creative Front-End Developer",
    description:
      "Creative front-end developer building clean, useful digital products.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#080A0F] text-[#F4F7FB] antialiased`}
      >
        {/* Ambient radial glows */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute left-[-10%] top-[-10%] h-105 w-105 rounded-full bg-sky-500/18 blur-[120px]" />
          <div className="absolute right-[-10%] top-[10%] h-105 w-105 rounded-full bg-violet-500/18 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[35%] h-90 w-90 rounded-full bg-emerald-500/8 blur-[120px]" />
        </div>
        <SiteHeader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
