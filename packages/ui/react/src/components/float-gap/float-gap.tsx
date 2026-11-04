import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type FloatGapProperties, floatGap } from "@isbatak/panda-ds/patterns"

const StyledFloatGap = styled(ark.span)

export interface FloatGapProps
  extends Omit<ComponentProps<typeof StyledFloatGap>, keyof FloatGapProperties>, FloatGapProperties {}

export function FloatGap(props: FloatGapProps) {
  const [patternProps, rest] = splitProps(props, floatGap.propKeys)
  return <StyledFloatGap {...floatGap.raw(patternProps)} {...rest} />
}
