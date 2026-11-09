import { Button } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { Portal } from "solid-js/web"

export function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Show details
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
              <Popover.Title>Release notes</Popover.Title>
              <Popover.Description>See what changed in this version.</Popover.Description>
            </Popover.Header>
            <Popover.Footer>
              <Popover.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} size="sm">
                    Got it
                  </Button>
                )}
              />
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
