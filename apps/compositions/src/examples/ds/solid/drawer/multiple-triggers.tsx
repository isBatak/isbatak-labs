import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Portal } from "solid-js/web"

export function DrawerMultipleTriggersDemo() {
  return (
    <Drawer.Root placement="end">
      <Drawer.Trigger value="inbox" asChild={(props) => <Button {...props()}>Inbox</Button>} />
      <Drawer.Trigger
        value="drafts"
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Drafts
          </Button>
        )}
      />
      <Drawer.Trigger
        value="archive"
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Archive
          </Button>
        )}
      />
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Context>
              {(drawer) => (
                <>
                  <Drawer.Header>
                    <Drawer.Title textTransform="capitalize">{drawer().triggerValue}</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Drawer.Description>
                      The {drawer().triggerValue} button opened this drawer. Every trigger shares it, and triggerValue
                      says which one was used.
                    </Drawer.Description>
                  </Drawer.Body>
                </>
              )}
            </Drawer.Context>
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
