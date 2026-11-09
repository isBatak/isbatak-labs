import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Field } from "@isbatak/solid-ui/field"
import { Textarea } from "@isbatak/solid-ui/textarea"
import { createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function DrawerControlledDemo() {
  const [open, setOpen] = createSignal(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Give feedback</Button>
      <Drawer.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Send feedback</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body display="flex" flexDirection="column" gap="4">
                <Drawer.Description>Tell us what works and what we could do better.</Drawer.Description>
                <Field.Root>
                  <Field.Label>Your feedback</Field.Label>
                  <Textarea rows={5} placeholder="Type your feedback here" />
                </Field.Root>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)}>Send</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  )
}
