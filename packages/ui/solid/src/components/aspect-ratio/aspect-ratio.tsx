import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type AspectRatioProperties, aspectRatio } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledAspectRatio = styled(ark.div)

export interface AspectRatioProps
  extends Omit<ComponentProps<typeof StyledAspectRatio>, keyof AspectRatioProperties>, AspectRatioProperties {}

export function AspectRatio(props: AspectRatioProps) {
  const [patternProps, rest] = splitProps(props, aspectRatio.propKeys)
  const styles = createMemo(() => aspectRatio.raw(patternProps))
  return <StyledAspectRatio {...styles()} {...rest} />
}
