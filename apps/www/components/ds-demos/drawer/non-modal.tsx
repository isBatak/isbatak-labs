"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

export function DrawerNonModalDemo() {
  return (
    <Drawer.Root modal={false} trapFocus={false} preventScroll={false} closeOnInteractOutside={false}>
      <Drawer.Trigger asChild>
        <Button>Open non-modal drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Non-modal</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description>
                The page behind stays interactive. Scroll it or select text while this drawer is open.
              </Drawer.Description>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
