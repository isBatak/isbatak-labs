import { Composition, Folder } from "remotion"

import { Promo } from "./Promo"
import { VIDEO } from "./theme"

export function SourceryCompositions() {
  return (
    <Folder name="sourcery">
      <Composition
        id="SourceryPromo"
        component={Promo}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.wide.width}
        height={VIDEO.wide.height}
      />
      <Composition
        id="SourceryPromoVertical"
        component={Promo}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.tall.width}
        height={VIDEO.tall.height}
      />
    </Folder>
  )
}
