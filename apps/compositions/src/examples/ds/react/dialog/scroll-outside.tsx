import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Dialog } from "@isbatak/react-ui/dialog"
import { Stack } from "styled-system/jsx"

export function DialogScrollOutsideDemo() {
  return (
    <Dialog.Root scrollBehavior="outside">
      <Dialog.Trigger asChild>
        <Button variant="outline">Outside scroll</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Stack gap="4">
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
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
