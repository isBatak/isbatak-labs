import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { Tooltip } from "@isbatak/solid-ui/tooltip"
import { Portal } from "solid-js/web"

export function TooltipDelayDemo() {
  return (
    <HStack gap="4">
      <Tooltip.Root openDelay={0} closeDelay={0}>
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              No delay
            </Button>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              Opens right away
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <Tooltip.Root openDelay={1000} closeDelay={500}>
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Slow
            </Button>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              Opens after a second
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    </HStack>
  )
}
