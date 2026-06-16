"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">Error</p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F4F7FB] mb-6">
        Something went wrong
      </h1>
      <p className="max-w-md text-sm sm:text-base text-[#9BA7B7] mb-10">
        An unexpected error occurred. You can try again or come back later.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-400 transition-all hover:bg-sky-400/20"
      >
        Try again
      </button>
    </main>
  );
}
