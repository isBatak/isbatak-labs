import { Composition, Folder } from "remotion"

import { Intro } from "./Intro"
import { VIDEO } from "./theme"

export function IntroCompositions() {
  return (
    <Folder name="intro">
      <Composition
        id="Intro"
        component={Intro}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.wide.width}
        height={VIDEO.wide.height}
      />
      <Composition
        id="IntroVertical"
        component={Intro}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={VIDEO.tall.width}
        height={VIDEO.tall.height}
      />
    </Folder>
  )
}
