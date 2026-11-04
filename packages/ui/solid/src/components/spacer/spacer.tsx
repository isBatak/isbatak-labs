import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type SpacerProperties, spacer } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledSpacer = styled(ark.div)

export interface SpacerProps
  extends Omit<ComponentProps<typeof StyledSpacer>, keyof SpacerProperties>, SpacerProperties {}

export function Spacer(props: SpacerProps) {
  const [patternProps, rest] = splitProps(props, spacer.propKeys)
  const styles = createMemo(() => spacer.raw(patternProps))
  return <StyledSpacer {...styles()} {...rest} />
}
