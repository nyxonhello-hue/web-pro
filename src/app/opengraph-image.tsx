import { ImageResponse } from "next/og";

export const alt = "Minato · NYXON — independent developer building from Ghana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b0f1d 0%, #080b12 60%, #14122e 100%)",
          color: "#eef0f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 10, color: "#5ee6ff" }}>NYXON</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 940 }}>
            I build software that turns ideas into useful products.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#a0a8ba" }}>
            Minato · Independent developer · Building from Ghana
          </div>
        </div>
      </div>
    ),
    size,
  );
}
