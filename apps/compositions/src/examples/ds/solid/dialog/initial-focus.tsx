import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Dialog } from "@isbatak/solid-ui/dialog"
import { input } from "@isbatak/panda-ds/recipes"
import { createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function DialogInitialFocusDemo() {
  const [inputRef, setInputRef] = createSignal<HTMLInputElement>()

  return (
    <Dialog.Root initialFocusEl={() => inputRef() ?? null}>
      <Dialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Rename file
          </Button>
        )}
      />
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Rename file</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <input ref={setInputRef} class={input()} value="report-final.pdf" aria-label="File name" />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button>Rename</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild={(props) => <CloseButton {...props()} size="sm" />} />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
