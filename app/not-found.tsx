import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">404</p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F4F7FB] mb-6">
        Page not found
      </h1>
      <p className="max-w-md text-sm sm:text-base text-[#9BA7B7] mb-10">
        This page doesn&apos;t exist or has been moved. Head back to the portfolio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-400 transition-all hover:bg-sky-400/20"
      >
        Back to portfolio
      </Link>
    </main>
  );
}
