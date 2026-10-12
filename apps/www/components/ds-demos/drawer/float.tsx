"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

export function DrawerFloatDemo() {
  return (
    <Drawer.Root placement="bottom" float>
      <Drawer.Trigger asChild>
        <Button>Float</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content maxW="3xl" mx="auto">
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header flexDirection="column" alignItems="stretch" gap="1" pt="3">
              <Drawer.Title>Float</Drawer.Title>
              <Drawer.Description>
                This drawer floats with a gap from the viewport edges and rounded corners.
              </Drawer.Description>
            </Drawer.Header>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
