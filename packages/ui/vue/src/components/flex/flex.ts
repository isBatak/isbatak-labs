import { ark } from "@ark-ui/vue/factory"
import { type FlexProperties, flex } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledFlex = styled(ark.div)

export interface FlexProps extends FlexProperties, Omit<ComponentProps<typeof StyledFlex>, keyof FlexProperties> {}

export const Flex = defineComponent({
  name: "Flex",
  inheritAttrs: false,
  props: patternProps(flex.propKeys, ["inline"]),
  setup(props, { attrs, slots }) {
    const styles = computed(() => flex.raw(props as Parameters<typeof flex.raw>[0]))
    return () => h(StyledFlex, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<FlexProps>
