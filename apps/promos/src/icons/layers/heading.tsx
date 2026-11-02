import { css } from "@isbatak/panda-ds/css"
import { styled } from "@isbatak/panda-ds/jsx"
import { heading, type HeadingVariantProps } from "@isbatak/panda-ds/recipes"
import type { ReactNode } from "react"
import { useCurrentFrame } from "remotion"

import { tween } from "../../sourcery/lib/motion"
import { Rise } from "../../sourcery/stage/caption"

export function Heading({
  at,
  size = "6xl",
  children,
}: {
  at: number
  size?: HeadingVariantProps["size"]
  children: ReactNode
}) {
  const frame = useCurrentFrame()
  return (
    <styled.h2 className={heading({ size })} letterSpacing="tight" lineHeight="1.05">
      <Rise progress={tween(frame, at, 22)}>{children}</Rise>
    </styled.h2>
  )
}

const LINE_STYLES = {
  xl: css({ textStyle: "xl" }),
  "2xl": css({ textStyle: "2xl" }),
  "3xl": css({ textStyle: "3xl" }),
}

export function Line({
  at,
  textStyle = "xl",
  children,
}: {
  at: number
  textStyle?: keyof typeof LINE_STYLES
  children: ReactNode
}) {
  const frame = useCurrentFrame()
  return (
    <styled.p className={LINE_STYLES[textStyle]} color="fg.muted">
      <Rise progress={tween(frame, at, 22)}>{children}</Rise>
    </styled.p>
  )
}
