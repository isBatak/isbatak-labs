import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Dialog } from "@isbatak/solid-ui/dialog"
import { Wrap } from "@isbatak/solid-ui/wrap"
import { Portal } from "solid-js/web"

export function DialogMotionDemo() {
  return (
    <Wrap gap="4">
      <Dialog.Root motionPreset="scale">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              scale
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
      <Dialog.Root motionPreset="slide-in-bottom">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              slide-in-bottom
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
      <Dialog.Root motionPreset="slide-in-top">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              slide-in-top
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
      <Dialog.Root motionPreset="slide-in-left">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              slide-in-left
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
      <Dialog.Root motionPreset="slide-in-right">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              slide-in-right
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
      <Dialog.Root motionPreset="none">
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              none
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
    </Wrap>
  )
}
