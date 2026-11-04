import { ark } from "@ark-ui/vue/factory"
import { type CircleProperties, circle } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledCircle = styled(ark.div)

export interface CircleProps
  extends CircleProperties, Omit<ComponentProps<typeof StyledCircle>, keyof CircleProperties> {}

export const Circle = defineComponent({
  name: "Circle",
  inheritAttrs: false,
  props: patternProps(circle.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => circle.raw(props as Parameters<typeof circle.raw>[0]))
    return () => h(StyledCircle, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<CircleProps>
