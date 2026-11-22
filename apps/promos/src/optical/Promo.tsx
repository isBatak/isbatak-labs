import { Box } from "@isbatak/react-ui/box"
import { Sequence, useVideoConfig } from "remotion"

import { Sprite } from "./button"
import { Compare } from "./layers/compare"
import { Grid } from "./layers/grid"
import { Stage } from "./layers/stage"
import { Toggle } from "./layers/toggle"
import type { PromoProps } from "./theme"
import { TimingProvider } from "./timing"

export function Promo({ timing }: PromoProps) {
  const { width, height } = useVideoConfig()
  const unit = Math.min(width, height) / 1080

  return (
    <TimingProvider value={timing}>
      <Box className="dark" position="absolute" inset="0" bg="bg.subtle" color="fg" overflow="hidden">
        <Sprite />
        <Box position="absolute" inset="0" style={{ zoom: unit }}>
          <Sequence name="Measure" from={0} durationInFrames={498}>
            <Stage />
            <Toggle />
          </Sequence>
          <Sequence name="Icon grid" from={498} durationInFrames={216}>
            <Grid />
          </Sequence>
          <Sequence name="Compare" from={702} durationInFrames={258}>
            <Compare />
          </Sequence>
        </Box>
      </Box>
    </TimingProvider>
  )
}
