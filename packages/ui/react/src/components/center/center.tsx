import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type CenterProperties, center } from "@isbatak/panda-ds/patterns"

const StyledCenter = styled(ark.div)

export interface CenterProps
  extends Omit<ComponentProps<typeof StyledCenter>, keyof CenterProperties>, CenterProperties {}

export function Center(props: CenterProps) {
  const [patternProps, rest] = splitProps(props, center.propKeys)
  return <StyledCenter {...center.raw(patternProps)} {...rest} />
}
