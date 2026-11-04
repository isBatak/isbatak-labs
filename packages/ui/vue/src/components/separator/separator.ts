import { ark } from "@ark-ui/vue/factory"
import { separator } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, type PropType, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const StyledSeparator = styled(ark.span, separator)

export type SeparatorProps = ComponentProps<typeof StyledSeparator>

export const Separator = defineComponent({
  name: "Separator",
  inheritAttrs: false,
  props: {
    orientation: {
      type: [String, Object] as PropType<SeparatorProps["orientation"]>,
      default: "horizontal",
    },
  },
  setup(props, { attrs }) {
    return () => {
      const fixed = typeof props.orientation === "string"
      return h(StyledSeparator, {
        role: fixed ? "separator" : "presentation",
        "aria-orientation": fixed ? props.orientation : undefined,
        orientation: props.orientation,
        ...attrs,
      })
    }
  },
}) as unknown as FunctionalComponent<SeparatorProps>
