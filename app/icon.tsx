import { ImageResponse } from "next/og";
import { profile } from "./data/profile";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Initials as the favicon. Colors are the dark theme's background and accent
// from globals.css, hardcoded because ImageResponse cannot read CSS custom
// properties.
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0f14",
        color: "#7fd8be",
        borderRadius: 12,
        fontSize: 34,
        letterSpacing: -1,
      }}
    >
      {profile.initials}
    </div>,
    { ...size },
  );
}
