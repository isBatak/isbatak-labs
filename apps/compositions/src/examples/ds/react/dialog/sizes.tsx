import { Portal } from "@ark-ui/react/portal"
import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Dialog } from "@isbatak/react-ui/dialog"
import { HStack } from "styled-system/jsx"

export function DialogSizesDemo() {
  return (
    <HStack gap="4">
      <Dialog.Root size="sm">
        <Dialog.Trigger asChild>
          <Button variant="outline">size sm</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Publish changes</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button>Publish</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      <Dialog.Root size="md">
        <Dialog.Trigger asChild>
          <Button variant="outline">size md</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Publish changes</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button>Publish</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </HStack>
  )
}
