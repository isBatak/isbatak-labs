import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type FloatGapProperties, floatGap } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledFloatGap = styled(ark.span)

export interface FloatGapProps
  extends Omit<ComponentProps<typeof StyledFloatGap>, keyof FloatGapProperties>, FloatGapProperties {}

export function FloatGap(props: FloatGapProps) {
  const [patternProps, rest] = splitProps(props, floatGap.propKeys)
  const styles = createMemo(() => floatGap.raw(patternProps))
  return <StyledFloatGap {...(styles() as ComponentProps<typeof StyledFloatGap>)} {...rest} />
}
