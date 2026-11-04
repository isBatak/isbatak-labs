import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type AspectRatioProperties, aspectRatio } from "@isbatak/panda-ds/patterns"

const StyledAspectRatio = styled(ark.div)

export interface AspectRatioProps
  extends Omit<ComponentProps<typeof StyledAspectRatio>, keyof AspectRatioProperties>, AspectRatioProperties {}

export function AspectRatio(props: AspectRatioProps) {
  const [patternProps, rest] = splitProps(props, aspectRatio.propKeys)
  return <StyledAspectRatio {...aspectRatio.raw(patternProps)} {...rest} />
}
