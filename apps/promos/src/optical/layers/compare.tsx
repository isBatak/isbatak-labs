import { Box } from "@isbatak/react-ui/box"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, mix, settle, tween } from "../../sourcery/lib/motion"
import { NewProjectButton } from "../button"
import * as Caliper from "../caliper"
import { LAYOUT, md, plusInk, px, shapeOf } from "../theme"
import { useTiming } from "../timing"

export function Compare() {
  const frame = useCurrentFrame()
  const { width, height, fps, durationInFrames } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]
  const T = useTiming().compare

  const enter = settle(frame, 0, fps) * (1 - tween(frame, durationInFrames - 18, 18, ease.inOut))
  const equal = settle(frame, T.equal, fps)
  const optical = settle(frame, T.optical, fps)
  const calloutY = md.height / 2
  const calloutX = -24
  const dotX = md.border + 5

  return (
    <Box
      position="absolute"
      left="[50%]"
      style={{
        top: `${layout.compareTop * 100}%`,
        opacity: enter,
        translate: "-50% -50%",
        scale: mix(0.92, 1, enter),
      }}
    >
      <Caliper.Root style={{ zoom: layout.zoom }}>
        <Box position="relative">
          <Box
            position="absolute"
            bottom="[100%]"
            left="0"
            pb="5"
            style={{ opacity: equal, translate: `0 ${(1 - equal) * 12}px` }}
          >
            <Caliper.Frame magnify={layout.compare}>
              <Caliper.Subject>
                <NewProjectButton offset={0} />
              </Caliper.Subject>
              <Caliper.Callout anchors={[{ x: dotX, y: calloutY }]} to={{ x: calloutX, y: calloutY }}>
                <Caliper.CalloutLabel>
                  <Caliper.CalloutTitle>equal</Caliper.CalloutTitle>
                  {px(md.padding + plusInk)} to the ink
                </Caliper.CalloutLabel>
              </Caliper.Callout>
            </Caliper.Frame>
          </Box>

          <Caliper.Frame magnify={layout.compare}>
            <Caliper.Subject>
              <NewProjectButton offset={md.offset} />
            </Caliper.Subject>
            <Box style={{ opacity: optical }}>
              <Caliper.Callout
                colorPalette="blue"
                anchors={[{ x: dotX, y: calloutY }]}
                to={{ x: calloutX, y: calloutY }}
              >
                <Caliper.CalloutLabel>
                  <Caliper.CalloutTitle>optical</Caliper.CalloutTitle>
                  {px(md.padding - md.offset + plusInk)} to the ink
                </Caliper.CalloutLabel>
              </Caliper.Callout>
            </Box>
          </Caliper.Frame>
        </Box>
      </Caliper.Root>
    </Box>
  )
}
