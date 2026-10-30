import { swittch } from "@isbatak/panda-ds/recipes"
import { Switch } from "../canvas/primitives"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const switchMatrix = defineComponentMatrix({
  recipe: swittch,
  render: (props) => (
    <Switch.Root defaultChecked {...props}>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Notifications</Switch.Label>
    </Switch.Root>
  ),
})
