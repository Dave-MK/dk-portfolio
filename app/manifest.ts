import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "David Kilgallon | Portfolio",
    short_name: "DK Portfolio",
    description:
      "Portfolio of David Kilgallon — creative front-end developer based in St Helens, UK. React, Next.js, TypeScript, UI design.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090e",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
