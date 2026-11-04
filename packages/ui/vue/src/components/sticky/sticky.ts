import { ark } from "@ark-ui/vue/factory"
import { type StickyProperties, sticky } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledSticky = styled(ark.div)

export interface StickyProps
  extends StickyProperties, Omit<ComponentProps<typeof StyledSticky>, keyof StickyProperties> {}

export const Sticky = defineComponent({
  name: "Sticky",
  inheritAttrs: false,
  props: patternProps(sticky.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => sticky.raw(props as Parameters<typeof sticky.raw>[0]))
    return () => h(StyledSticky, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<StickyProps>
