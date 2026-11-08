import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Dialog } from "@isbatak/solid-ui/dialog"
import { Stack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function DialogNestedDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open dialog
          </Button>
        )}
      />
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Stack gap="4" align="flex-start">
                <p>Open another dialog on top of this one. Each dialog keeps its own focus and layer.</p>
                <Dialog.Root>
                  <Dialog.Trigger
                    asChild={(props) => (
                      <Button {...props()} variant="outline">
                        Open nested dialog
                      </Button>
                    )}
                  />
                  <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                      <Dialog.Content>
                        <Dialog.Header>
                          <Dialog.Title>Nested dialog</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                          <p>Close this one to go back to the first dialog.</p>
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild={(props) => <CloseButton {...props()} size="sm" />} />
                      </Dialog.Content>
                    </Dialog.Positioner>
                  </Portal>
                </Dialog.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild={(props) => <CloseButton {...props()} size="sm" />} />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
