import { defineComponent, h } from "vue"

import { Button, type ButtonProps } from "./button"

export type IconButtonProps = ButtonProps

export const IconButton = defineComponent({
  name: "IconButton",
  setup(_, { slots }) {
    return () => h(Button, { px: "0", py: "0", _icon: { fontSize: "1.2em" } }, slots)
  },
})
