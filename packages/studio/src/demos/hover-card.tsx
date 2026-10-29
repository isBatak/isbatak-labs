import { HoverCard } from "@isbatak/react-ui/hover-card"

import { StaticOverlay } from "../canvas/layout"
import { Avatar } from "./primitives"
import type { SampleProps } from "./types"

function Profile() {
  return (
    <>
      <HoverCard.Arrow>
        <HoverCard.ArrowTip />
      </HoverCard.Arrow>
      <Avatar.Root size="sm">
        <Avatar.Fallback>PS</Avatar.Fallback>
      </Avatar.Root>
      <p>Panda Studio previews and edits the design system on a live canvas.</p>
    </>
  )
}

export function HoverCardSample(props: SampleProps) {
  return (
    <StaticOverlay>
      <HoverCard.Root open {...props}>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <Profile />
          </HoverCard.Content>
        </HoverCard.Positioner>
      </HoverCard.Root>
    </StaticOverlay>
  )
}
