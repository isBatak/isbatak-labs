import { AbsoluteFill, interpolate } from "remotion"

import { clamp, ease, settle, tween } from "../lib/motion"
import { Site } from "../site/site"
import { Browser } from "../stage/browser"
import { worldTransform } from "../stage/camera"
import { useStage } from "../stage/context"
import { T } from "../theme"
import { getReveal } from "./reveal"

export function World() {
  const stage = useStage()
  const { frame, fps, width, height, cam, viewport } = stage
  const revealRect = getReveal(stage).rect
  const worldOpacity = interpolate(frame, [T.hookExpand + 2, T.hookExpand + 8], [0, 1], clamp)
  const worldFade = 1 - tween(frame, T.outro - 14, 14, ease.in)
  const clip =
    frame < T.pageIn + 8
      ? `inset(${revealRect.y}px ${width - revealRect.x - revealRect.w}px ${height - revealRect.y - revealRect.h}px ${revealRect.x}px)`
      : undefined
  const pageDrop = settle(frame, T.hookExpand + 4, fps)

  return (
    <AbsoluteFill style={{ clipPath: clip, opacity: worldOpacity * worldFade }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          transformOrigin: "0 0",
          transform: worldTransform(cam, viewport),
        }}
      >
        <Browser style={{ transform: `translateY(${(1 - pageDrop) * 40}px)` }}>
          <Site />
        </Browser>
      </div>
    </AbsoluteFill>
  )
}
