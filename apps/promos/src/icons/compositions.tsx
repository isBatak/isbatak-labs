import { Composition, Folder } from "remotion"

import { Promo } from "./Promo"
import { VIDEO } from "./theme"

export function IconsCompositions() {
  return (
    <Folder name="icons">
      <Composition
        id="IconsPromo"
        component={Promo}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.wide.width}
        height={VIDEO.wide.height}
      />
      <Composition
        id="IconsPromoVertical"
        component={Promo}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.tall.width}
        height={VIDEO.tall.height}
      />
    </Folder>
  )
}
