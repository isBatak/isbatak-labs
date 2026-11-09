import { Button } from "@isbatak/solid-ui/button"
import { Tooltip } from "@isbatak/solid-ui/tooltip"
import { Portal } from "solid-js/web"

export function TooltipInteractiveDemo() {
  return (
    <Tooltip.Root interactive>
      <Tooltip.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Hover me
          </Button>
        )}
      />
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Move the pointer onto me and I stay open
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  )
}
