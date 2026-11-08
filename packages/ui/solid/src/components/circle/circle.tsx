import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type CircleProperties, circle } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledCircle = styled(ark.div)

export interface CircleProps
  extends Omit<ComponentProps<typeof StyledCircle>, keyof CircleProperties>, CircleProperties {}

export function Circle(props: CircleProps) {
  const [patternProps, rest] = splitProps(props, circle.propKeys)
  const styles = createMemo(() => circle.raw(patternProps))
  return <StyledCircle {...(styles() as ComponentProps<typeof StyledCircle>)} {...rest} />
}
