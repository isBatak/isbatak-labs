import { Portal } from "@ark-ui/react/portal"
import { HoverCard } from "@isbatak/react-ui/hover-card"
import { HStack } from "styled-system/jsx"
import { css } from "styled-system/css"
import { useState } from "react"

export function HoverCardControlledDemo() {
  const [open, setOpen] = useState(false)

  return (
    <HStack gap="4">
      <HoverCard.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
        <HoverCard.Trigger asChild>
          <a href="https://ark-ui.com" className={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>
            Ark UI
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
      <p className={css({ color: "fg.muted", textStyle: "sm" })}>{open ? "The card is open" : "The card is closed"}</p>
    </HStack>
  )
}
