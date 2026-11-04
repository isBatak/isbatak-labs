import { ark } from "@ark-ui/vue/factory"
import { type FloatGapProperties, floatGap } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledFloatGap = styled(ark.span)

export interface FloatGapProps
  extends FloatGapProperties, Omit<ComponentProps<typeof StyledFloatGap>, keyof FloatGapProperties> {}

export const FloatGap = defineComponent({
  name: "FloatGap",
  inheritAttrs: false,
  props: patternProps(floatGap.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => floatGap.raw(props as Parameters<typeof floatGap.raw>[0]))
    return () => h(StyledFloatGap, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<FloatGapProps>
