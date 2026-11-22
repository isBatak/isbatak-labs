import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, mix, settle, tween } from "../../sourcery/lib/motion"
import { NewProjectButton } from "../button"
import * as Caliper from "../caliper"
import { LAYOUT, md, px, shapeOf } from "../theme"
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
        top: `${layout.centerTop * 100}%`,
        opacity: enter,
        translate: "-50% -50%",
        scale: mix(0.92, 1, enter),
      }}
    >
      <Caliper.Root style={{ zoom: layout.zoom }}>
        <Flex direction="column" alignItems="center" gap="5">
          <Box style={{ opacity: equal, translate: `0 ${(1 - equal) * 12}px` }}>
            <Caliper.Frame magnify={layout.compare} animate="in" time={frame / fps}>
              <Caliper.Subject>
                <NewProjectButton offset={0} />
              </Caliper.Subject>
              <Caliper.Callout
                enter="draw"
                delay={T.callouts / fps}
                duration={0.6}
                order={0}
                anchors={[{ x: dotX, y: calloutY }]}
                to={{ x: calloutX, y: calloutY }}
              >
                <Caliper.CalloutLabel textStyle="xl">
                  <Caliper.CalloutTitle textStyle="md">equal</Caliper.CalloutTitle>
                  <Caliper.CalloutDescription>no pull</Caliper.CalloutDescription>
                </Caliper.CalloutLabel>
              </Caliper.Callout>
            </Caliper.Frame>
          </Box>

          <Caliper.Frame
            magnify={layout.compare}
            animate="in"
            time={frame / fps}
            style={{ opacity: optical, translate: `0 ${(1 - optical) * 12}px` }}
          >
            <Caliper.Subject>
              <NewProjectButton offset={md.offset} />
            </Caliper.Subject>
            <Caliper.Callout
              colorPalette="blue"
              enter="draw"
              delay={T.callouts / fps}
              duration={0.6}
              order={1}
              anchors={[{ x: dotX, y: calloutY }]}
              to={{ x: calloutX, y: calloutY }}
            >
              <Caliper.CalloutLabel textStyle="xl">
                <Caliper.CalloutTitle textStyle="md">optical</Caliper.CalloutTitle>
                <Caliper.CalloutDescription>{px(md.offset)} pull</Caliper.CalloutDescription>
              </Caliper.CalloutLabel>
            </Caliper.Callout>
          </Caliper.Frame>
        </Flex>
      </Caliper.Root>
    </Box>
  )
}
