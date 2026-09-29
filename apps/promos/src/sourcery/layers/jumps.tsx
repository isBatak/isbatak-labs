import { interpolate } from "remotion"

import { clamp, tween } from "../lib/motion"
import { Caption } from "../stage/caption"
import { useStage } from "../stage/context"
import { Cursor, Ripple } from "../stage/cursor"
import { label } from "../stage/labels"
import { Overlay } from "../stage/overlay"
import { hopPoint, hopRect, JUMPS } from "../stage/shots"
import { sourcery, T } from "../theme"
import { CaptionSlot, captionPlacement } from "./captions"

export function JumpsSegment() {
  const { frame, tall, cam, viewport, scale, screen } = useStage()
  const jump = hopRect(frame, JUMPS)
  const jumpPoint = hopPoint(frame, JUMPS, [700, 620])
  const point = screen({ x: jumpPoint.x, y: jumpPoint.y, w: 0, h: 0 })

  return (
    <>
      {frame >= T.jumps[0] - 8 && frame < T.editors - 2 && (
        <Overlay
          rect={screen(jump.rect)}
          label={label(jump.target)}
          scale={scale}
          opacity={tween(frame, T.jumps[0] - 8, 3) * (1 - tween(frame, T.editors - 8, 6))}
          flash={
            interpolate(frame, [T.jumps[0], T.jumps[0] + 3, T.jumps[0] + 10], [0, 1, 0], clamp) +
            interpolate(frame, [T.jumps[1], T.jumps[1] + 3, T.jumps[1] + 10], [0, 1, 0], clamp) +
            interpolate(frame, [T.jumps[2], T.jumps[2] + 3, T.jumps[2] + 10], [0, 1, 0], clamp)
          }
          viewport={viewport}
        />
      )}
      {frame >= T.jumps[0] - 22 && frame < T.editors && (
        <>
          <Ripple {...point} progress={tween(frame, T.jumps[0], 16)} size={100 * cam.zoom} color={sourcery.violet} />
          <Ripple {...point} progress={tween(frame, T.jumps[1], 16)} size={100 * cam.zoom} color={sourcery.violet} />
          <Ripple {...point} progress={tween(frame, T.jumps[2], 16)} size={100 * cam.zoom} color={sourcery.violet} />
          <Cursor
            {...point}
            size={tall ? 60 : 50}
            press={
              interpolate(frame, [T.jumps[0] - 3, T.jumps[0], T.jumps[0] + 4], [0, 1, 0], clamp) +
              interpolate(frame, [T.jumps[1] - 3, T.jumps[1], T.jumps[1] + 4], [0, 1, 0], clamp) +
              interpolate(frame, [T.jumps[2] - 3, T.jumps[2], T.jumps[2] + 4], [0, 1, 0], clamp)
            }
            opacity={tween(frame, T.jumps[0] - 22, 6) * (1 - tween(frame, T.editors - 6, 6))}
          />
        </>
      )}
      <CaptionSlot>
        <Caption
          frame={frame}
          start={T.jumps[0] - 6}
          end={T.editors - 6}
          eyebrow="Any element"
          title="Every element knows its line."
          size={captionPlacement(tall).size}
        />
      </CaptionSlot>
    </>
  )
}
