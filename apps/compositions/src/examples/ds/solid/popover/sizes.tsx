import { Button } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function PopoverSizesDemo() {
  return (
    <HStack gap="4">
      <Popover.Root size="xs">
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              xs
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
      <Popover.Root size="sm">
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              sm
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
      <Popover.Root size="md">
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              md
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
      <Popover.Root size="lg">
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              lg
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
