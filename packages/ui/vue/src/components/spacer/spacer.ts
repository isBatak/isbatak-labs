import { ark } from "@ark-ui/vue/factory"
import { type SpacerProperties, spacer } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledSpacer = styled(ark.div)

export interface SpacerProps
  extends SpacerProperties, Omit<ComponentProps<typeof StyledSpacer>, keyof SpacerProperties> {}

export const Spacer = defineComponent({
  name: "Spacer",
  inheritAttrs: false,
  props: patternProps(spacer.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => spacer.raw(props as Parameters<typeof spacer.raw>[0]))
    return () => h(StyledSpacer, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<SpacerProps>
