import { Badge } from "@isbatak/react-ui/badge"
import { Box } from "@isbatak/react-ui/box"
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion"

import { clamp, ease, mix, settle, tween } from "../../sourcery/lib/motion"
import { NewProjectButton } from "../button"
import * as Caliper from "../caliper"
import { LAYOUT, md, plusInk, px, shapeOf, T } from "../theme"

export function Stage() {
  const frame = useCurrentFrame()
  const { width, height, fps } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]

  const offset = interpolate(frame, [T.slide, T.settled], [0, md.offset], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  })
  const shown = Math.round(offset)
  const boxStart = md.border + md.padding - offset
  const inkGap = boxStart - md.border + plusInk

  const out = 1 - tween(frame, T.guidesOut, T.shrink - T.guidesOut, ease.inOut)
  const boxGuides = settle(frame, T.boxGuides, fps) * out
  const iconBox = settle(frame, T.iconBox, fps) * out
  const emptyNote = settle(frame, T.emptyNote, fps) * (1 - tween(frame, T.click, 18))
  const inkGuides = settle(frame, T.inkGuides, fps) * out
  const blue = tween(frame, T.slide, T.settled - T.slide, ease.inOut)

  const shrink = tween(frame, T.shrink, T.shrunk - T.shrink, ease.inOut)
  const magnify = mix(layout.magnify, layout.compare, shrink)
  const top = mix(layout.top, layout.compareTop, shrink)
  const compare = settle(frame, T.compare, fps)
  const optical = settle(frame, T.compare + 12, fps)

  return (
    <Box position="absolute" left="[50%]" translate="[-50% -50%]" style={{ top: `${top * 100}%` }}>
      <Caliper.Root style={{ zoom: layout.zoom }}>
        <Box position="relative">
          <Box
            position="absolute"
            bottom="[100%]"
            left="0"
            pb="5"
            style={{ opacity: compare, translate: `0 ${(1 - compare) * 12}px` }}
          >
            <Box position="relative">
              <Badge
                variant="solid"
                colorPalette="gray"
                size="md"
                position="absolute"
                right="[100%]"
                top="[50%]"
                translate="[-1rem -50%]"
              >
                Equal
              </Badge>
              <Caliper.Frame magnify={layout.compare}>
                <Caliper.Subject>
                  <NewProjectButton offset={0} />
                </Caliper.Subject>
              </Caliper.Frame>
            </Box>
          </Box>

          <Badge
            variant="solid"
            colorPalette="blue"
            size="md"
            position="absolute"
            right="[100%]"
            top="[50%]"
            translate="[-1rem -50%]"
            style={{ opacity: optical }}
          >
            Optical
          </Badge>

          <Caliper.Frame magnify={magnify} annotated={frame < T.shrink}>
            <Caliper.Subject>
              <NewProjectButton offset={offset} />
            </Caliper.Subject>

            {boxGuides > 0.001 && (
              <Box style={{ opacity: boxGuides }}>
                <Caliper.Dimension
                  placement="top"
                  reach={md.iconTop}
                  span={{ start: md.border, size: boxStart - md.border }}
                >
                  <Caliper.DimensionLabel>{px(md.padding - shown)} to the box</Caliper.DimensionLabel>
                </Caliper.Dimension>
                <Caliper.Dimension placement="top" reach={md.iconTop} span={{ end: md.border, size: md.padding }}>
                  <Caliper.DimensionLabel>{px(md.padding)} to the box</Caliper.DimensionLabel>
                </Caliper.Dimension>
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
              <Box
                position="absolute"
                right="[100%]"
                top="[50%]"
                style={{ opacity: emptyNote, translate: `${(emptyNote - 1) * 16}px 0` }}
              >
                <Caliper.DimensionLabel colorPalette="red" right="6" translate="[0 -50%]">
                  {px(plusInk)} empty inside the icon
                </Caliper.DimensionLabel>
              </Box>
            )}

            {inkGuides * (1 - blue) > 0.001 && (
              <Box style={{ opacity: inkGuides * (1 - blue) }}>
                <Caliper.Dimension colorPalette="red" reach={md.iconTop} span={{ start: md.border, size: inkGap }}>
                  <Caliper.DimensionLabel>{px(md.padding - shown + plusInk)} to the ink</Caliper.DimensionLabel>
                </Caliper.Dimension>
                <Caliper.Dimension colorPalette="red" reach={md.iconTop} span={{ end: md.border, size: md.padding }}>
                  <Caliper.DimensionLabel>{px(md.padding)} to the ink</Caliper.DimensionLabel>
                </Caliper.Dimension>
              </Box>
            )}
            {inkGuides * blue > 0.001 && (
              <Box style={{ opacity: inkGuides * blue }}>
                <Caliper.Dimension colorPalette="blue" reach={md.iconTop} span={{ start: md.border, size: inkGap }}>
                  <Caliper.DimensionLabel>{px(md.padding - shown + plusInk)} to the ink</Caliper.DimensionLabel>
                </Caliper.Dimension>
                <Caliper.Dimension colorPalette="blue" reach={md.iconTop} span={{ end: md.border, size: md.padding }}>
                  <Caliper.DimensionLabel>{px(md.padding)} to the ink</Caliper.DimensionLabel>
                </Caliper.Dimension>
              </Box>
            )}
          </Caliper.Frame>
        </Box>
      </Caliper.Root>
    </Box>
  )
}
