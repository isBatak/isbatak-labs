import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type FlexProperties, flex } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledFlex = styled(ark.div)

export interface FlexProps extends Omit<ComponentProps<typeof StyledFlex>, keyof FlexProperties>, FlexProperties {}

export function Flex(props: FlexProps) {
  const [patternProps, rest] = splitProps(props, flex.propKeys)
  const styles = createMemo(() => flex.raw(patternProps))
  return <StyledFlex {...styles()} {...rest} />
}
