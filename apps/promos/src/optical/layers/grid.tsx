import { Box } from "@isbatak/react-ui/box"
import { Icon } from "@isbatak/react-ui/icon"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, mix, settle, tween } from "../../sourcery/lib/motion"
import * as Caliper from "../caliper"
import { DrawnDimension } from "../drawn-dimension"
import { LAYOUT, shapeOf } from "../theme"

export function Grid() {
  const frame = useCurrentFrame()
  const { width, height, fps, durationInFrames } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]

  const out = tween(frame, durationInFrames - 24, 24, ease.inOut)
  const shown = settle(frame, 0, fps) * (1 - out)

  return (
    <Box
      position="absolute"
      left="[50%]"
      top="[46%]"
      style={{ opacity: shown, translate: "-50% -50%", scale: mix(0.96, 1, shown) - out * 0.08 }}
    >
      <Caliper.Root alignItems="center" gap="6" style={{ zoom: layout.zoom }}>
        <Caliper.Frame magnify={layout.grid} mt="14">
          <Caliper.Subject>
            <Icon name="plus" size="lg" />
          </Caliper.Subject>
          <Caliper.IconGrid colorPalette="red" />
          <DrawnDimension at={14} placement="top" reach={12} span={{ start: 0, size: 5.25 }}>
            5.25
          </DrawnDimension>
        </Caliper.Frame>
        <Caliper.Legend>
          <Caliper.LegendItem>
            <Caliper.LegendSwatch kind="hatch" colorPalette="red" />
            Trim area of the 24-unit grid. The plus starts 5.25 units in.
          </Caliper.LegendItem>
        </Caliper.Legend>
      </Caliper.Root>
    </Box>
  )
}
