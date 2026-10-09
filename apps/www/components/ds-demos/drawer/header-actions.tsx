"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button, ButtonGroup, CloseButton } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

export function DrawerHeaderActionsDemo() {
  return (
    <Drawer.Root size="md">
      <Drawer.Trigger asChild>
        <Button>Edit document</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header ps="3" borderBottomWidth="1px" pt="3" pb="3">
              <Drawer.CloseTrigger asChild position="static">
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
              <Drawer.Title>Edit document</Drawer.Title>
              <ButtonGroup size="sm">
                <Button variant="outline">Preview</Button>
                <Button>Publish</Button>
              </ButtonGroup>
            </Drawer.Header>
            <Drawer.Body py="4">
              <Drawer.Description>
                The close button and the actions sit in the header, so the drawer needs no footer.
              </Drawer.Description>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
