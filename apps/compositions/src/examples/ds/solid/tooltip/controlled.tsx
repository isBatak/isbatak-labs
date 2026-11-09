import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { Tooltip } from "@isbatak/solid-ui/tooltip"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"
import { createSignal } from "solid-js"

export function TooltipControlledDemo() {
  const [open, setOpen] = createSignal(false)

  return (
    <HStack gap="4">
      <Tooltip.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Hover me
            </Button>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              Saved to your library
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <p class={css({ color: "fg.muted", textStyle: "sm" })}>
        {open() ? "The tooltip is open" : "The tooltip is closed"}
      </p>
    </HStack>
  )
}
