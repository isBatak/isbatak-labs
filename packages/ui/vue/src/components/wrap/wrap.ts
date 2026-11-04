import { ark } from "@ark-ui/vue/factory"
import { type WrapProperties, wrap } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledWrap = styled(ark.div)

export interface WrapProps extends WrapProperties, Omit<ComponentProps<typeof StyledWrap>, keyof WrapProperties> {}

export const Wrap = defineComponent({
  name: "Wrap",
  inheritAttrs: false,
  props: patternProps(wrap.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => wrap.raw(props as Parameters<typeof wrap.raw>[0]))
    return () => h(StyledWrap, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<WrapProps>

export const WrapItem = styled(ark.div, {
  base: {
    display: "flex",
    alignItems: "flex-start",
  },
})
export type WrapItemProps = ComponentProps<typeof WrapItem>
