"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

export function DrawerContextDemo() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button>Open drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Context>
              {(drawer) => (
                <>
                  <Drawer.Header>
                    <Drawer.Title>Drawer context</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body display="flex" flexDirection="column" gap="2">
                    <p>Open: {String(drawer.open)}</p>
                    <p>Dragging: {String(drawer.dragging)}</p>
                    <p>Swipe direction: {drawer.swipeDirection}</p>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Button variant="outline" onClick={() => drawer.setOpen(false)}>
                      Close from context
                    </Button>
                  </Drawer.Footer>
                </>
              )}
            </Drawer.Context>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
