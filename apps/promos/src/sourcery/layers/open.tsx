import { Caption } from "../stage/caption"
import { useStage } from "../stage/context"
import { sourcery, T } from "../theme"
import { CaptionSlot, captionPlacement } from "./captions"

export function OpenSegment() {
  const { frame, tall } = useStage()

  return (
    <CaptionSlot>
      <Caption
        frame={frame}
        start={T.open + 26}
        end={T.jumps[0] - 12}
        eyebrow="Click"
        title="Straight to the line."
        size={captionPlacement(tall).size}
        accent={sourcery.violetLabel}
      />
    </CaptionSlot>
  )
}
