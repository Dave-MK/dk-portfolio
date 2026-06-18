import { ImageResponse } from "next/og";
import { getWorkProject, getAllWorkSlugs } from "@/lib/work";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getWorkProject(slug);

  const title = project?.title ?? "Project";
  const tagline = project?.tagline ?? "";
  const tech = project?.tech?.slice(0, 4) ?? [];
  const status = project?.status ?? "Live";

  const statusColor =
    status === "Live"
      ? { text: "#6EE7B7", bg: "rgba(52, 211, 153, 0.1)", border: "rgba(52, 211, 153, 0.25)" }
      : status === "In Development"
      ? { text: "#7DD3FC", bg: "rgba(56, 189, 248, 0.1)", border: "rgba(56, 189, 248, 0.25)" }
      : { text: "#94A3B8", bg: "rgba(148, 163, 184, 0.1)", border: "rgba(148, 163, 184, 0.25)" };

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
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(56, 189, 248, 0.10)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(167, 139, 250, 0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* Top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #38BDF8, #A78BFA, #34D399)",
          }}
        />

        {/* Status badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              padding: "4px 14px",
              borderRadius: "999px",
              border: `1px solid ${statusColor.border}`,
              background: statusColor.bg,
              color: statusColor.text,
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {status}
          </div>
          <div style={{ color: "#7B8CA0", fontSize: "14px" }}>Case Study</div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#F4F7FB",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          {title}
        </div>

        {/* Tagline */}
        {tagline && (
          <div
            style={{
              fontSize: "22px",
              color: "#9BA7B7",
              lineHeight: 1.4,
              marginBottom: "36px",
            }}
          >
            {tagline}
          </div>
        )}

        {/* Tech pills + branding row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {tech.map((t) => (
              <div
                key={t}
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  background: "rgba(56, 189, 248, 0.07)",
                  color: "rgba(125, 211, 252, 0.85)",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {t}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
            <div style={{ color: "#7B8CA0", fontSize: "15px", fontWeight: 500 }}>
              davidkilgallon.dev
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
