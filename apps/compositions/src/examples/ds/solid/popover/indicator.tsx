import { Button } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { Portal } from "solid-js/web"

export function PopoverIndicatorDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Options
            <Popover.Indicator />
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
              <Popover.Title>Options</Popover.Title>
              <Popover.Description>The chevron turns while the popover is open.</Popover.Description>
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
