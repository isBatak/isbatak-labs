import { Button } from "@isbatak/solid-ui/button"
import { Tooltip } from "@isbatak/solid-ui/tooltip"
import { Portal } from "solid-js/web"

export function TooltipDemo() {
  return (
    <Tooltip.Root openDelay={200}>
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
            Saved to your library
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  )
}
