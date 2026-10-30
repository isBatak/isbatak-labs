import { input } from "@isbatak/panda-ds/recipes"
import { Input } from "../canvas/primitives"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const inputMatrix = defineComponentMatrix({
  recipe: input,
  render: (props) => <Input placeholder="you@example.com" {...props} />,
})
