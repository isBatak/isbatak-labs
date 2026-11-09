import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"

export function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Show details</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Header>
              <Popover.Title>Release notes</Popover.Title>
              <Popover.Description>See what changed in this version.</Popover.Description>
            </Popover.Header>
            <Popover.Footer>
              <Popover.ActionTrigger asChild>
                <Button size="sm">Got it</Button>
              </Popover.ActionTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
