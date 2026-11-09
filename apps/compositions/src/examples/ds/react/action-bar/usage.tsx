import { Portal } from "@ark-ui/react/portal"
import { ActionBar } from "@isbatak/react-ui/action-bar"
import { Button } from "@isbatak/react-ui/button"
import { Checkbox } from "@isbatak/react-ui/checkbox"
import { Icon } from "@isbatak/react-ui/icon"
import { useState } from "react"

export function ActionBarDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Checkbox.Root checked={open} onCheckedChange={(details) => setOpen(details.checked === true)}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Show action bar</Checkbox.Label>
      </Checkbox.Root>
      <ActionBar.Root open={open}>
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
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  )
}
