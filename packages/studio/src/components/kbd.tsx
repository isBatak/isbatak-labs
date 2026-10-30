import { kbd } from "@isbatak/panda-ds/recipes"
import { Kbd } from "../canvas/primitives"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const kbdMatrix = defineComponentMatrix({
  recipe: kbd,
  render: (props) => <Kbd {...props}>⌘ K</Kbd>,
})
