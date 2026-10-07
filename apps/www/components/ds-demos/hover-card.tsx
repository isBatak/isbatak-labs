"use client"

import { Portal } from "@ark-ui/react/portal"
import { HoverCard } from "@isbatak/react-ui/hover-card"
import { styled } from "styled-system/jsx"

export function HoverCardDemo() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <styled.a href="https://ark-ui.com" textDecoration="underline" textUnderlineOffset="4px">
          Ark UI
        </styled.a>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content maxW="xs">
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <styled.p fontWeight="medium">Ark UI</styled.p>
            <styled.p textStyle="sm" color="fg.muted">
              Headless components for React, Vue, Solid and Svelte.
            </styled.p>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}
