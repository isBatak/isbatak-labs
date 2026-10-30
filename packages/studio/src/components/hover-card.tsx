import { HoverCard } from "@isbatak/react-ui/hover-card"
import { hoverCard } from "@isbatak/panda-ds/recipes"

import { Avatar } from "../canvas/primitives"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const hoverCardMatrix = defineComponentMatrix({
  recipe: hoverCard,
  render: (props) => (
    <HoverCard.Root open {...props}>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <Avatar.Root size="sm">
            <Avatar.Fallback>PS</Avatar.Fallback>
          </Avatar.Root>
          <p>Panda Studio previews and edits the design system on a live canvas.</p>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  ),
})
