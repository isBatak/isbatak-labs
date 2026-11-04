import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type FlexProperties, flex } from "@isbatak/panda-ds/patterns"

const StyledFlex = styled(ark.div)

export interface FlexProps extends Omit<ComponentProps<typeof StyledFlex>, keyof FlexProperties>, FlexProperties {}

export function Flex(props: FlexProps) {
  const [patternProps, rest] = splitProps(props, flex.propKeys)
  return <StyledFlex {...flex.raw(patternProps)} {...rest} />
}
