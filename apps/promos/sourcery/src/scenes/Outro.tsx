import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"

import { theme } from "../theme"

export function Outro() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const enter = spring({ frame, fps, config: { damping: 200 } })
  const details = spring({ frame: frame - 10, fps, config: { damping: 200 } })
  const fadeIn = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" })

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: fadeIn }}>
      <div
        style={{
          padding: "28px 44px",
          borderRadius: 20,
          border: `1px solid ${theme.border}`,
          background: theme.surface,
          fontFamily: theme.mono,
          fontSize: 56,
          opacity: enter,
          transform: `scale(${interpolate(enter, [0, 1], [0.94, 1])})`,
        }}
      >
        <span style={{ color: theme.muted }}>$ </span>
        pnpm add -D <span style={{ color: theme.accent }}>@isbatak/sourcery</span>
      </div>
      <div
        style={{
          marginTop: 40,
          fontSize: 36,
          color: theme.muted,
          letterSpacing: "0.02em",
          opacity: details,
          transform: `translateY(${interpolate(details, [0, 1], [20, 0])}px)`,
        }}
      >
        Next.js · Turbopack · webpack
      </div>
    </AbsoluteFill>
  )
}
