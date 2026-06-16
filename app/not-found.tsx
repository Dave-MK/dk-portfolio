import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen relative z-10 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-widest mb-4">404</p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
        Page not found
      </h1>
      <p className="max-w-md text-sm sm:text-lg mb-10">
        This page doesn&apos;t exist or has been moved. Head back to the
        portfolio to see what&apos;s live.
      </p>
      <Link
        href="/"
        className="rounded-md border border-cyan-500/60 px-6 py-3 text-sm font-medium transition-colors hover:bg-cyan-500/10"
      >
        Back to portfolio
      </Link>
    </main>
  );
}
