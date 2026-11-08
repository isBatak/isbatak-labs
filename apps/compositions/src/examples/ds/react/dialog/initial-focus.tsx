import { Portal } from "@ark-ui/react/portal"
import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Dialog } from "@isbatak/react-ui/dialog"
import { input } from "@isbatak/panda-ds/recipes"
import { useRef } from "react"

export function DialogInitialFocusDemo() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Dialog.Root initialFocusEl={() => inputRef.current}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Rename file</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Rename file</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <input ref={inputRef} className={input()} defaultValue="report-final.pdf" aria-label="File name" />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Rename</Button>
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
