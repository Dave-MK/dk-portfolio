import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? "Blog";
  const description = post?.description ?? "";
  const tags = post?.tags?.slice(0, 3) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px",
          backgroundColor: "#080A0F",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(56, 189, 248, 0.12)",
            filter: "blur(100px)",
          }}
        />
        {/* Ambient glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(167, 139, 250, 0.10)",
            filter: "blur(100px)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #38BDF8, #A78BFA)",
          }}
        />

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "4px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  background: "rgba(56, 189, 248, 0.08)",
                  color: "#7DD3FC",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? "48px" : "56px",
            fontWeight: 700,
            color: "#F4F7FB",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: "20px",
              color: "#9BA7B7",
              lineHeight: 1.5,
              maxWidth: "800px",
              marginBottom: "40px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              background: "rgba(56, 189, 248, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "#38BDF8", fontSize: "18px", fontWeight: 700 }}>{"{ }"}</div>
          </div>
          <div style={{ color: "#7B8CA0", fontSize: "16px", fontWeight: 500 }}>
            davidkilgallon.dev · Blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
