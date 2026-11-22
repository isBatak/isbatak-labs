import { Box } from "@isbatak/react-ui/box"
import { useState } from "react"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, mix, settle, tween } from "../../sourcery/lib/motion"
import { ContinueButton } from "../button"
import * as Caliper from "../caliper"
import { arrowInk, LAYOUT, md, px, shapeOf } from "../theme"
import { useTiming } from "../timing"

export function EndIconScene() {
  const frame = useCurrentFrame()
  const { width, height, fps, durationInFrames } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]
  const T = useTiming().endIcon
  const [buttonWidth, setButtonWidth] = useState(0)

  const enter = tween(frame, 0, 18, ease.inOut) * (1 - tween(frame, durationInFrames - 18, 18, ease.inOut))
  const iconBox = settle(frame, T.iconBox, fps)
  const hatch = settle(frame, T.emptyNote, fps)
  const note = settle(frame, T.emptyNote + 6, fps)
  const boxEnd = md.border + md.padding - md.offset
  const inkGap = boxEnd - md.border + arrowInk

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
        <Caliper.Frame magnify={layout.magnify} annotated animate="in" time={frame / fps}>
          <Caliper.Subject>
            <ContinueButton ref={(node) => setButtonWidth(node?.offsetWidth ?? 0)} />
          </Caliper.Subject>
          <Caliper.Dimension
            enter="fade"
            delay={T.boxGuides / fps}
            order={0}
            placement="left"
            extension="none"
            distance="sm"
          >
            <Caliper.DimensionLabel>{px(md.height)}</Caliper.DimensionLabel>
          </Caliper.Dimension>
          <Caliper.Dimension
            enter="draw"
            delay={T.boxGuides / fps}
            order={1}
            placement="top"
            reach={md.iconTop}
            span={{ start: md.border, size: md.padding }}
          >
            <Caliper.DimensionLabel>{px(md.padding)}</Caliper.DimensionLabel>
          </Caliper.Dimension>
          <Caliper.Dimension
            enter="draw"
            delay={T.boxGuides / fps}
            order={2}
            placement="top"
            reach={md.iconTop}
            span={{ end: md.border, size: boxEnd - md.border }}
          >
            <Caliper.DimensionLabel>{px(boxEnd - md.border)}</Caliper.DimensionLabel>
          </Caliper.Dimension>

          <Box style={{ opacity: iconBox }}>
            <Caliper.Outline spanX={{ end: boxEnd, size: md.icon }} spanY={{ start: md.iconTop, size: md.icon }} />
          </Box>
          <Box style={{ opacity: hatch }}>
            <Caliper.Hatch
              colorPalette="blue"
              spanX={{ end: boxEnd, size: arrowInk }}
              spanY={{ start: md.iconTop, size: md.icon }}
            />
          </Box>
          {buttonWidth > 0 && (
            <Box style={{ opacity: note }}>
              <Caliper.Callout
                colorPalette="blue"
                anchors={[{ x: buttonWidth - boxEnd - arrowInk / 2, y: md.height / 2 }]}
                to={{ x: buttonWidth + mix(2, 6, note), y: md.height / 2 }}
              >
                <Caliper.CalloutLabel>{px(arrowInk)}</Caliper.CalloutLabel>
              </Caliper.Callout>
            </Box>
          )}

          <Caliper.Dimension
            enter="draw"
            delay={T.inkGuides / fps}
            order={0}
            colorPalette="blue"
            reach={md.iconTop}
            span={{ start: md.border, size: md.padding }}
          >
            <Caliper.DimensionLabel>{px(md.padding)}</Caliper.DimensionLabel>
          </Caliper.Dimension>
          <Caliper.Dimension
            enter="draw"
            delay={T.inkGuides / fps}
            order={1}
            colorPalette="blue"
            reach={md.iconTop}
            span={{ end: md.border, size: inkGap }}
          >
            <Caliper.DimensionLabel>{px(inkGap)}</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>
      </Caliper.Root>
    </Box>
  )
}
