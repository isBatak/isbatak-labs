import { Box } from "@isbatak/react-ui/box"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { css } from "@isbatak/panda-ds/css"
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion"

import { clamp, ease, mix, tween } from "../../sourcery/lib/motion"
import { LAYOUT, shapeOf, T } from "../theme"

const cursorClass = css({ fill: "fg", stroke: "bg", strokeWidth: "1.25", strokeLinejoin: "round" })

function Cursor({ hand }: { hand: boolean }) {
  if (hand) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" className={cursorClass}>
        <path d="M8.5 2.75a1.5 1.5 0 0 1 3 0V9.5h.5V8.25a1.5 1.5 0 0 1 3 0V9.5h.5v-.75a1.5 1.5 0 0 1 3 0V10.5h.25a1.5 1.5 0 0 1 3 0v4.75c0 3.6-2.6 6.5-6.5 6.5h-1.25c-2.3 0-3.9-1-5.2-2.8l-3.6-4.7a1.6 1.6 0 0 1 2.4-2.1L8.5 14V2.75z" />
      </svg>
    )
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className={cursorClass}>
      <path d="M4.5 2.5v17l4.6-4.4 2.9 6.6 2.8-1.2-2.9-6.5h6.4z" />
    </svg>
  )
}

export function Toggle() {
  const frame = useCurrentFrame()
  const { width, height } = useVideoConfig()
  const layout = LAYOUT[shapeOf(width, height)]

  const away = 1 - tween(frame, T.reach, T.click - 6 - T.reach, ease.inOut) + tween(frame, T.release, 48, ease.inOut)
  const press = interpolate(frame, [T.click - 4, T.click, T.click + 6], [1, 0.82, 1], clamp)
  const hand = away < 0.2
  const value = frame >= T.click ? "optical" : "equal"

  return (
    <Box
      position="absolute"
      left="[50%]"
      translate="[-50% -50%]"
      style={{ top: `${layout.toggleTop * 100}%`, zoom: layout.toggleZoom }}
    >
      <Box position="relative">
        <SegmentGroup.Root size="sm" orientation="horizontal" value={value} aria-label="Alignment">
          <SegmentGroup.Indicator />
          <SegmentGroup.Item value="equal">
            <SegmentGroup.ItemText>Equal</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
          <SegmentGroup.Item value="optical">
            <SegmentGroup.ItemText>Optical</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        </SegmentGroup.Root>
        <Box
          position="absolute"
          style={{
            left: `calc(${mix(72, 100, away)}% + ${mix(-6, 180, away)}px)`,
            top: `calc(50% + ${mix(-6, -40, away)}px)`,
            scale: press,
            transformOrigin: "top left",
          }}
        >
          <Cursor hand={hand} />
        </Box>
      </Box>
    </Box>
  )
}
