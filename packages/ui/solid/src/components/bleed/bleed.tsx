import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type BleedProperties, bleed } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledBleed = styled(ark.div)

export interface BleedProps extends Omit<ComponentProps<typeof StyledBleed>, keyof BleedProperties>, BleedProperties {}

export function Bleed(props: BleedProps) {
  const [patternProps, rest] = splitProps(props, bleed.propKeys)
  const styles = createMemo(() => bleed.raw(patternProps))
  return <StyledBleed {...styles()} {...rest} />
}
