import { type IconName, getIconSprite } from "@isbatak/icons"
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
        h("use", { href: `${getIconSprite()}#${props.name}` }),
      )
  },
})

export type IconProps = ComponentProps<typeof StyledIcon> & { name: IconName }

export const IconSpritePreload = defineComponent({
  name: "IconSpritePreload",
  setup() {
    return () => h("link", { rel: "preload", as: "image", type: "image/svg+xml", href: getIconSprite() })
  },
})
