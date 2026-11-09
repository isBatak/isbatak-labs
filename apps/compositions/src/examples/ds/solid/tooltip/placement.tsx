import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { Tooltip } from "@isbatak/solid-ui/tooltip"
import { Portal } from "solid-js/web"

export function TooltipPlacementDemo() {
  return (
    <HStack gap="4">
      <Tooltip.Root positioning={{ placement: "top" }}>
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Top
            </Button>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              On top
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <Tooltip.Root positioning={{ placement: "right" }}>
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Right
            </Button>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              On the right
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <Tooltip.Root positioning={{ placement: "bottom" }}>
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Bottom
            </Button>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              Below
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <Tooltip.Root positioning={{ placement: "left" }}>
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Left
            </Button>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              On the left
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    </HStack>
  )
}
