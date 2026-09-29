import { interpolate } from "remotion"

import { clamp, ease, mixRect, pop, tween } from "../lib/motion"
import { TARGETS } from "../site/layout"
import { Caption } from "../stage/caption"
import { useStage } from "../stage/context"
import { Cursor, Ripple } from "../stage/cursor"
import { Key, KeyRow, Plus } from "../stage/keys"
import { label } from "../stage/labels"
import { Overlay } from "../stage/overlay"
import { sourcery, T } from "../theme"
import { CaptionSlot, captionPlacement } from "./captions"
import { styledLanding } from "./landing"

export function PandaSegment() {
  const { frame, fps, tall, cam, viewport, scale, screen } = useStage()
  const flightB = tween(frame, T.pandaOpen + 2, 22, ease.inOut)
  const pandaKeysOut = tween(frame, T.pandaOpen + 4, 10, ease.in)
  const keySize = tall ? 104 : 88
  const altDown = tween(frame, T.altDown, 4, ease.snap)
  const styledMorph = tween(frame, T.altDown + 1, 6, ease.snap)
  const point = screen({ x: 600, y: 532, w: 0, h: 0 })
  const size = captionPlacement(tall).size

  return (
    <>
      {frame >= T.pandaBack - 2 && frame < T.pandaOpen + 30 && (
        <Overlay
          rect={
            frame < T.pandaOpen + 2
              ? screen(TARGETS.install)
              : mixRect(screen(TARGETS.install), styledLanding(viewport), flightB)
          }
          label={label("install", frame < T.altDown + 3 ? "hint" : "styled")}
          scale={scale}
          styled={styledMorph}
          opacity={tween(frame, T.pandaBack - 2, 3) * (1 - tween(frame, T.pandaOpen + 22, 6))}
          labelOpacity={1 - tween(frame, T.pandaOpen + 2, 6)}
          flash={
            interpolate(frame, [T.altDown, T.altDown + 3, T.altDown + 10], [0, 0.7, 0], clamp) +
            interpolate(frame, [T.pandaClick, T.pandaClick + 3, T.pandaClick + 12], [0, 1, 0], clamp)
          }
          viewport={viewport}
        />
      )}
      {frame >= T.pandaBack && frame < T.pandaOpen + 16 && (
        <>
          <Ripple {...point} progress={tween(frame, T.pandaClick, 20)} size={120 * cam.zoom} color={sourcery.pink} />
          <Cursor
            {...point}
            size={tall ? 60 : 50}
            press={interpolate(frame, [T.pandaClick - 3, T.pandaClick, T.pandaClick + 5], [0, 1, 0], clamp)}
            opacity={1 - tween(frame, T.pandaOpen + 6, 8)}
          />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: tall ? 260 : 90 }}>
            <KeyRow size={keySize}>
              <Key
                hint="cmd"
                size={keySize}
                enter={pop(frame, T.pandaBack, fps) * (1 - pandaKeysOut)}
                down={1 - pandaKeysOut}
              >
                ⌘
              </Key>
              <Plus size={keySize} opacity={pop(frame, T.pandaBack + 6, fps) * (1 - pandaKeysOut)} />
              <Key
                hint="option"
                size={keySize}
                enter={pop(frame, T.pandaBack + 8, fps) * (1 - pandaKeysOut)}
                down={altDown * (1 - pandaKeysOut)}
                accent={sourcery.pink}
              >
                ⌥
              </Key>
              <Plus size={keySize} opacity={pop(frame, T.pandaBack + 2, fps) * (1 - pandaKeysOut)} />
              <Key
                hint="shift"
                size={keySize}
                enter={pop(frame, T.pandaBack + 2, fps) * (1 - pandaKeysOut)}
                down={1 - pandaKeysOut}
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
          start={T.pandaBack + 4}
          end={T.pandaClick - 4}
          eyebrow="Then hold ⌘ ⌥ ⇧"
          title="⌥ switches to its styled() call."
          size={size}
          accent={sourcery.pink}
        />
        <Caption
          frame={frame}
          start={T.pandaOpen + 22}
          end={T.swarm - 6}
          eyebrow="Panda CSS"
          title="Where it's styled, not where it's used."
          size={size}
          accent={sourcery.pink}
        />
      </CaptionSlot>
    </>
  )
}
