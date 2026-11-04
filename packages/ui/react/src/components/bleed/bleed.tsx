import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type BleedProperties, bleed } from "@isbatak/panda-ds/patterns"

const StyledBleed = styled(ark.div)

export interface BleedProps extends Omit<ComponentProps<typeof StyledBleed>, keyof BleedProperties>, BleedProperties {}

export function Bleed(props: BleedProps) {
  const [patternProps, rest] = splitProps(props, bleed.propKeys)
  return <StyledBleed {...bleed.raw(patternProps)} {...rest} />
}
