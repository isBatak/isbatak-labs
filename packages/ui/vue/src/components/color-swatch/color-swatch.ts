import { type Component, type StyleValue, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { styled } from "@isbatak/vue-ui/jsx"
import { colorSwatch } from "@isbatak/panda-ds/recipes"

const StyledColorSwatch = styled("span", colorSwatch)

export type ColorSwatchProps = ComponentProps<typeof StyledColorSwatch> & {
  value: string
}

export const ColorSwatch = defineComponent({
  name: "ColorSwatch",
  inheritAttrs: false,
  props: {
    value: { type: String, required: true },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StyledColorSwatch as Component,
        { ...attrs, style: [{ "--color": props.value }, attrs.style as StyleValue] },
        slots,
      )
  },
}) as unknown as Component<ColorSwatchProps>
