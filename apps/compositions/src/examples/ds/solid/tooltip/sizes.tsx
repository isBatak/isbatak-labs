import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { Tooltip } from "@isbatak/solid-ui/tooltip"
import { Portal } from "solid-js/web"

export function TooltipSizesDemo() {
  return (
    <HStack gap="4">
      <Tooltip.Root size="sm">
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              sm
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
      <Tooltip.Root size="md">
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              md
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
      <Tooltip.Root size="lg">
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              lg
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
    </HStack>
  )
}
