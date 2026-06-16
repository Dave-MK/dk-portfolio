import type { Metadata } from "next";
import { Inter, AR_One_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

const SITE_URL = "https://davidkilgallon.dev";
const OG_IMAGE = "/images/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "David Kilgallon | Portfolio",
    template: "%s | David Kilgallon",
  },
  description:
    "Portfolio of David Kilgallon — aspiring software developer with a creative background in digital media, building web projects that combine clean code, visual design, and practical problem-solving.",
  keywords: [
    "David Kilgallon",
    "portfolio",
    "web developer",
    "software developer",
    "Next.js",
    "React",
    "creative technology",
    "3D",
    "motion design",
    "digital media",
    "UI/UX",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "David Kilgallon", url: SITE_URL }],
  creator: "David Kilgallon",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "David Kilgallon Portfolio",
    title: "David Kilgallon | Portfolio",
    description:
      "Software developer with a creative background in digital media, building web projects that combine clean code, visual design, and practical problem-solving.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "David Kilgallon — Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Kilgallon | Portfolio",
    description:
      "Software developer with a creative background in digital media, building web projects that combine clean code, visual design, and practical problem-solving.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${arOneSans.variable} bg-transparent`}>
        <div className="fixed inset-0 -z-10 bg-[url('/images/hero-bg.webp')] bg-cover bg-center" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-linear-to-b from-black/80 via-black/50 to-black/20" />
        <SiteHeader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}