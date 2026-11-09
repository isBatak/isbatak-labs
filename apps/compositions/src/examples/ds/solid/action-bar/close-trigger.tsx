import { ActionBar } from "@isbatak/solid-ui/action-bar"
import { Button } from "@isbatak/solid-ui/button"
import { Checkbox } from "@isbatak/solid-ui/checkbox"
import { Icon } from "@isbatak/solid-ui/icon"
import { createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function ActionBarCloseTriggerDemo() {
  const [open, setOpen] = createSignal(false)

  return (
    <>
      <Checkbox.Root checked={open()} onCheckedChange={(details) => setOpen(details.checked === true)}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Show action bar</Checkbox.Label>
      </Checkbox.Root>
      <ActionBar.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>2 selected</ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                <Icon name="delete" />
                Delete
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="share" />
                Share
              </Button>
              <ActionBar.CloseTrigger />
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  )
}
