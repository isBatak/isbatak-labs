import { Composition, Folder } from "remotion"

import { Promo } from "./Promo"
import { VIDEO } from "./theme"

export function OpticalCompositions() {
  return (
    <Folder name="optical">
      <Composition
        id="OpticalPromo"
        component={Promo}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.square.width}
        height={VIDEO.square.height}
      />
      <Composition
        id="OpticalPromoWide"
        component={Promo}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.wide.width}
        height={VIDEO.wide.height}
      />
      <Composition
        id="OpticalPromoVertical"
        component={Promo}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.tall.width}
        height={VIDEO.tall.height}
      />
    </Folder>
  )
}
