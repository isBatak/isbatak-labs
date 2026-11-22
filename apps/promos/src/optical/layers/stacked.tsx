import { css, cx } from "@isbatak/panda-ds/css"
import type { IconName } from "@isbatak/icons"
import { Box } from "@isbatak/react-ui/box"
import { Button } from "@isbatak/react-ui/button"
import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Span } from "@isbatak/react-ui/span"
import { VStack } from "@isbatak/react-ui/stack"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, mix, settle, tween } from "../../sourcery/lib/motion"
import * as Caliper from "../caliper"
import { Picker } from "../picker"
import { LAYOUT, md, shapeOf } from "../theme"
import { useTiming } from "../timing"

const guide = css({ borderRightWidth: "0", translate: "[calc(var(--caliper-stroke) / -2) 0]" })
const centerGuide = css({ borderColor: { base: "yellow.600", _dark: "yellow.400" } })

const rowStep = md.height + 8
const stackHeight = md.height * 3 + 16
const iconCenterX = md.border + md.padding - md.offset + md.icon / 2

function StackButton({ icon, shift, children }: { icon: IconName; shift: number; children: string }) {
  return (
    <Button variant="outline" colorPalette="gray" justifyContent="flex-start" data-hover tabIndex={-1}>
      <StartIcon asChild offset={`${shift}px`}>
        <Icon name={icon} />
      </StartIcon>
      {children}
    </Button>
  )
}

function IconMarks({ row, shift, box, gap }: { row: number; shift: number; box: number; gap: number }) {
  const x = iconCenterX - md.icon / 2 - shift
  const y = rowStep * row + md.iconTop

  return (
    <>
      <Box style={{ opacity: box }}>
        <Caliper.Outline spanX={{ start: x, size: md.icon }} spanY={{ start: y, size: md.icon }} />
      </Box>
      <Box style={{ opacity: gap }}>
        <Caliper.Hatch
          colorPalette="pink"
          spanX={{ start: x + md.icon, size: 8 }}
          spanY={{ start: y, size: md.icon }}
        />
      </Box>
    </>
  )
}

export function StackedScene() {
  const frame = useCurrentFrame()
  const { width, height, fps, durationInFrames } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]
  const T = useTiming().stacked

  const enter = tween(frame, 0, 18, ease.inOut) * (1 - tween(frame, durationInFrames - 18, 18, ease.inOut))
  const ink = 1 - tween(frame, T.change, T.slide, ease.inOut)
  const shift = (units: number) => ((md.icon * units) / 24 - md.offset) * ink
  const box = (row: number) => settle(frame, T.iconBox + row * 6, fps)
  const gap = (row: number) => settle(frame, T.gap + row * 6, fps)
  const labelGuide = tween(frame, T.labelGuide, 30, ease.inOut)
  const guides = settle(frame, T.guides, fps)
  const center = settle(frame, T.guides + 6, fps)
  const guideY = { start: -8, size: stackHeight + 16 }

  return (
    <>
      <Box
        position="absolute"
        left="[50%]"
        style={{
          top: `${layout.stackTop * 100}%`,
          opacity: enter,
          translate: "-50% -50%",
          scale: mix(0.92, 1, enter),
        }}
      >
        <Caliper.Root style={{ zoom: layout.zoom }}>
          <Caliper.Frame magnify={layout.stack}>
            <Caliper.Subject>
              <VStack gap="2" alignItems="stretch" w="60">
                <StackButton icon="plus" shift={shift(5.25)}>
                  New project
                </StackButton>
                <StackButton icon="share" shift={shift(2.25)}>
                  Share
                </StackButton>
                <StackButton icon="settings" shift={shift(1.25)}>
                  Settings
                </StackButton>
              </VStack>
            </Caliper.Subject>
            {labelGuide > 0 && (
              <Caliper.Outline
                className={guide}
                colorPalette="blue"
                spanX={{ start: md.border + md.padding - md.offset + md.icon + 8, size: 0 }}
                spanY={{ start: guideY.start, size: guideY.size * labelGuide }}
              />
            )}
            <Box style={{ opacity: guides }}>
              <Caliper.Outline
                className={guide}
                colorPalette="red"
                spanX={{ start: md.border + md.padding, size: 0 }}
                spanY={guideY}
              />
            </Box>
            <IconMarks row={0} shift={shift(5.25)} box={box(0)} gap={gap(0)} />
            <IconMarks row={1} shift={shift(2.25)} box={box(1)} gap={gap(1)} />
            <IconMarks row={2} shift={shift(1.25)} box={box(2)} gap={gap(2)} />
            <Box style={{ opacity: center }}>
              <Caliper.Outline
                className={cx(guide, centerGuide)}
                colorPalette="yellow"
                spanX={{ start: iconCenterX, size: 0 }}
                spanY={guideY}
              />
            </Box>
          </Caliper.Frame>
        </Caliper.Root>
      </Box>

      <Picker label="Pull" first="ink" second="fixed" change={T.change}>
        <SegmentGroup.Item value="ink" h="auto" py="2" flexDirection="column" gap="0.5">
          <SegmentGroup.ItemText>To the ink</SegmentGroup.ItemText>
          <Span display="inline-flex" alignItems="center" gap="1" color="fg.muted" fontWeight="normal">
            <Icon name="close" color="fg.error" />
            Labels drift
          </Span>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="fixed" h="auto" py="2" flexDirection="column" gap="0.5">
          <SegmentGroup.ItemText>Fixed pull</SegmentGroup.ItemText>
          <Span display="inline-flex" alignItems="center" gap="1" color="fg.muted" fontWeight="normal">
            <Icon name="check" color="fg.success" />
            Labels line up
          </Span>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </Picker>
    </>
  )
}
