import { interpolateColors } from "remotion"

import type { Rect } from "../lib/motion"
import { sourcery } from "../theme"

export interface OverlayProps {
  rect: Rect
  label: string
  scale: number
  styled?: number
  opacity?: number
  labelOpacity?: number
  flash?: number
  viewport: { width: number; height: number }
}

export function Overlay({
  rect,
  label,
  scale,
  styled = 0,
  opacity = 1,
  labelOpacity = 1,
  flash = 0,
  viewport,
}: OverlayProps) {
  const border = interpolateColors(styled, [0, 1], [sourcery.violet, sourcery.pink])
  const fill = interpolateColors(styled, [0, 1], [sourcery.violetFill, sourcery.pinkFill])
  const badge = interpolateColors(styled, [0, 1], [sourcery.violetLabel, sourcery.pink])
  const labelHeight = 21.4 * scale
  const above = rect.y - labelHeight - 6 * scale
  const top = above < 4 ? rect.y + rect.h + 6 * scale : above
  const left = Math.min(Math.max(rect.x, 4), viewport.width - label.length * 6.8 * scale - 16 * scale)

  if (opacity <= 0) return null

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity }}>
      <div
        style={{
          position: "absolute",
          left: rect.x,
          top: rect.y,
          width: rect.w,
          height: rect.h,
          border: `${1.5 * scale}px solid ${border}`,
          borderRadius: 3 * scale,
          background: fill,
          boxShadow: flash > 0 ? `0 0 0 ${10 * flash * scale}px ${border}33` : undefined,
        }}
      />
      <div
        style={{
          position: "absolute",
          left,
          top,
          padding: `${3 * scale}px ${6 * scale}px`,
          borderRadius: 4 * scale,
          background: badge,
          color: "#fff",
          font: `500 ${11 * scale}px/1.4 "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
          whiteSpace: "pre",
          boxShadow: `0 ${2 * scale}px ${8 * scale}px rgb(0 0 0 / 0.25)`,
          opacity: labelOpacity,
        }}
      >
        {label}
      </div>
    </div>
  )
}
