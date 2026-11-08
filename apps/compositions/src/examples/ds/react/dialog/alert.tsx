import { Portal } from "@ark-ui/react/portal"
import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Dialog } from "@isbatak/react-ui/dialog"

export function DialogAlertDemo() {
  return (
    <Dialog.Root role="alertdialog">
      <Dialog.Trigger asChild>
        <Button variant="outline" colorPalette="red">
          Delete project
        </Button>
      </Dialog.Trigger>
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
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button colorPalette="red">Delete</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
