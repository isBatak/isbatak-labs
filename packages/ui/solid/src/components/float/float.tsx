import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type FloatProperties, float } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledFloat = styled(ark.div)

export interface FloatProps extends Omit<ComponentProps<typeof StyledFloat>, keyof FloatProperties>, FloatProperties {}

export function Float(props: FloatProps) {
  const [patternProps, rest] = splitProps(props, float.propKeys)
  const styles = createMemo(() => float.raw(patternProps))
  return <StyledFloat {...(styles() as ComponentProps<typeof StyledFloat>)} {...rest} />
}
