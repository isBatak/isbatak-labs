import { Box } from "@isbatak/react-ui/box"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { type ReactNode, useLayoutEffect, useRef, useState } from "react"
import { continueRender, delayRender, useCurrentFrame, useVideoConfig } from "remotion"

import { ease, mix, tween } from "../sourcery/lib/motion"
import { LAYOUT, shapeOf } from "./theme"

interface PickerProps {
  label: string
  first: string
  second: string
  change: number
  children: ReactNode
}

interface Slot {
  left: number
  width: number
}

function slotOf(node: Element | undefined): Slot | null {
  return node instanceof HTMLElement ? { left: node.offsetLeft, width: node.offsetWidth } : null
}

export function Picker({ label, first, second, change, children }: PickerProps) {
  const frame = useCurrentFrame()
  const { width, height, durationInFrames } = useVideoConfig()
  const [slots, setSlots] = useState<[Slot, Slot] | null>(null)
  const [handle] = useState(() => delayRender("Measure segment items"))
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let request = 0
    const measure = () => {
      const items = root.current?.querySelectorAll('[data-slot="item"]')
      const from = slotOf(items?.[0])
      const to = slotOf(items?.[1])
      if (!from || !to) {
        request = window.setTimeout(measure, 16)
        return
      }
      setSlots([from, to])
      continueRender(handle)
    }
    measure()
    return () => window.clearTimeout(request)
  }, [handle])

  const enter = tween(frame, 6, 18, ease.inOut) * (1 - tween(frame, durationInFrames - 18, 18, ease.inOut))
  const layout = LAYOUT[shapeOf(width, height)]
  const slide = tween(frame, change, 18, ease.inOut)

  return (
    <Box
      position="absolute"
      left="[50%]"
      style={{
        top: `${layout.toggleTop * 100}%`,
        zoom: layout.toggleZoom,
        opacity: enter,
        translate: `-50% calc(-50% + ${(1 - enter) * 16}px)`,
      }}
    >
      <div ref={root}>
        <SegmentGroup.Root
          size="sm"
          orientation="horizontal"
          fitted
          w="80"
          value={slide >= 0.5 ? second : first}
          aria-label={label}
        >
          <SegmentGroup.Indicator
            style={
              slots
                ? {
                    left: mix(slots[0].left, slots[1].left, slide),
                    width: mix(slots[0].width, slots[1].width, slide),
                  }
                : undefined
            }
          />
          {children}
        </SegmentGroup.Root>
      </div>
    </Box>
  )
}
