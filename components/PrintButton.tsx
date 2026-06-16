"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
    >
      <Download className="size-4" />
      Download PDF
    </button>
  );
}
