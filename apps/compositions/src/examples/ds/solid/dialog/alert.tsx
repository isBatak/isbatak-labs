import { Button } from "@isbatak/solid-ui/button"
import { Dialog } from "@isbatak/solid-ui/dialog"
import { Portal } from "solid-js/web"

export function DialogAlertDemo() {
  return (
    <Dialog.Root role="alertdialog">
      <Dialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline" colorPalette="red">
            Delete project
          </Button>
        )}
      />
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Delete this project?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>This deletes the project and everything in it. You can't undo this.</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button colorPalette="red">Delete</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
