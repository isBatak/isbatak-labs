import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"

export function PopoverNestedDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open popover</Button>
      </Popover.Trigger>
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
                <Popover.Trigger asChild>
                  <Button size="sm" variant="outline">
                    More options
                  </Button>
                </Popover.Trigger>
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
