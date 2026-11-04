import { ark } from "@ark-ui/vue/factory"
import { type AbsoluteCenterProperties, absoluteCenter } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledAbsoluteCenter = styled(ark.div)

export interface AbsoluteCenterProps
  extends AbsoluteCenterProperties, Omit<ComponentProps<typeof StyledAbsoluteCenter>, keyof AbsoluteCenterProperties> {}

export const AbsoluteCenter = defineComponent({
  name: "AbsoluteCenter",
  inheritAttrs: false,
  props: patternProps(absoluteCenter.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => absoluteCenter.raw(props as Parameters<typeof absoluteCenter.raw>[0]))
    return () => h(StyledAbsoluteCenter, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<AbsoluteCenterProps>
