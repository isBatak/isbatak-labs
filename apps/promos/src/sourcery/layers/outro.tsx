import { interpolate } from "remotion"

import { clamp, tween } from "../lib/motion"
import { useStage } from "../stage/context"
import { Outro, outroTitleRect } from "../stage/outro"
import { Overlay } from "../stage/overlay"
import { T } from "../theme"

export function OutroSegment() {
  const { frame, tall, viewport } = useStage()

  return (
    <>
      <Outro frame={frame} viewport={viewport} />
      {frame >= T.outro && (
        <Overlay
          rect={outroTitleRect(viewport)}
          label={`sourcery  hold ⌘⇧ and click an element to open its source`}
          scale={tall ? 1.7 : 1.6}
          opacity={1 - tween(frame, T.outro + 60, 10)}
          labelOpacity={tween(frame, T.outro + 4, 6)}
          flash={interpolate(frame, [T.outro, T.outro + 4, T.outro + 16], [0, 1, 0], clamp)}
          viewport={viewport}
        />
      )}
    </>
  )
}
