"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Tooltip } from "@isbatak/react-ui/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip.Root openDelay={200}>
      <Tooltip.Trigger asChild>
        <Button variant="outline">Hover me</Button>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Saved to your library
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  )
}
