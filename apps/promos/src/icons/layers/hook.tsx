import { styled } from "@isbatak/panda-ds/jsx"
import { AbsoluteFill, useVideoConfig } from "remotion"

import { T } from "../theme"
import { Heading } from "./heading"

export function HookSegment() {
  const { width, height } = useVideoConfig()
  const unit = Math.min(width, height) / 1080

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <styled.div textAlign="center" style={{ zoom: 1.8 * unit }}>
        <Heading at={T.hookLines[0]} size="7xl">
          Your icons.
        </Heading>
        <Heading at={T.hookLines[1]} size="7xl">
          Our components.
        </Heading>
        <styled.div mt="3" color="fg.muted">
          <Heading at={T.hookLines[2]} size="4xl">
            Swap the whole set in one line.
          </Heading>
        </styled.div>
      </styled.div>
    </AbsoluteFill>
  )
}
