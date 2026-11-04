import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type FloatProperties, float } from "@isbatak/panda-ds/patterns"

const StyledFloat = styled(ark.div)

export interface FloatProps extends Omit<ComponentProps<typeof StyledFloat>, keyof FloatProperties>, FloatProperties {}

export function Float(props: FloatProps) {
  const [patternProps, rest] = splitProps(props, float.propKeys)
  return <StyledFloat {...float.raw(patternProps)} {...rest} />
}
