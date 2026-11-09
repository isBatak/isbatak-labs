import { HoverCard } from "@isbatak/solid-ui/hover-card"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"

export function HoverCardPlacementDemo() {
  return (
    <HStack gap="6">
      <HoverCard.Root positioning={{ placement: "top" }}>
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              Top
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
      <HoverCard.Root positioning={{ placement: "right" }}>
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              Right
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
      <HoverCard.Root positioning={{ placement: "bottom" }}>
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              Bottom
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
      <HoverCard.Root positioning={{ placement: "left" }}>
        <HoverCard.Trigger
          asChild={(props) => (
            <a
              {...props()}
              href="https://ark-ui.com"
              class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}
            >
              Left
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
