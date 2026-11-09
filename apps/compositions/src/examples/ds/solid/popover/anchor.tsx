import { Button } from "@isbatak/solid-ui/button"
import { Input } from "@isbatak/solid-ui/input"
import { Popover } from "@isbatak/solid-ui/popover"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function PopoverAnchorDemo() {
  return (
    <Popover.Root>
      <HStack gap="2">
        <Popover.Anchor asChild={(props) => <Input {...props()} placeholder="Search" w="56" />} />
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Filters
            </Button>
          )}
        />
      </HStack>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Header>
              <Popover.Title>Filters</Popover.Title>
              <Popover.Description>The popover lines up with the search field, not the button.</Popover.Description>
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
