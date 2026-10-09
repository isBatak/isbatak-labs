"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

export function DrawerDemo() {
  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild>
        <Button variant="outline">Open drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header>
              <Drawer.Title>Bottom sheet</Drawer.Title>
              <Drawer.Description>Drag it down or press Escape to close.</Drawer.Description>
            </Drawer.Header>
            <Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <Button>Done</Button>
              </Drawer.CloseTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
