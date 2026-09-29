import type { ComponentProps, ReactNode } from "react"
import { interpolate } from "remotion"
import { styled } from "@isbatak/panda-ds/jsx"

import { clamp, ease, type Rect, tween } from "../lib/motion"
import { format, locate } from "../lib/source"
import { T } from "../theme"
import hookSource from "./hook.tsx?raw"

const HOOK_FILE = "src/stage/hook.tsx"

export const HOOK_LABELS = [
  `h2  ${format(HOOK_FILE, locate(hookSource, "<Word at={T.hookWords[0]}"))}`,
  `h2  ${format(HOOK_FILE, locate(hookSource, "<Word at={T.hookWords[1]}"))}`,
  `h2  ${format(HOOK_FILE, locate(hookSource, "<Word at={T.hookWords[2]}"))}`,
]

export function hookRect(viewport: { width: number; height: number }): Rect {
  const tall = viewport.height > viewport.width
  const w = tall ? 920 : 1180
  const h = tall ? 220 : 260
  return { x: (viewport.width - w) / 2, y: (viewport.height - h) / 2, w, h }
}

interface WordProps extends ComponentProps<typeof styled.h2> {
  at: number
  until: number
  frame: number
  size: number
  children: ReactNode
}

function Word({ at, until, frame, size, children, ...rest }: WordProps) {
  const enter = tween(frame, at, 10, ease.out)
  const exit = tween(frame, until, 8, ease.out)
  if (frame < at || frame > until + 8) return null
  return (
    <styled.h2
      {...rest}
      position="absolute"
      inset="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontWeight="medium"
      letterSpacing="tighter"
      lineHeight="1"
      color="fg"
      style={{
        fontSize: size,
        transform: `translateY(${(1 - enter) * 60 - exit * 60}%)`,
        opacity: tween(frame, at + 1, 8) * (1 - tween(frame, until, 5)),
        filter: `blur(${(1 - enter) * 8 + exit * 8}px)`,
      }}
    >
      {children}
    </styled.h2>
  )
}

export function Hook({ frame, viewport }: { frame: number; viewport: { width: number; height: number } }) {
  if (frame > T.hookExpand + 10) return null
  const rect = hookRect(viewport)
  const size = viewport.height > viewport.width ? 150 : 190
  const fade = interpolate(frame, [T.hookExpand - 2, T.hookExpand + 6], [1, 0], clamp)

  return (
    <div
      style={{
        position: "absolute",
        left: rect.x,
        top: rect.y,
        width: rect.w,
        height: rect.h,
        overflow: "hidden",
        opacity: fade,
      }}
    >
      <Word at={T.hookWords[0]} until={T.hookWords[1]} frame={frame} size={size}>
        See it.
      </Word>
      <Word at={T.hookWords[1]} until={T.hookWords[2]} frame={frame} size={size}>
        Click it.
      </Word>
      <Word at={T.hookWords[2]} until={T.hookExpand + 20} frame={frame} size={size}>
        Open it.
      </Word>
    </div>
  )
}
