import { Button } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function PopoverPlacementDemo() {
  return (
    <HStack gap="4">
      <Popover.Root positioning={{ placement: "top" }}>
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Top
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
      <Popover.Root positioning={{ placement: "right" }}>
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Right
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
      <Popover.Root positioning={{ placement: "bottom" }}>
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Bottom
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
      <Popover.Root positioning={{ placement: "left" }}>
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Left
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
    </HStack>
  )
}
