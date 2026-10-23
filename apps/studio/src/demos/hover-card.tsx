import { HoverCard } from "@isbatak/react-ui/hover-card"
import { Portal } from "@ark-ui/react/portal"

import { styled } from "styled-system/jsx"

import { Section, StaticOverlay } from "../canvas/layout"
import { Avatar } from "./primitives"
import type { SampleProps } from "./types"

function Profile() {
  return (
    <>
      <HoverCard.Arrow>
        <HoverCard.ArrowTip />
      </HoverCard.Arrow>
      <Avatar.Root size="sm">
        <Avatar.Fallback>PS</Avatar.Fallback>
      </Avatar.Root>
      <p>Panda Studio previews and edits the design system on a live canvas.</p>
    </>
  )
}

export function HoverCardSample(props: SampleProps) {
  return (
    <StaticOverlay>
      <HoverCard.Root open {...props}>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <Profile />
          </HoverCard.Content>
        </HoverCard.Positioner>
      </HoverCard.Root>
    </StaticOverlay>
  )
}

export function HoverCardDemo() {
  return (
    <>
      <Section title="Interactive">
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <styled.a
              href="#"
              color="colorPalette.fg"
              textDecoration="underline"
              onClick={(event) => event.preventDefault()}
            >
              @panda-studio
            </styled.a>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner>
              <HoverCard.Content>
                <Profile />
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>
      </Section>
      <Section title="Open">
        <HoverCardSample />
      </Section>
    </>
  )
}
