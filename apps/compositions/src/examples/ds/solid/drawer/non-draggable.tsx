import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Portal } from "solid-js/web"

export function DrawerNonDraggableDemo() {
  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild={(props) => <Button {...props()}>Open drawer</Button>} />
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content draggable={false}>
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header>
              <Drawer.Title>Drag the handle</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description>
                Dragging the content does nothing. The grabber above still drags the drawer, so you can swipe it closed
                from there.
              </Drawer.Description>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Close
                  </Button>
                )}
              />
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
