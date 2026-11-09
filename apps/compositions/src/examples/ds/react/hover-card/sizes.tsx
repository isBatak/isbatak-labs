import { Portal } from "@ark-ui/react/portal"
import { HoverCard } from "@isbatak/react-ui/hover-card"
import { HStack } from "styled-system/jsx"
import { css } from "styled-system/css"

export function HoverCardSizesDemo() {
  return (
    <HStack gap="6">
      <HoverCard.Root size="xs">
        <HoverCard.Trigger asChild>
          <a href="https://ark-ui.com" className={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>
            xs
          </a>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content maxW="xs">
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <p className={css({ fontWeight: "medium" })}>Ark UI</p>
              <p className={css({ textStyle: "sm", color: "fg.muted" })}>
                Headless components for React, Vue, Solid and Svelte.
              </p>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
      <HoverCard.Root size="sm">
        <HoverCard.Trigger asChild>
          <a href="https://ark-ui.com" className={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>
            sm
          </a>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content maxW="xs">
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <p className={css({ fontWeight: "medium" })}>Ark UI</p>
              <p className={css({ textStyle: "sm", color: "fg.muted" })}>
                Headless components for React, Vue, Solid and Svelte.
              </p>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
      <HoverCard.Root size="md">
        <HoverCard.Trigger asChild>
          <a href="https://ark-ui.com" className={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>
            md
          </a>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content maxW="xs">
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <p className={css({ fontWeight: "medium" })}>Ark UI</p>
              <p className={css({ textStyle: "sm", color: "fg.muted" })}>
                Headless components for React, Vue, Solid and Svelte.
              </p>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
      <HoverCard.Root size="lg">
        <HoverCard.Trigger asChild>
          <a href="https://ark-ui.com" className={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>
            lg
          </a>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content maxW="xs">
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <p className={css({ fontWeight: "medium" })}>Ark UI</p>
              <p className={css({ textStyle: "sm", color: "fg.muted" })}>
                Headless components for React, Vue, Solid and Svelte.
              </p>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </HStack>
  )
}
