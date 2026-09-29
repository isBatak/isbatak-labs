import { interpolate } from "remotion"

import { clamp, ease, mixRect, pop, tween } from "../lib/motion"
import { TARGETS } from "../site/layout"
import { Caption } from "../stage/caption"
import { useStage } from "../stage/context"
import { Cursor, Ripple } from "../stage/cursor"
import { Key, KeyRow, Plus } from "../stage/keys"
import { label } from "../stage/labels"
import { Overlay } from "../stage/overlay"
import { HUNT, hopPoint, hopRect } from "../stage/shots"
import { sourcery, T } from "../theme"
import { CaptionSlot, captionPlacement } from "./captions"
import { heroLanding } from "./landing"

export function HuntSegment() {
  const { frame, fps, tall, cam, viewport, scale, screen } = useStage()
  const hunt = hopRect(frame, HUNT)
  const huntPoint = hopPoint(frame, HUNT, [1240, 860])
  const flightA = tween(frame, T.open + 2, 22, ease.inOut)
  const huntKeysOut = tween(frame, T.open + 4, 10, ease.in)
  const keySize = tall ? 104 : 88

  return (
    <>
      {frame >= T.hunt[0] - 4 && frame < T.open + 30 && (
        <Overlay
          rect={frame < T.open + 2 ? screen(hunt.rect) : mixRect(screen(TARGETS.npm), heroLanding(viewport), flightA)}
          label={label(hunt.target)}
          scale={scale}
          opacity={tween(frame, T.hunt[0] - 4, 3) * (1 - tween(frame, T.open + 22, 6))}
          labelOpacity={1 - tween(frame, T.open + 2, 6)}
          flash={interpolate(frame, [T.click, T.click + 3, T.click + 12], [0, 1, 0], clamp)}
          viewport={viewport}
        />
      )}
      {frame >= T.keysIn - 4 && frame < T.open + 16 && (
        <>
          <Ripple
            {...screen({ x: huntPoint.x, y: huntPoint.y, w: 0, h: 0 })}
            progress={tween(frame, T.click, 20, ease.out)}
            size={120 * cam.zoom}
            color={sourcery.violet}
          />
          <Cursor
            {...screen({ x: huntPoint.x, y: huntPoint.y, w: 0, h: 0 })}
            size={tall ? 60 : 50}
            press={interpolate(frame, [T.click - 3, T.click, T.click + 5], [0, 1, 0], clamp)}
            opacity={tween(frame, T.keysIn - 4, 6) * (1 - tween(frame, T.open + 6, 8))}
          />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: tall ? 260 : 90 }}>
            <KeyRow size={keySize}>
              <Key
                hint="cmd"
                size={keySize}
                enter={pop(frame, T.keysIn, fps) * (1 - huntKeysOut)}
                down={tween(frame, T.keysDown, 4, ease.snap) * (1 - huntKeysOut)}
              >
                ⌘
              </Key>
              <Plus size={keySize} opacity={pop(frame, T.keysIn + 3, fps) * (1 - huntKeysOut)} />
              <Key
                hint="shift"
                size={keySize}
                enter={pop(frame, T.keysIn + 4, fps) * (1 - huntKeysOut)}
                down={tween(frame, T.keysDown + 3, 4, ease.snap) * (1 - huntKeysOut)}
              >
                ⇧
              </Key>
            </KeyRow>
          </div>
        </>
      )}
      <CaptionSlot>
        <Caption
          frame={frame}
          start={T.hunt[0] + 2}
          end={T.click - 6}
          eyebrow="Hold ⌘ ⇧"
          title="Point at anything."
          size={captionPlacement(tall).size}
        />
      </CaptionSlot>
    </>
  )
}
