import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type SpacerProperties, spacer } from "@isbatak/panda-ds/patterns"

const StyledSpacer = styled(ark.div)

export interface SpacerProps
  extends Omit<ComponentProps<typeof StyledSpacer>, keyof SpacerProperties>, SpacerProperties {}

export function Spacer(props: SpacerProps) {
  const [patternProps, rest] = splitProps(props, spacer.propKeys)
  return <StyledSpacer {...spacer.raw(patternProps)} {...rest} />
}
