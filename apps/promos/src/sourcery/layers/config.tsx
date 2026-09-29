import { Caption } from "../stage/caption"
import { useStage } from "../stage/context"
import { sourcery, T } from "../theme"
import { CaptionSlot, captionPlacement } from "./captions"

export function ConfigSegment() {
  const { frame, tall } = useStage()

  return (
    <CaptionSlot>
      <Caption
        frame={frame}
        start={T.config + 10}
        end={T.pandaBack - 6}
        eyebrow="First, turn it on"
        title="panda: true"
        size={captionPlacement(tall).size}
        accent={sourcery.pink}
      />
    </CaptionSlot>
  )
}
