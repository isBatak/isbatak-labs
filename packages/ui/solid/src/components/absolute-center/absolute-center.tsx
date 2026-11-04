import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type AbsoluteCenterProperties, absoluteCenter } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledAbsoluteCenter = styled(ark.div)

export interface AbsoluteCenterProps
  extends Omit<ComponentProps<typeof StyledAbsoluteCenter>, keyof AbsoluteCenterProperties>, AbsoluteCenterProperties {}

export function AbsoluteCenter(props: AbsoluteCenterProps) {
  const [patternProps, rest] = splitProps(props, absoluteCenter.propKeys)
  const styles = createMemo(() => absoluteCenter.raw(patternProps))
  return <StyledAbsoluteCenter {...styles()} {...rest} />
}
