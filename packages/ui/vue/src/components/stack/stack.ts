import { ark } from "@ark-ui/vue/factory"
import {
  type StackProperties,
  type HstackProperties,
  type VstackProperties,
  stack,
  hstack,
  vstack,
} from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledStack = styled(ark.div)

export interface StackProps extends StackProperties, Omit<ComponentProps<typeof StyledStack>, keyof StackProperties> {}

export const Stack = defineComponent({
  name: "Stack",
  inheritAttrs: false,
  props: patternProps(stack.propKeys, ["separator"]),
  setup(props, { attrs, slots }) {
    const styles = computed(() => stack.raw(props as Parameters<typeof stack.raw>[0]))
    return () => h(StyledStack, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<StackProps>

const StyledHStack = styled(ark.div)

export interface HStackProps
  extends HstackProperties, Omit<ComponentProps<typeof StyledHStack>, keyof HstackProperties> {}

export const HStack = defineComponent({
  name: "HStack",
  inheritAttrs: false,
  props: patternProps(hstack.propKeys, ["separator"]),
  setup(props, { attrs, slots }) {
    const styles = computed(() => hstack.raw(props as Parameters<typeof hstack.raw>[0]))
    return () => h(StyledHStack, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<HStackProps>

const StyledVStack = styled(ark.div)

export interface VStackProps
  extends VstackProperties, Omit<ComponentProps<typeof StyledVStack>, keyof VstackProperties> {}

export const VStack = defineComponent({
  name: "VStack",
  inheritAttrs: false,
  props: patternProps(vstack.propKeys, ["separator"]),
  setup(props, { attrs, slots }) {
    const styles = computed(() => vstack.raw(props as Parameters<typeof vstack.raw>[0]))
    return () => h(StyledVStack, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<VStackProps>
