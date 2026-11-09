import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Dialog } from "@isbatak/react-ui/dialog"
import { Stack } from "styled-system/jsx"

export function DialogNestedDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open dialog</Button>
      </Dialog.Trigger>
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
                  <Dialog.Trigger asChild>
                    <Button variant="outline">Open nested dialog</Button>
                  </Dialog.Trigger>
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
                        <Dialog.CloseTrigger />
                      </Dialog.Content>
                    </Dialog.Positioner>
                  </Portal>
                </Dialog.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
