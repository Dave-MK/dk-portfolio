import type { Metadata } from "next";
import { Geist, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Kilgallon | Portfolio",
  description:
    "Portfolio of David Kilgallon, featuring web development, creative technology, 3D, motion design, and digital media projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${ibmPlexSans.variable} font-secondary bg-transparent`}>
        <div className="fixed inset-0 -z-10 bg-[url('/images/hero-bg.png')] bg-cover bg-center" aria-hidden />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}