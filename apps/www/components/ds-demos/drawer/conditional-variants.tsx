"use client"

import { Portal } from "@ark-ui/react/portal"
import { kbd } from "@isbatak/panda-ds/recipes"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

export function DrawerConditionalVariantsDemo() {
  return (
    <Drawer.Root placement={{ mdDown: "bottom", md: "end" }}>
      <Drawer.Trigger asChild>
        <Button>Open drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Responsive placement</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description>
                Resize the window below the md breakpoint to move this drawer to the bottom. Press{" "}
                <kbd className={kbd()}>Esc</kbd> to close it.
              </Drawer.Description>
            </Drawer.Body>
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
