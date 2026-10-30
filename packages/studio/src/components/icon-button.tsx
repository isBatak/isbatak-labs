import { IconButton } from "@isbatak/react-ui/button"
import { button } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const iconButtonMatrix = defineComponentMatrix({
  recipe: button,
  props: {
    icon: { ignore: true, defaultValue: true },
  },
  render: (props) => (
    <IconButton aria-label="Add" {...props}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <path d="M12 5v14M5 12h14" />
      </svg>
    </IconButton>
  ),
})
