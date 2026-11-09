import { Button } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"
import { createSignal } from "solid-js"

export function PopoverControlledDemo() {
  const [open, setOpen] = createSignal(false)

  return (
    <HStack gap="4">
      <Popover.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
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
      <p class={css({ color: "fg.muted", textStyle: "sm" })}>
        {open() ? "The popover is open" : "The popover is closed"}
      </p>
    </HStack>
  )
}
