import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Dialog } from "@isbatak/solid-ui/dialog"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function DialogPlacementDemo() {
  return (
    <HStack gap="4">
      <Dialog.Root placement="top">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              top
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
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
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
      <Dialog.Root placement="center">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              center
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
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
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
      <Dialog.Root placement="bottom">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              bottom
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
                <p>
                  Review the changes below before you publish them. Publishing makes them visible to everyone with
                  access to the project.
                </p>
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
    </HStack>
  )
}
