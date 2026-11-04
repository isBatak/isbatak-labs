import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type AbsoluteCenterProperties, absoluteCenter } from "@isbatak/panda-ds/patterns"

const StyledAbsoluteCenter = styled(ark.div)

export interface AbsoluteCenterProps
  extends Omit<ComponentProps<typeof StyledAbsoluteCenter>, keyof AbsoluteCenterProperties>, AbsoluteCenterProperties {}

export function AbsoluteCenter(props: AbsoluteCenterProps) {
  const [patternProps, rest] = splitProps(props, absoluteCenter.propKeys)
  return <StyledAbsoluteCenter {...absoluteCenter.raw(patternProps)} {...rest} />
}
