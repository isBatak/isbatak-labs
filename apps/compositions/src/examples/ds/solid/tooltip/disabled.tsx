import { Button } from "@isbatak/solid-ui/button"
import { Tooltip } from "@isbatak/solid-ui/tooltip"
import { Portal } from "solid-js/web"

export function TooltipDisabledDemo() {
  return (
    <Tooltip.Root disabled>
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
            You won't see this
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  )
}
