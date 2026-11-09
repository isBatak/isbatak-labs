import { Portal } from "@ark-ui/react/portal"
import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"

export function PopoverModalModeDemo() {
  return (
    <Popover.Root modalMode>
      <Popover.Trigger asChild>
        <Button variant="outline">Open as a sheet</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Backdrop />
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Share this page</Popover.Title>
              <Popover.Description>
                In modal mode the popover leaves its trigger and sits at the bottom of the screen above a backdrop.
              </Popover.Description>
            </Popover.Header>
            <Popover.Footer>
              <Popover.ActionTrigger asChild>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </Popover.ActionTrigger>
              <Button size="sm">Copy link</Button>
            </Popover.Footer>
            <Popover.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Popover.CloseTrigger>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
