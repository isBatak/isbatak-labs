import { HoverCard } from "@isbatak/solid-ui/hover-card"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"
import { createSignal } from "solid-js"

export function HoverCardControlledDemo() {
  const [open, setOpen] = createSignal(false)

  return (
    <HStack gap="4">
      <HoverCard.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              Ark UI
            </a>
          )}
        />
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content maxW="xs">
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <p class={css({ fontWeight: "medium" })}>Ark UI</p>
              <p class={css({ textStyle: "sm", color: "fg.muted" })}>
                Headless components for React, Vue, Solid and Svelte.
              </p>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
      <p class={css({ color: "fg.muted", textStyle: "sm" })}>{open() ? "The card is open" : "The card is closed"}</p>
    </HStack>
  )
}
