"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer, useDrawer } from "@isbatak/react-ui/drawer"

export function DrawerRootProviderDemo() {
  const drawer = useDrawer({ swipeDirection: "down", snapPoints: [0.4, 1], defaultSnapPoint: 0.4 })

  return (
    <>
      <Button onClick={() => drawer.setOpen(true)}>Open from outside</Button>
      <Drawer.RootProvider value={drawer}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content h="80dvh">
              <Drawer.Grabber>
                <Drawer.GrabberIndicator />
              </Drawer.Grabber>
              <Drawer.Header>
                <Drawer.Title>Using the API</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  The drawer is {drawer.snapPoint === 1 ? "expanded" : "at its first snap point"}.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline" onClick={() => drawer.setSnapPoint(drawer.snapPoint === 1 ? 0.4 : 1)}>
                  {drawer.snapPoint === 1 ? "Collapse" : "Expand"}
                </Button>
                <Button onClick={() => drawer.setOpen(false)}>Close</Button>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.RootProvider>
    </>
  )
}
