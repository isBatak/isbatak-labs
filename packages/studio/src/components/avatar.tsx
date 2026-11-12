import { avatar } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "react"
import { Avatar } from "../canvas/primitives"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const avatarMatrix = defineComponentMatrix({
  recipe: avatar,
  render: (props) => (
    <Avatar.Root {...(props as ComponentProps<typeof Avatar.Root>)}>
      <Avatar.Fallback>IB</Avatar.Fallback>
    </Avatar.Root>
  ),
})
