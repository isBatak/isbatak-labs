import { ark } from "@ark-ui/vue/factory"
import { type SquareProperties, square } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledSquare = styled(ark.div)

export interface SquareProps
  extends SquareProperties, Omit<ComponentProps<typeof StyledSquare>, keyof SquareProperties> {}

export const Square = defineComponent({
  name: "Square",
  inheritAttrs: false,
  props: patternProps(square.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => square.raw(props as Parameters<typeof square.raw>[0]))
    return () => h(StyledSquare, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<SquareProps>
