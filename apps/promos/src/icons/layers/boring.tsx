import { styled } from "@isbatak/panda-ds/jsx"
import { Icon } from "@isbatak/react-ui/icon"
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion"

import { tween } from "../../sourcery/lib/motion"
import { Panel } from "../panel"
import { SEGMENTS, T } from "../theme"
import { Heading, Line } from "./heading"

export function BoringSegment() {
  const frame = useCurrentFrame()
  const { width, height } = useVideoConfig()
  const tall = height > width
  const unit = Math.min(width, height) / 1080
  const enter = tween(frame, T.boringPanel, 26)
  const credit = tween(frame, T.boringCredit, 22)

  return (
    <AbsoluteFill
      style={{
        flexDirection: tall ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 96 * unit,
      }}
    >
      <Panel
        from={SEGMENTS.boring.from}
        zoom={2.5 * unit}
        style={{ opacity: enter, translate: `0 ${(1 - enter) * 40}px` }}
      />
      <styled.div
        display="grid"
        gap="3"
        maxW="md"
        justifyItems={tall ? "center" : "start"}
        textAlign={tall ? "center" : "start"}
        style={{ zoom: 1.4 * unit }}
      >
        <styled.div
          display="grid"
          placeItems="center"
          boxSize="20"
          bg="purple.700"
          color="yellow.200"
          borderRadius="l3"
          mb="2"
          style={{ opacity: credit, scale: `${0.6 + credit * 0.4}` }}
        >
          <Icon name="boring-logo" boxSize="12" />
        </styled.div>
        <Heading at={T.boringCredit + 6}>Boring Icons</Heading>
        <Line at={T.boringCredit + 16} textStyle="3xl">
          The default set, designed by Goran Tomičić.
        </Line>
        <Line at={T.boringCredit + 26} textStyle="2xl">
          MIT · goran-tomicic.xyz
        </Line>
      </styled.div>
    </AbsoluteFill>
  )
}
