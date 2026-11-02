import { defineComponent, h } from "vue"

import { Icon } from "../icon/icon"
import { IconButton, type IconButtonProps } from "./icon-button"

export type CloseButtonProps = IconButtonProps

export const CloseButton = defineComponent({
  name: "CloseButton",
  setup(_, { slots }) {
    return () =>
      h(
        IconButton,
        { variant: "ghost", "aria-label": "Close" },
        { default: () => slots.default?.() ?? h(Icon, { name: "close" }) },
      )
  },
})
