import { defineComponent, h } from "vue"

import { Button, type ButtonProps } from "./button"

export type IconButtonProps = ButtonProps

export const IconButton = defineComponent({
  name: "IconButton",
  setup(_, { slots }) {
    return () => h(Button, { icon: true }, slots)
  },
})
