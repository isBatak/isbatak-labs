import { HoverCard } from "@isbatak/solid-ui/hover-card"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"

export function HoverCardDelayDemo() {
  return (
    <HStack gap="6">
      <HoverCard.Root openDelay={100} closeDelay={100}>
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              Quick
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
      <HoverCard.Root openDelay={1000} closeDelay={800}>
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              Slow
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
    </HStack>
  )
}
