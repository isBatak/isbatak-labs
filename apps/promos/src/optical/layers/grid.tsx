import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"
import { Icon } from "@isbatak/react-ui/icon"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, mix, settle, tween } from "../../sourcery/lib/motion"
import * as Caliper from "../caliper"
import { LAYOUT, shapeOf } from "../theme"

export function Grid() {
  const frame = useCurrentFrame()
  const { width, height, fps, durationInFrames } = useVideoConfig()
  const shape = shapeOf(width, height)
  const layout = LAYOUT[shape]

  const out = tween(frame, durationInFrames - 24, 24, ease.inOut)
  const shown = settle(frame, 0, fps) * (1 - out)

  return (
    <Box
      position="absolute"
      left="[50%]"
      style={{
        top: `${layout.centerTop * 100}%`,
        opacity: shown,
        translate: "-50% -50%",
        scale: mix(0.96, 1, shown) - out * 0.08,
      }}
    >
      <Caliper.Root alignItems="center" gap="6" style={{ zoom: layout.zoom }}>
        <Flex gap="16" alignItems="center" flexDirection={shape === "tall" ? "column" : "row"}>
          <Caliper.Frame magnify={layout.grid} mt="14" animate="in" time={frame / fps}>
            <Caliper.Subject>
              <Icon name="plus" size="lg" />
            </Caliper.Subject>
            <Caliper.IconGrid colorPalette="red" />
            <Caliper.Dimension
              enter="draw"
              delay={14 / fps}
              order={0}
              placement="top"
              reach={12}
              span={{ start: 0, size: 5.25 }}
            >
              <Caliper.DimensionLabel>5.25</Caliper.DimensionLabel>
            </Caliper.Dimension>
          </Caliper.Frame>
          <Caliper.Frame magnify={layout.grid} mt="14" animate="in" time={frame / fps}>
            <Caliper.Subject>
              <Icon name="arrow-right" size="lg" />
            </Caliper.Subject>
            <Caliper.IconGrid colorPalette="red" />
            <Caliper.Dimension
              enter="draw"
              delay={14 / fps}
              order={3}
              placement="top"
              reach={12}
              span={{ end: 0, size: 4.25 }}
            >
              <Caliper.DimensionLabel>4.25</Caliper.DimensionLabel>
            </Caliper.Dimension>
          </Caliper.Frame>
        </Flex>
        <Caliper.Legend textStyle="lg">
          <Caliper.LegendItem gap="2" maxW="md" textWrap="balance">
            <Caliper.LegendSwatch kind="hatch" colorPalette="red" boxSize="4" />
            Trim area of the 24-unit grid. The plus starts 5.25 units in, the arrow's tip stops 4.25 short.
          </Caliper.LegendItem>
        </Caliper.Legend>
      </Caliper.Root>
    </Box>
  )
}
