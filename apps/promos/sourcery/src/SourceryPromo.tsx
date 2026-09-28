import { AbsoluteFill, Sequence } from "remotion"

import { Demo } from "./scenes/Demo"
import { Intro } from "./scenes/Intro"
import { Outro } from "./scenes/Outro"
import { theme, VIDEO } from "./theme"

export function SourceryPromo() {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.background, fontFamily: theme.sans, color: theme.text }}>
      <Sequence durationInFrames={VIDEO.intro} name="Intro">
        <Intro />
      </Sequence>
      <Sequence from={VIDEO.intro} durationInFrames={VIDEO.demo} name="Demo">
        <Demo />
      </Sequence>
      <Sequence from={VIDEO.intro + VIDEO.demo} durationInFrames={VIDEO.outro} name="Outro">
        <Outro />
      </Sequence>
    </AbsoluteFill>
  )
}
