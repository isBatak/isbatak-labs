import { ark } from "@ark-ui/vue/factory"
import { type FloatProperties, float } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledFloat = styled(ark.div)

export interface FloatProps extends FloatProperties, Omit<ComponentProps<typeof StyledFloat>, keyof FloatProperties> {}

export const Float = defineComponent({
  name: "Float",
  inheritAttrs: false,
  props: patternProps(float.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => float.raw(props as Parameters<typeof float.raw>[0]))
    return () => h(StyledFloat, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<FloatProps>
