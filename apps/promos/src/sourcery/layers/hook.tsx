import { interpolate } from "remotion"

import { clamp, ease, mix, tween } from "../lib/motion"
import { useStage } from "../stage/context"
import { Cursor, Ripple } from "../stage/cursor"
import { HOOK_LABELS, Hook } from "../stage/hook"
import { Overlay } from "../stage/overlay"
import { sourcery, T } from "../theme"
import { getReveal } from "./reveal"

export function HookSegment() {
  const stage = useStage()
  const { frame, width, height, tall, viewport } = stage
  const { hookBox, wordIndex, punch, rect } = getReveal(stage)

  return (
    <>
      <Hook frame={frame} viewport={viewport} />
      {frame >= T.hookWords[0] && frame < T.pageIn + 8 && (
        <Overlay
          rect={rect}
          label={HOOK_LABELS[wordIndex] ?? ""}
          scale={tall ? 1.9 : 1.7}
          opacity={tween(frame, T.hookWords[0], 4) * (1 - tween(frame, T.pageIn + 2, 6))}
          labelOpacity={1 - tween(frame, T.hookExpand, 4)}
          flash={punch * 0.6}
          viewport={viewport}
        />
      )}
      {frame >= 8 && frame < T.hookExpand && (
        <>
          <Ripple
            x={hookBox.x + hookBox.w * 0.66}
            y={hookBox.y + hookBox.h * 0.72}
            progress={tween(frame, T.hookWords[1] + 1, 16, ease.out)}
            size={140}
            color={sourcery.violet}
          />
          <Cursor
            x={mix(width * 0.9, hookBox.x + hookBox.w * 0.66, tween(frame, 8, 12, ease.out))}
            y={mix(height * 0.95, hookBox.y + hookBox.h * 0.72, tween(frame, 8, 12, ease.out))}
            size={tall ? 64 : 56}
            press={interpolate(frame, [T.hookWords[1] - 2, T.hookWords[1] + 1, T.hookWords[1] + 5], [0, 1, 0], clamp)}
            opacity={1 - tween(frame, T.hookExpand - 6, 6)}
          />
        </>
      )}
    </>
  )
}
