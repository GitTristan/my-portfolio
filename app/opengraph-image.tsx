import { ImageResponse } from "next/og";
import { profile } from "./data/profile";

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card. Colors mirror the dark theme in globals.css, hardcoded
// because ImageResponse cannot read CSS custom properties.
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0b0f14",
        color: "#e7ebf0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 84,
          height: 84,
          border: "2px solid rgba(255, 255, 255, 0.2)",
          borderRadius: 10,
          color: "#7fd8be",
          fontSize: 36,
        }}
      >
        {profile.initials}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 104, letterSpacing: -3 }}>{profile.name}</div>
        <div style={{ marginTop: 12, fontSize: 40, color: "#7fd8be" }}>
          {profile.title}
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#94a0b0" }}>
          {profile.location}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
