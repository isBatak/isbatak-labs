import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"

import { StaticOverlay } from "../canvas/layout"
import type { SampleProps } from "./types"

function PopoverPanel() {
  return (
    <Popover.Content>
      <Popover.Arrow>
        <Popover.ArrowTip />
      </Popover.Arrow>
      <Popover.Header>
        <Popover.Title>Dimensions</Popover.Title>
        <Popover.Description>Set the dimensions for the layer.</Popover.Description>
      </Popover.Header>
      <Popover.Footer>
        <Button size="sm">Apply</Button>
      </Popover.Footer>
    </Popover.Content>
  )
}

export function PopoverSample(props: SampleProps) {
  return (
    <StaticOverlay>
      <Popover.Root open autoFocus={false} {...props}>
        <Popover.Positioner>
          <PopoverPanel />
        </Popover.Positioner>
      </Popover.Root>
    </StaticOverlay>
  )
}
