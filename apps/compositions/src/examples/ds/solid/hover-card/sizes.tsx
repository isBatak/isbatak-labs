import { HoverCard } from "@isbatak/solid-ui/hover-card"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"

export function HoverCardSizesDemo() {
  return (
    <HStack gap="6">
      <HoverCard.Root size="xs">
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              xs
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
      <HoverCard.Root size="sm">
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              sm
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
      <HoverCard.Root size="md">
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              md
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
      <HoverCard.Root size="lg">
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              lg
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
