import { Box } from "@isbatak/react-ui/box"
import { Sequence, useVideoConfig } from "remotion"

import { Sprite } from "./button"
import { Compare } from "./layers/compare"
import { EndIconScene } from "./layers/end-icon"
import { Grid } from "./layers/grid"
import { KbdScene } from "./layers/kbd"
import { StackedScene } from "./layers/stacked"
import { Stage } from "./layers/stage"
import { Toggle } from "./layers/toggle"
import { type PromoProps, SCENES } from "./theme"
import { TimingProvider } from "./timing"
import { Title } from "./title"

export function Promo({ timing }: PromoProps) {
  const { width, height } = useVideoConfig()
  const unit = Math.min(width, height) / 1080

  return (
    <TimingProvider value={timing}>
      <Box className="dark" position="absolute" inset="0" bg="bg.subtle" color="fg" overflow="hidden">
        <Sprite />
        <Box position="absolute" inset="0" style={{ zoom: unit }}>
          <Sequence name="Measure" from={SCENES.measure.from} durationInFrames={SCENES.measure.duration}>
            <Stage />
            <Toggle />
            <Title>Optical alignment</Title>
          </Sequence>
          <Sequence name="Compare" from={SCENES.compare.from} durationInFrames={SCENES.compare.duration}>
            <Compare />
            <Title>Compare</Title>
          </Sequence>
          <Sequence name="End icon" from={SCENES.endIcon.from} durationInFrames={SCENES.endIcon.duration}>
            <EndIconScene />
            <Title>End icon</Title>
          </Sequence>
          <Sequence name="Icon grid" from={SCENES.grid.from} durationInFrames={SCENES.grid.duration}>
            <Grid />
            <Title>Icons come with offset</Title>
          </Sequence>
          <Sequence name="Kbd" from={SCENES.kbd.from} durationInFrames={SCENES.kbd.duration}>
            <KbdScene />
            <Title>Perfect optical alignment</Title>
          </Sequence>
          <Sequence name="Stacked" from={SCENES.stacked.from} durationInFrames={SCENES.stacked.duration}>
            <StackedScene />
            <Title>Why not use offset by default</Title>
          </Sequence>
        </Box>
      </Box>
    </TimingProvider>
  )
}
