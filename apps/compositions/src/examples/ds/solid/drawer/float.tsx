import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Portal } from "solid-js/web"

export function DrawerFloatDemo() {
  return (
    <Drawer.Root placement="bottom" float>
      <Drawer.Trigger asChild={(props) => <Button {...props()}>Float</Button>} />
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
              <Drawer.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button>Save</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
