import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Portal } from "solid-js/web"

export function DrawerNonModalDemo() {
  return (
    <Drawer.Root modal={false} trapFocus={false} preventScroll={false} closeOnInteractOutside={false}>
      <Drawer.Trigger asChild={(props) => <Button {...props()}>Open non-modal drawer</Button>} />
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
            <Drawer.CloseTrigger asChild={(props) => <CloseButton {...props()} size="sm" />} />
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
