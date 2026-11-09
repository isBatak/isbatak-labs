import { Portal } from "@ark-ui/react/portal"
import { HoverCard } from "@isbatak/react-ui/hover-card"
import { HStack } from "styled-system/jsx"
import { css } from "styled-system/css"

export function HoverCardDelayDemo() {
  return (
    <HStack gap="6">
      <HoverCard.Root openDelay={100} closeDelay={100}>
        <HoverCard.Trigger asChild>
          <a href="https://ark-ui.com" className={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>
            Quick
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
      <HoverCard.Root openDelay={1000} closeDelay={800}>
        <HoverCard.Trigger asChild>
          <a href="https://ark-ui.com" className={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>
            Slow
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
