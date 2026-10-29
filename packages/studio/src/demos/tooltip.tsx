import { Tooltip } from "@isbatak/react-ui/tooltip"

import { StaticOverlay } from "../canvas/layout"
import type { SampleProps } from "./types"

export function TooltipSample(props: SampleProps) {
  return (
    <StaticOverlay>
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
    </StaticOverlay>
  )
}
