import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type StickyProperties, sticky } from "@isbatak/panda-ds/patterns"

const StyledSticky = styled(ark.div)

export interface StickyProps
  extends Omit<ComponentProps<typeof StyledSticky>, keyof StickyProperties>, StickyProperties {}

export function Sticky(props: StickyProps) {
  const [patternProps, rest] = splitProps(props, sticky.propKeys)
  return <StyledSticky {...sticky.raw(patternProps)} {...rest} />
}
