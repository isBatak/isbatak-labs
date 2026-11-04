import { ark } from "@ark-ui/vue/factory"
import { type BleedProperties, bleed } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledBleed = styled(ark.div)

export interface BleedProps extends BleedProperties, Omit<ComponentProps<typeof StyledBleed>, keyof BleedProperties> {}

export const Bleed = defineComponent({
  name: "Bleed",
  inheritAttrs: false,
  props: patternProps(bleed.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => bleed.raw(props as Parameters<typeof bleed.raw>[0]))
    return () => h(StyledBleed, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<BleedProps>
