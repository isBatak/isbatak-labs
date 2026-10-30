import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"
import { popover } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const popoverMatrix = defineComponentMatrix({
  recipe: popover,
  render: (props) => (
    <Popover.Root open autoFocus={false} {...props}>
      <Popover.Positioner>
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
      </Popover.Positioner>
    </Popover.Root>
  ),
})
