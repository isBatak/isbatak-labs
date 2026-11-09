import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { Portal } from "solid-js/web"

export function PopoverModalModeDemo() {
  return (
    <Popover.Root modalMode>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open as a sheet
          </Button>
        )}
      />
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
              <Popover.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} size="sm" variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button size="sm">Copy link</Button>
            </Popover.Footer>
            <Popover.CloseTrigger asChild={(props) => <CloseButton {...props()} size="sm" />} />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
