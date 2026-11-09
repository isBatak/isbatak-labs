import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { Portal } from "solid-js/web"

export function PopoverCloseButtonDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Show tip
          </Button>
        )}
      />
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Header>
              <Popover.Title>Keyboard shortcuts</Popover.Title>
              <Popover.Description>Press ? anywhere to see every shortcut.</Popover.Description>
            </Popover.Header>
            <Popover.CloseTrigger asChild={(props) => <CloseButton {...props()} size="sm" />} />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
