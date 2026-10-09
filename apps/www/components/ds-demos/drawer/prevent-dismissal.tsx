"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

export function DrawerPreventDismissalDemo() {
  return (
    <Drawer.Root closeOnEscape={false} closeOnInteractOutside={false}>
      <Drawer.Trigger asChild>
        <Button>Review changes</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content draggable={false}>
            <Drawer.Header>
              <Drawer.Title>Review changes</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description>
                Clicking outside, pressing Escape or swiping keeps this drawer open. Close it with the button below.
              </Drawer.Description>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button>Done</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
