import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"
import { EndIcon, Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Kbd } from "@isbatak/react-ui/kbd"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Span } from "@isbatak/react-ui/span"
import type { ReactNode } from "react"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, mix, settle, tween } from "../../sourcery/lib/motion"
import * as Caliper from "../caliper"
import { Picker } from "../picker"
import { key, keyAir, LAYOUT, px, shapeOf } from "../theme"
import { useTiming } from "../timing"

interface KeyFrameProps {
  index: number
  start: number
  end?: number
  ink: number
  children: ReactNode
}

function KeyFrame({ index, start, end, ink, children }: KeyFrameProps) {
  const frame = useCurrentFrame()
  const { width, height, fps } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]
  const T = useTiming().kbd
  const lag = index * 6
  const leaving = frame >= T.marksOut
  const fade = 1 - tween(frame, T.marksOut + lag, 18, ease.inOut)
  const iconBox = settle(frame, T.iconBox + lag, fps) * fade
  const hatch = settle(frame, T.emptyNote + lag, fps) * fade
  const markDelay = ((leaving ? T.marksOut : T.inkGuides) + lag) / fps
  const palette = ink > 0.5 ? "blue" : "red"
  const edge = (units: number) => key.border + key.padding - keyAir(units) * ink
  const inkGap = (units: number) => key.padding - keyAir(units) * ink + keyAir(units)
  const endPad = end === undefined ? key.padding : inkGap(end)

  return (
    <Caliper.Frame magnify={layout.kbd} annotated animate={leaving ? "out" : "in"} time={frame / fps}>
      <Caliper.Subject>{children}</Caliper.Subject>
      <Box style={{ opacity: iconBox }}>
        <Caliper.Outline
          spanX={{ start: edge(start), size: key.icon }}
          spanY={{ start: key.iconTop, size: key.icon }}
        />
        {end !== undefined && (
          <Caliper.Outline spanX={{ end: edge(end), size: key.icon }} spanY={{ start: key.iconTop, size: key.icon }} />
        )}
      </Box>
      <Box style={{ opacity: hatch }}>
        <Caliper.Hatch
          colorPalette={palette}
          spanX={{ start: edge(start), size: keyAir(start) }}
          spanY={{ start: key.iconTop, size: key.icon }}
        />
        {end !== undefined && (
          <Caliper.Hatch
            colorPalette={palette}
            spanX={{ end: edge(end), size: keyAir(end) }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
        )}
      </Box>
      <Caliper.Dimension
        enter="draw"
        exit="retract"
        delay={markDelay}
        order={0}
        colorPalette={palette}
        reach={key.iconBottom}
        span={{ start: key.border, size: inkGap(start) }}
      >
        <Caliper.DimensionLabel>{px(inkGap(start))}</Caliper.DimensionLabel>
      </Caliper.Dimension>
      <Caliper.Dimension
        enter="draw"
        exit="retract"
        delay={markDelay}
        order={1}
        colorPalette={palette}
        reach={key.iconBottom}
        span={{ end: key.border, size: endPad }}
      >
        <Caliper.DimensionLabel>{px(endPad)}</Caliper.DimensionLabel>
      </Caliper.Dimension>
    </Caliper.Frame>
  )
}

export function KbdScene() {
  const frame = useCurrentFrame()
  const { width, height, durationInFrames } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]
  const T = useTiming().kbd

  const enter = tween(frame, 0, 18, ease.inOut) * (1 - tween(frame, durationInFrames - 18, 18, ease.inOut))
  const ink = tween(frame, T.change + 6, T.slide, ease.inOut)
  const offset = (units: number) => `${(units / 24) * ink}em`

  return (
    <>
      <Box
        position="absolute"
        left="[50%]"
        style={{
          top: `${layout.kbdTop * 100}%`,
          opacity: enter,
          translate: "-50% -50%",
          scale: mix(0.92, 1, enter),
        }}
      >
        <Caliper.Root style={{ zoom: layout.zoom }}>
          <Flex columnGap="16" rowGap="10" alignItems="center" justifyContent="center" w="max-content">
            <KeyFrame index={0} start={4.25} ink={ink}>
              <Kbd size="lg">
                <StartIcon asChild offset={offset(4.25)}>
                  <Icon name="command" />
                </StartIcon>
                K
              </Kbd>
            </KeyFrame>
            <KeyFrame index={1} start={3.664} ink={ink}>
              <Kbd size="lg">
                <StartIcon asChild offset={offset(3.664)}>
                  <Icon name="shift" />
                </StartIcon>
                <Icon name="command" />P
              </Kbd>
            </KeyFrame>
            <KeyFrame index={2} start={4.25} end={6.25} ink={ink}>
              <Kbd size="lg">
                <StartIcon asChild offset={offset(4.25)}>
                  <Icon name="option" />
                </StartIcon>
                <EndIcon asChild offset={offset(6.25)}>
                  <Icon name="arrow-up" />
                </EndIcon>
              </Kbd>
            </KeyFrame>
          </Flex>
        </Caliper.Root>
      </Box>

      <Picker label="Balance" first="box" second="ink" change={T.change}>
        <SegmentGroup.Item value="box" h="auto" py="2" flexDirection="column" gap="0.5">
          <SegmentGroup.ItemText>Box</SegmentGroup.ItemText>
          <Span color="fg.muted" fontWeight="normal">
            Pad the box
          </Span>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="ink" h="auto" py="2" flexDirection="column" gap="0.5">
          <SegmentGroup.ItemText>Ink</SegmentGroup.ItemText>
          <Span color="fg.muted" fontWeight="normal">
            Pad the ink
          </Span>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </Picker>
    </>
  )
}
