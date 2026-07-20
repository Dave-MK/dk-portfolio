"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Camera, Box } from "lucide-react";
import type { MediaItem, MediaKind } from "@/lib/disciplines";

type Props = {
  item: MediaItem;
  kind: MediaKind;
  accentFrom: string;
  accentTo: string;
};

const aspectClass: Record<NonNullable<MediaItem["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  reel: "aspect-[9/16]",
};

const kindIcon = {
  video: Play,
  photo: Camera,
  model: Box,
};

const imageSizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

/**
 * A single media tile. Videos (`youtubeId`) show a local thumbnail and swap
 * to a YouTube embed on click; images (`src`) render directly. Items with
 * neither fall back to the "content coming soon" placeholder fill.
 */
export function MediaCard({ item, kind, accentFrom, accentTo }: Props) {
  const [playing, setPlaying] = useState(false);
  const Icon = kindIcon[kind];
  const aspect = aspectClass[item.aspect ?? "landscape"];

  return (
    <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <div className={`relative ${aspect} w-full overflow-hidden`}>
        {item.youtubeId ? (
          playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${item.title}`}
              className="absolute inset-0 cursor-pointer"
            >
              <Image
                src={`/videos/${item.youtubeId}.jpg`}
                alt={item.title}
                fill
                sizes={imageSizes}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-6 translate-x-0.5" />
                </span>
              </span>
            </button>
          )
        ) : item.videoSrc ? (
          playing ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={item.videoSrc}
              poster={item.poster}
              autoPlay
              controls
              playsInline
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${item.title}`}
              className="absolute inset-0 cursor-pointer"
            >
              {item.poster && (
                <Image
                  src={item.poster}
                  alt={item.title}
                  fill
                  sizes={imageSizes}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-6 translate-x-0.5" />
                </span>
              </span>
            </button>
          )
        ) : item.src ? (
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes={imageSizes}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className={`absolute inset-0 bg-linear-to-br ${accentFrom} ${accentTo} opacity-[0.14]`} />
            {/* Dotted texture */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Icon className={kind === "video" ? "size-6 translate-x-0.5" : "size-6"} />
              </span>
            </div>
            <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/60 backdrop-blur-sm">
              Placeholder
            </span>
          </>
        )}
      </div>

      {/* Caption */}
      <figcaption className="flex items-center justify-between gap-3 border-t border-white/[0.07] px-4 py-3">
        <span className="text-sm font-medium text-[#F4F7FB]">{item.title}</span>
        <span className="shrink-0 text-xs text-[#7B8CA0]">{item.caption}</span>
      </figcaption>
    </figure>
  );
}
