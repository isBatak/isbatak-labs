import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type CenterProperties, center } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledCenter = styled(ark.div)

export interface CenterProps
  extends Omit<ComponentProps<typeof StyledCenter>, keyof CenterProperties>, CenterProperties {}

export function Center(props: CenterProps) {
  const [patternProps, rest] = splitProps(props, center.propKeys)
  const styles = createMemo(() => center.raw(patternProps))
  return <StyledCenter {...(styles() as ComponentProps<typeof StyledCenter>)} {...rest} />
}
