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
    <main className="min-h-screen relative z-10 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-widest mb-4">Error</p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
        Something went wrong
      </h1>
      <p className="max-w-md text-sm sm:text-lg mb-10">
        An unexpected error occurred. You can try again or come back later.
      </p>
      <button
        onClick={reset}
        className="rounded-md border border-cyan-500/60 px-6 py-3 text-sm font-medium transition-colors hover:bg-cyan-500/10"
      >
        Try again
      </button>
    </main>
  );
}
