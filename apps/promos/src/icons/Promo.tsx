import { css } from "@isbatak/panda-ds/css"
import type { ReactNode } from "react"
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from "remotion"

import { clamp, ease, tween } from "../sourcery/lib/motion"

import { BoringSegment } from "./layers/boring"
import { FrameworksSegment } from "./layers/frameworks"
import { HookSegment } from "./layers/hook"
import { OutroSegment } from "./layers/outro"
import { SetupSegment } from "./layers/setup"
import { SwapSegment } from "./layers/swap"
import { Sprite } from "./sprite"
import { SEGMENTS } from "./theme"

const range = ({ from, duration }: { from: number; duration: number }) => ({ from, durationInFrames: duration })

const SHIFT = 12

function Shift({
  duration,
  enter = true,
  exit = true,
  children,
}: {
  duration: number
  enter?: boolean
  exit?: boolean
  children: ReactNode
}) {
  const frame = useCurrentFrame()
  const { width } = useVideoConfig()
  const into = enter ? tween(frame, 0, SHIFT) : 1
  const out = exit ? interpolate(frame, [duration - SHIFT, duration], [0, 1], { ...clamp, easing: ease.in }) : 0

  return (
    <AbsoluteFill style={{ translate: `${(1 - into - out) * width * 0.3}px 0`, opacity: Math.min(into, 1 - out) }}>
      {children}
    </AbsoluteFill>
  )
}

export function Promo() {
  return (
    <AbsoluteFill className={css({ bg: "bg", color: "fg", overflow: "hidden" })}>
      <Sprite />
      <Sequence name="1 · Hook" {...range(SEGMENTS.hook)} layout="none">
        <Shift duration={SEGMENTS.hook.duration} enter={false}>
          <HookSegment />
        </Shift>
      </Sequence>
      <Sequence name="2 · Boring Icons" {...range(SEGMENTS.boring)} layout="none">
        <Shift duration={SEGMENTS.boring.duration}>
          <BoringSegment />
        </Shift>
      </Sequence>
      <Sequence name="3 · Setup" {...range(SEGMENTS.setup)} layout="none">
        <Shift duration={SEGMENTS.setup.duration}>
          <SetupSegment />
        </Shift>
      </Sequence>
      <Sequence name="4 · Swap" {...range(SEGMENTS.swap)} layout="none">
        <Shift duration={SEGMENTS.swap.duration}>
          <SwapSegment />
        </Shift>
      </Sequence>
      <Sequence name="5 · Frameworks" {...range(SEGMENTS.frameworks)} layout="none">
        <Shift duration={SEGMENTS.frameworks.duration}>
          <FrameworksSegment />
        </Shift>
      </Sequence>
      <Sequence name="6 · Outro" {...range(SEGMENTS.outro)} layout="none">
        <Shift duration={SEGMENTS.outro.duration} exit={false}>
          <OutroSegment />
        </Shift>
      </Sequence>
    </AbsoluteFill>
  )
}
