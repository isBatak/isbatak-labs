import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Tooltip } from "@isbatak/react-ui/tooltip"
import { HStack } from "styled-system/jsx"

export function TooltipDelayDemo() {
  return (
    <HStack gap="4">
      <Tooltip.Root openDelay={0} closeDelay={0}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">No delay</Button>
        </Tooltip.Trigger>
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
        <Tooltip.Trigger asChild>
          <Button variant="outline">Slow</Button>
        </Tooltip.Trigger>
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
