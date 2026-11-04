import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type WrapProperties, wrap } from "@isbatak/panda-ds/patterns"

const StyledWrap = styled(ark.div)

export interface WrapProps extends Omit<ComponentProps<typeof StyledWrap>, keyof WrapProperties>, WrapProperties {}

export function Wrap(props: WrapProps) {
  const [patternProps, rest] = splitProps(props, wrap.propKeys)
  return <StyledWrap {...wrap.raw(patternProps)} {...rest} />
}

export const WrapItem = styled(ark.div, {
  base: {
    display: "flex",
    alignItems: "flex-start",
  },
})
export type WrapItemProps = ComponentProps<typeof WrapItem>
