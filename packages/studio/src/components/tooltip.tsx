import { Tooltip } from "@isbatak/react-ui/tooltip"
import { tooltip } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const tooltipMatrix = defineComponentMatrix({
  recipe: tooltip,
  render: (props) => (
    <Tooltip.Root open {...props}>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          Add to library
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  ),
})
