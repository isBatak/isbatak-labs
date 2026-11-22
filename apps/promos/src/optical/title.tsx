import { Box } from "@isbatak/react-ui/box"
import { Heading } from "@isbatak/react-ui/heading"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, tween } from "../sourcery/lib/motion"
import { LAYOUT, shapeOf } from "./theme"

export function Title({ children }: { children: string }) {
  const frame = useCurrentFrame()
  const { width, height, durationInFrames } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]
  const enter = tween(frame, 0, 18, ease.inOut) * (1 - tween(frame, durationInFrames - 18, 18, ease.inOut))

  return (
    <Box
      position="absolute"
      left="[50%]"
      style={{
        top: `${layout.titleTop * 100}%`,
        opacity: enter,
        translate: `-50% calc(-50% + ${(1 - enter) * 16}px)`,
      }}
    >
      <Heading size="5xl" color="fg" textAlign="center" whiteSpace="nowrap">
        {children}
      </Heading>
    </Box>
  )
}
