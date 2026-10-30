import { checkbox } from "@isbatak/panda-ds/recipes"
import { Checkbox } from "../canvas/primitives"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const checkboxMatrix = defineComponentMatrix({
  recipe: checkbox,
  render: (props) => (
    <Checkbox.Root defaultChecked {...props}>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Accept terms</Checkbox.Label>
    </Checkbox.Root>
  ),
})
