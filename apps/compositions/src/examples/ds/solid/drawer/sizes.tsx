import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function DrawerSizesDemo() {
  return (
    <HStack gap="4">
      <Drawer.Root size="sm">
        <Drawer.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              size sm
            </Button>
          )}
        />
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Preferences</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Change your preferences here. They apply to every device you sign in on.
                </Drawer.Description>
              </Drawer.Body>
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
              <Drawer.CloseTrigger asChild={(props) => <CloseButton {...props()} size="sm" />} />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <Drawer.Root size="md">
        <Drawer.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              size md
            </Button>
          )}
        />
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Preferences</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Change your preferences here. They apply to every device you sign in on.
                </Drawer.Description>
              </Drawer.Body>
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
              <Drawer.CloseTrigger asChild={(props) => <CloseButton {...props()} size="sm" />} />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  )
}
