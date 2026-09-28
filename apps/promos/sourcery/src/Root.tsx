import { Composition } from "remotion"

import { SourceryPromo } from "./SourceryPromo"
import { DURATION, VIDEO } from "./theme"

export function RemotionRoot() {
  return (
    <Composition
      id="SourceryPromo"
      component={SourceryPromo}
      durationInFrames={DURATION}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  )
}
