import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type CircleProperties, circle } from "@isbatak/panda-ds/patterns"

const StyledCircle = styled(ark.div)

export interface CircleProps
  extends Omit<ComponentProps<typeof StyledCircle>, keyof CircleProperties>, CircleProperties {}

export function Circle(props: CircleProps) {
  const [patternProps, rest] = splitProps(props, circle.propKeys)
  return <StyledCircle {...circle.raw(patternProps)} {...rest} />
}
