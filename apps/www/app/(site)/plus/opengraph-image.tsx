import { ImageResponse } from "next/og"

export const alt = "isBatak/labs Plus: ship accessible, agent-ready design systems to every client"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
        background: "#0b0b0c",
        color: "#fafafa",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, fontSize: 36 }}>
        <span>isBatak/labs</span>
        <span style={{ color: "#a1a1aa" }}>Plus</span>
      </div>
      <div style={{ display: "flex", maxWidth: 980, fontSize: 76, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
        Ship accessible, agent-ready design systems to every client.
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
        Media blocks · Figma with Code Connect · Agent kit · Agency retainers
      </div>
    </div>,
    size,
  )
}
