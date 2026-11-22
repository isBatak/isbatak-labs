import type { ComponentProps, ReactNode } from "react"
import { useCurrentFrame, useVideoConfig } from "remotion"

import { ease, settle, tween } from "../sourcery/lib/motion"
import * as Caliper from "./caliper"

const PAD = 3
const FAR = "50rem"
const LINE = 14
const EXTEND = 12
const LABEL = LINE + EXTEND - 4
const RISE = 8

type Span = { start?: number; end?: number; size: number }

function fromCenter(span: Span, t: number): Span {
  const inset = (span.size * (1 - t)) / 2
  if (span.start !== undefined) return { start: span.start + inset, size: span.size * t }
  return { end: (span.end ?? 0) + inset, size: span.size * t }
}

function extensionClip(extend: number) {
  return `inset(-${FAR} -${FAR} calc(${(1 - extend) * 100}% - ${(1 - extend) * PAD}px) -${FAR})`
}

function extensionClipBottom(extend: number) {
  return `inset(calc(${(1 - extend) * 100}% - ${(1 - extend) * PAD}px) -${FAR} -${FAR} -${FAR})`
}

type DrawnDimensionProps = Omit<ComponentProps<typeof Caliper.Dimension>, "children" | "span"> & {
  at: number
  span: Span
  children: ReactNode
}

export function DrawnDimension({ at, span, placement = "bottom", style, children, ...props }: DrawnDimensionProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  if (frame < at) return null

  const line = tween(frame, at, LINE, ease.inOut)
  const extend = tween(frame, at + LINE - 2, EXTEND, ease.out)
  const label = settle(frame, at + LABEL, fps)
  const top = placement === "top"

  return (
    <Caliper.Dimension
      placement={placement}
      span={fromCenter(span, line)}
      style={{ ...style, clipPath: top ? extensionClip(extend) : extensionClipBottom(extend) }}
      {...props}
    >
      <Caliper.DimensionLabel
        style={{ opacity: Math.min(1, label), transform: `translateY(${(1 - label) * (top ? RISE : -RISE)}px)` }}
      >
        {children}
      </Caliper.DimensionLabel>
    </Caliper.Dimension>
  )
}
