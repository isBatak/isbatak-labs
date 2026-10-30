import { alert } from "@isbatak/panda-ds/recipes"
import { Alert } from "../canvas/primitives"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const alertMatrix = defineComponentMatrix({
  recipe: alert,
  render: (props) => (
    <Alert.Root {...props}>
      <Alert.Indicator>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      </Alert.Indicator>
      <Alert.Content>
        <Alert.Title>Heads up</Alert.Title>
        <Alert.Description>Your trial ends in three days.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  ),
})
