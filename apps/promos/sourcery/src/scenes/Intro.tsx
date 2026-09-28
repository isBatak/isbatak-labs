import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"

import { theme } from "../theme"

export function Intro() {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  const enter = spring({ frame, fps, config: { damping: 200 } })
  const tagline = spring({ frame: frame - 12, fps, config: { damping: 200 } })
  const exit = interpolate(frame, [durationInFrames - 12, durationInFrames], [1, 0], { extrapolateLeft: "clamp" })

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: exit }}>
      <div
        style={{
          fontSize: 180,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          opacity: enter,
          transform: `translateY(${interpolate(enter, [0, 1], [40, 0])}px)`,
        }}
      >
        Sourcery
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 48,
          color: theme.muted,
          opacity: tagline,
          transform: `translateY(${interpolate(tagline, [0, 1], [24, 0])}px)`,
        }}
      >
        Click any element. Open its source.
      </div>
    </AbsoluteFill>
  )
}
