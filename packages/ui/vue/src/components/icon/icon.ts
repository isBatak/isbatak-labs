import { type IconName, spriteUrl } from "@isbatak/icons"
import { styled } from "@isbatak/vue-ui/jsx"
import { icon } from "@isbatak/panda-ds/recipes"
import { defineComponent, h, type PropType } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const StyledIcon = styled("svg", icon)

export const Icon = defineComponent({
  name: "Icon",
  props: {
    name: { type: String as PropType<IconName>, required: true },
  },
  setup(props) {
    return () =>
      h(StyledIcon, { "aria-hidden": "true", "data-name": props.name }, () =>
        h("use", { href: `${spriteUrl}#${props.name}` }),
      )
  },
})

export type IconProps = ComponentProps<typeof StyledIcon> & { name: IconName }
