"use client"

import { Portal } from "@ark-ui/react/portal"
import { HoverCard } from "@isbatak/react-ui/hover-card"
import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { Icon, type IconName } from "../ui/icon"

const EditorButton = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2.5",
    w: "full",
    px: "3.5",
    py: "3",
    borderRadius: "l2",
    borderWidth: "1px",
    bg: "bg",
    textStyle: "sm",
    fontWeight: "medium",
    textAlign: "start",
    cursor: "default",
    transitionProperty: "border-color, background",
    transitionDuration: "fast",
    _hover: { borderColor: "border.emphasized", bg: "bg.subtle" },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.focusRing", outlineOffset: "2px" },
  },
})

export function Editors({ children }: { children: ReactNode }) {
  return (
    <styled.div
      className="not-prose"
      display="grid"
      gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" }}
      gap="2.5"
      my="6"
    >
      {children}
    </styled.div>
  )
}

interface EditorProps {
  name: string
  icon?: IconName
  children: ReactNode
}

export function Editor({ name, icon = "code", children }: EditorProps) {
  return (
    <HoverCard.Root openDelay={150} closeDelay={100} positioning={{ placement: "top" }} lazyMount unmountOnExit>
      <HoverCard.Trigger asChild>
        <EditorButton type="button">
          <Icon name={icon} color="fg.muted" />
          {name}
        </EditorButton>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content maxW="xs" textStyle="sm" lineHeight="1.6">
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <styled.p fontWeight="semibold">{name}</styled.p>
            <styled.div mt="1.5" color="fg.muted">
              {children}
            </styled.div>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}
