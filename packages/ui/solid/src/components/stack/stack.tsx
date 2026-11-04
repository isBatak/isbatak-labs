import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import {
  type StackProperties,
  type HstackProperties,
  type VstackProperties,
  stack,
  hstack,
  vstack,
} from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledStack = styled(ark.div)

export interface StackProps extends Omit<ComponentProps<typeof StyledStack>, keyof StackProperties>, StackProperties {}

export function Stack(props: StackProps) {
  const [patternProps, rest] = splitProps(props, stack.propKeys)
  const styles = createMemo(() => stack.raw(patternProps))
  return <StyledStack {...styles()} {...rest} />
}

const StyledHStack = styled(ark.div)

export interface HStackProps
  extends Omit<ComponentProps<typeof StyledHStack>, keyof HstackProperties>, HstackProperties {}

export function HStack(props: HStackProps) {
  const [patternProps, rest] = splitProps(props, hstack.propKeys)
  const styles = createMemo(() => hstack.raw(patternProps))
  return <StyledHStack {...styles()} {...rest} />
}

const StyledVStack = styled(ark.div)

export interface VStackProps
  extends Omit<ComponentProps<typeof StyledVStack>, keyof VstackProperties>, VstackProperties {}

export function VStack(props: VStackProps) {
  const [patternProps, rest] = splitProps(props, vstack.propKeys)
  const styles = createMemo(() => vstack.raw(patternProps))
  return <StyledVStack {...styles()} {...rest} />
}
