import { Button } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { Portal } from "solid-js/web"

export function PopoverNestedDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open popover
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
              <Popover.Title>Share</Popover.Title>
              <Popover.Description>Open another popover from inside this one.</Popover.Description>
            </Popover.Header>
            <Popover.Body>
              <Popover.Root positioning={{ placement: "right" }}>
                <Popover.Trigger
                  asChild={(props) => (
                    <Button {...props()} size="sm" variant="outline">
                      More options
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
                        <Popover.Title>More options</Popover.Title>
                        <Popover.Description>Clicking in here keeps the first popover open.</Popover.Description>
                      </Popover.Header>
                    </Popover.Content>
                  </Popover.Positioner>
                </Portal>
              </Popover.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
