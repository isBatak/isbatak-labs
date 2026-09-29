import { ease, inflate, mixRect, tween } from "../lib/motion"
import { TARGETS } from "../site/layout"
import { Caption } from "../stage/caption"
import { labelScale, useStage } from "../stage/context"
import { label, type SpotName } from "../stage/labels"
import { outroTitleRect } from "../stage/outro"
import { Overlay } from "../stage/overlay"
import { T } from "../theme"
import { CaptionSlot, captionPlacement } from "./captions"

function SwarmBox({ name, at, styled = false }: { name: SpotName; at: number; styled?: boolean }) {
  const { frame, tall, cam, viewport, screen } = useStage()
  if (frame < at) return null
  const appear = tween(frame, at, 6, ease.snap)
  const converge = tween(frame, T.outro - 18, 18, ease.inOut)
  const rect = mixRect(inflate(screen(TARGETS[name]), (1 - appear) * 14), outroTitleRect(viewport), converge)
  return (
    <Overlay
      rect={rect}
      label={label(name, styled ? "styled" : "plain")}
      scale={labelScale(cam.zoom, tall)}
      styled={styled ? 1 - converge : 0}
      opacity={appear * (1 - tween(frame, T.outro, 4))}
      labelOpacity={0}
      viewport={viewport}
    />
  )
}

export function SwarmSegment() {
  const { frame, tall } = useStage()

  return (
    <>
      <SwarmBox name="wordmark" at={T.swarm + 12} />
      <SwarmBox name="nav" at={T.swarm + 15} />
      <SwarmBox name="eyebrow" at={T.swarm + 18} />
      <SwarmBox name="title" at={T.swarm + 21} />
      <SwarmBox name="package" at={T.swarm + 24} />
      <SwarmBox name="description" at={T.swarm + 27} />
      <SwarmBox name="managers" at={T.swarm + 30} />
      <SwarmBox name="install" at={T.swarm + 33} styled />
      <SwarmBox name="copy" at={T.swarm + 36} />
      <SwarmBox name="npm" at={T.swarm + 39} />
      <SwarmBox name="source" at={T.swarm + 42} />
      {/* <SwarmBox name="demo" at={T.swarm + 45} /> */}
      <CaptionSlot>
        <Caption
          frame={frame}
          start={T.swarm + 10}
          end={T.outro - 22}
          eyebrow="Every element"
          title="One click from its source."
          size={captionPlacement(tall).size}
        />
      </CaptionSlot>
    </>
  )
}
