import type { Metadata } from "next";
import { Inter, AR_One_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Analytics } from "@vercel/analytics/next"

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

export const metadata: Metadata = {
  title: "David Kilgallon | Portfolio",
  description:
    "Portfolio of David Kilgallon, featuring web development, creative technology, 3D, motion design, and digital media projects.",
  metadataBase: new URL("https://davidkilgallon.dev"),
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
      </body>
    </html>
  );
}