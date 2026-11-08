import { Portal } from "@ark-ui/react/portal"
import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Dialog } from "@isbatak/react-ui/dialog"
import { HStack } from "styled-system/jsx"

export function DialogPlacementDemo() {
  return (
    <HStack gap="4">
      <Dialog.Root placement="top">
        <Dialog.Trigger asChild>
          <Button variant="outline">top</Button>
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
      <Dialog.Root placement="center">
        <Dialog.Trigger asChild>
          <Button variant="outline">center</Button>
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
      <Dialog.Root placement="bottom">
        <Dialog.Trigger asChild>
          <Button variant="outline">bottom</Button>
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
