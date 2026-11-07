import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type WrapProperties, wrap } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledWrap = styled(ark.div)

export interface WrapProps extends Omit<ComponentProps<typeof StyledWrap>, keyof WrapProperties>, WrapProperties {}

export function Wrap(props: WrapProps) {
  const [patternProps, rest] = splitProps(props, wrap.propKeys)
  const styles = createMemo(() => wrap.raw(patternProps))
  return <StyledWrap {...(styles() as ComponentProps<typeof StyledWrap>)} {...rest} />
}

export const WrapItem = styled(ark.div, {
  base: {
    display: "flex",
    alignItems: "flex-start",
  },
})
export type WrapItemProps = ComponentProps<typeof WrapItem>
