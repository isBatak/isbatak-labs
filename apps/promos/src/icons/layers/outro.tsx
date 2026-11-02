import { styled } from "@isbatak/panda-ds/jsx"
import { Icon } from "@isbatak/react-ui/icon"
import { AbsoluteFill, useVideoConfig } from "remotion"

import { T } from "../theme"
import { Heading, Line } from "./heading"

export function OutroSegment() {
  const { width, height } = useVideoConfig()
  const tall = height > width
  const unit = Math.min(width, height) / 1080

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <styled.div display="grid" gap="5" justifyItems="center" style={{ zoom: (tall ? 1.1 : 1.5) * unit }}>
        <Heading at={T.outroLines[0]} size="7xl">
          Bring your own icons.
        </Heading>
        <Line at={T.outroLines[1]} textStyle="2xl">
          <styled.span fontFamily="mono">@isbatak/icons</styled.span> · built with ikona ·
          github.com/isBatak/isbatak-labs
        </Line>
        <styled.div display="flex" alignItems="center" gap="3" mt="8">
          <styled.div
            display="grid"
            placeItems="center"
            boxSize="10"
            bg="purple.700"
            color="yellow.200"
            borderRadius="l2"
          >
            <Icon name="boring-logo" boxSize="6" />
          </styled.div>
          <Line at={T.outroLines[2]}>Default icons by Boring Icons, designed by Goran Tomičić</Line>
        </styled.div>
      </styled.div>
    </AbsoluteFill>
  )
}
