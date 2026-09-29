import type { ReactNode } from "react"
import { interpolate, interpolateColors } from "remotion"
import { css } from "@isbatak/panda-ds/css"
import { HStack, Stack, styled } from "@isbatak/panda-ds/jsx"

import { clamp } from "../lib/motion"
import { sourcery } from "../theme"

const cap = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: "1px",
  bg: "bg.subtle",
  fontFamily: "mono",
  fontWeight: "medium",
  color: "fg",
  lineHeight: "1",
})

interface KeyProps {
  children: ReactNode
  hint: string
  size: number
  enter: number
  down: number
  accent?: string
}

export function Key({ children, hint, size, enter, down, accent = sourcery.violet }: KeyProps) {
  const border = interpolateColors(down, [0, 1], ["#e4e4e7", accent])
  return (
    <Stack
      gap="0"
      alignItems="center"
      style={{
        opacity: interpolate(enter, [0, 0.4], [0, 1], clamp),
        transform: `translateY(${(1 - enter) * size * 0.7}px) scale(${0.6 + enter * 0.4})`,
      }}
    >
      <div
        className={cap}
        style={{
          minWidth: size,
          height: size,
          padding: `0 ${size * 0.22}px`,
          fontSize: size * 0.46,
          borderColor: border,
          borderBottomWidth: 2 + (1 - down) * size * 0.06,
          background: interpolateColors(down, [0, 1], ["#fafafa", "#f4f4f5"]),
          color: interpolateColors(down, [0, 1], ["#18181b", accent]),
          transform: `translateY(${down * size * 0.06}px)`,
          boxShadow: `0 ${size * 0.12 * (1 - down)}px ${size * 0.3}px -${size * 0.12}px rgba(15, 15, 30, 0.25)`,
        }}
      >
        {children}
      </div>
      <styled.span
        fontFamily="mono"
        textTransform="uppercase"
        letterSpacing="widest"
        color="fg.subtle"
        style={{ fontSize: size * 0.14, marginTop: size * 0.18 }}
      >
        {hint}
      </styled.span>
    </Stack>
  )
}

export function Plus({ size, opacity }: { size: number; opacity: number }) {
  return (
    <styled.span
      color="fg.subtle"
      fontWeight="light"
      style={{ fontSize: size * 0.4, opacity, marginBottom: size * 0.32 }}
    >
      +
    </styled.span>
  )
}

export function KeyRow({ children, size }: { children: ReactNode; size: number }) {
  return (
    <HStack alignItems="center" justify="center" style={{ gap: size * 0.2 }}>
      {children}
    </HStack>
  )
}
