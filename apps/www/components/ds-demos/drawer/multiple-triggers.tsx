"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

export function DrawerMultipleTriggersDemo() {
  return (
    <Drawer.Root placement="end">
      <Drawer.Trigger asChild value="inbox">
        <Button>Inbox</Button>
      </Drawer.Trigger>
      <Drawer.Trigger asChild value="drafts">
        <Button variant="outline">Drafts</Button>
      </Drawer.Trigger>
      <Drawer.Trigger asChild value="archive">
        <Button variant="outline">Archive</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Context>
              {(drawer) => (
                <>
                  <Drawer.Header>
                    <Drawer.Title textTransform="capitalize">{drawer.triggerValue}</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Drawer.Description>
                      The {drawer.triggerValue} button opened this drawer. Every trigger shares it, and triggerValue
                      says which one was used.
                    </Drawer.Description>
                  </Drawer.Body>
                </>
              )}
            </Drawer.Context>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Close</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
