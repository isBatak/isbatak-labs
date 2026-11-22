import { Box } from "@isbatak/react-ui/box"
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion"

import { clamp, ease, mix, settle, tween } from "../../sourcery/lib/motion"
import { NewProjectButton } from "../button"
import * as Caliper from "../caliper"
import { DrawnDimension } from "../drawn-dimension"
import { LAYOUT, md, plusInk, px, shapeOf } from "../theme"
import { useTiming } from "../timing"

export function Stage() {
  const frame = useCurrentFrame()
  const { width, height, fps, durationInFrames } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]
  const T = useTiming().measure
  const slide = T.click + 6
  const settled = slide + T.slide

  const offset = interpolate(frame, [slide, settled], [0, md.offset], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  })
  const shown = Math.round(offset)
  const boxStart = md.border + md.padding - offset
  const inkGap = boxStart - md.border + plusInk

  const out = 1 - tween(frame, T.guidesOut, 18, ease.inOut)
  const boxGuides = frame >= T.boxGuides ? out : 0
  const iconBox = settle(frame, T.iconBox, fps) * out
  const emptyNote = settle(frame, T.emptyNote, fps) * (1 - tween(frame, T.click, 18))
  const inkGuides = frame >= T.inkGuides ? out : 0
  const blue = tween(frame, slide, T.slide, ease.inOut)

  const enter = tween(frame, 0, 18, ease.inOut) * (1 - tween(frame, durationInFrames - 18, 18, ease.inOut))
  const legend = iconBox

  return (
    <Box
      position="absolute"
      left="[50%]"
      style={{
        top: `${layout.top * 100}%`,
        opacity: enter,
        translate: "-50% -50%",
        scale: mix(0.92, 1, enter),
      }}
    >
      <Caliper.Root style={{ zoom: layout.zoom }}>
        <Box position="relative">
          <Caliper.Frame magnify={layout.magnify} annotated>
            <Caliper.Subject>
              <NewProjectButton offset={offset} />
            </Caliper.Subject>

            {boxGuides > 0.001 && (
              <Box style={{ opacity: boxGuides }}>
                <DrawnDimension
                  at={T.boxGuides}
                  placement="top"
                  reach={md.iconTop}
                  span={{ start: md.border, size: boxStart - md.border }}
                >
                  {px(md.padding - shown)}
                </DrawnDimension>
                <DrawnDimension
                  at={T.boxGuides + 6}
                  placement="top"
                  reach={md.iconTop}
                  span={{ end: md.border, size: md.padding }}
                >
                  {px(md.padding)}
                </DrawnDimension>
              </Box>
            )}

            {iconBox > 0.001 && (
              <Box style={{ opacity: iconBox }}>
                <Caliper.Outline
                  spanX={{ start: boxStart, size: md.icon }}
                  spanY={{ start: md.iconTop, size: md.icon }}
                />
                <Box style={{ opacity: 1 - blue }}>
                  <Caliper.Hatch
                    colorPalette="red"
                    spanX={{ start: boxStart, size: plusInk }}
                    spanY={{ start: md.iconTop, size: md.icon }}
                  />
                </Box>
                <Box style={{ opacity: blue }}>
                  <Caliper.Hatch
                    colorPalette="blue"
                    spanX={{ start: boxStart, size: plusInk }}
                    spanY={{ start: md.iconTop, size: md.icon }}
                  />
                </Box>
              </Box>
            )}

            {emptyNote > 0.001 && (
              <Box style={{ opacity: emptyNote }}>
                <Caliper.Callout
                  colorPalette="red"
                  anchors={[{ x: boxStart + plusInk / 2, y: md.height / 2 }]}
                  to={{ x: -mix(2, 6, emptyNote), y: md.height / 2 }}
                >
                  <Caliper.CalloutLabel>{px(plusInk)}</Caliper.CalloutLabel>
                </Caliper.Callout>
              </Box>
            )}

            {inkGuides * (1 - blue) > 0.001 && (
              <Box style={{ opacity: inkGuides * (1 - blue) }}>
                <DrawnDimension
                  at={T.inkGuides}
                  colorPalette="red"
                  reach={md.iconTop}
                  span={{ start: md.border, size: inkGap }}
                >
                  {px(md.padding - shown + plusInk)}
                </DrawnDimension>
                <DrawnDimension
                  at={T.inkGuides + 6}
                  colorPalette="red"
                  reach={md.iconTop}
                  span={{ end: md.border, size: md.padding }}
                >
                  {px(md.padding)}
                </DrawnDimension>
              </Box>
            )}
            {inkGuides * blue > 0.001 && (
              <Box style={{ opacity: inkGuides * blue }}>
                <DrawnDimension
                  at={T.inkGuides}
                  colorPalette="blue"
                  reach={md.iconTop}
                  span={{ start: md.border, size: inkGap }}
                >
                  {px(md.padding - shown + plusInk)}
                </DrawnDimension>
                <DrawnDimension
                  at={T.inkGuides + 6}
                  colorPalette="blue"
                  reach={md.iconTop}
                  span={{ end: md.border, size: md.padding }}
                >
                  {px(md.padding)}
                </DrawnDimension>
              </Box>
            )}
          </Caliper.Frame>

          {legend > 0.001 && (
            <Box position="absolute" top="[100%]" left="[50%]" pt="2" style={{ opacity: legend, translate: "-50% 0" }}>
              <Caliper.Legend flexWrap="nowrap" w="max-content">
                <Caliper.LegendItem>
                  <Caliper.LegendSwatch kind="dashed" />
                  Icon box
                </Caliper.LegendItem>
                <Caliper.LegendItem>
                  <Box position="relative" display="inline-flex">
                    <Caliper.LegendSwatch kind="hatch" colorPalette="red" style={{ opacity: 1 - blue }} />
                    <Box position="absolute" inset="0" display="inline-flex" style={{ opacity: blue }}>
                      <Caliper.LegendSwatch kind="hatch" colorPalette="blue" />
                    </Box>
                  </Box>
                  Empty space inside the icon
                </Caliper.LegendItem>
              </Caliper.Legend>
            </Box>
          )}
        </Box>
      </Caliper.Root>
    </Box>
  )
}
