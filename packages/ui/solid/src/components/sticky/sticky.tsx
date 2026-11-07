import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type StickyProperties, sticky } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledSticky = styled(ark.div)

export interface StickyProps
  extends Omit<ComponentProps<typeof StyledSticky>, keyof StickyProperties>, StickyProperties {}

export function Sticky(props: StickyProps) {
  const [patternProps, rest] = splitProps(props, sticky.propKeys)
  const styles = createMemo(() => sticky.raw(patternProps))
  return <StyledSticky {...(styles() as ComponentProps<typeof StyledSticky>)} {...rest} />
}
