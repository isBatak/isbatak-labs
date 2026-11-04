import { ark } from "@ark-ui/vue/factory"
import { type CenterProperties, center } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledCenter = styled(ark.div)

export interface CenterProps
  extends CenterProperties, Omit<ComponentProps<typeof StyledCenter>, keyof CenterProperties> {}

export const Center = defineComponent({
  name: "Center",
  inheritAttrs: false,
  props: patternProps(center.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => center.raw(props as Parameters<typeof center.raw>[0]))
    return () => h(StyledCenter, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<CenterProps>
