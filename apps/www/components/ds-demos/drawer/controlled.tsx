"use client"

import { Portal } from "@ark-ui/react/portal"
import { field, textarea } from "@isbatak/panda-ds/recipes"
import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { useState } from "react"

export function DrawerControlledDemo() {
  const [open, setOpen] = useState(false)
  const fieldClasses = field()

  return (
    <>
      <Button onClick={() => setOpen(true)}>Give feedback</Button>
      <Drawer.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Send feedback</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body display="flex" flexDirection="column" gap="4">
                <Drawer.Description>Tell us what works and what we could do better.</Drawer.Description>
                <div className={fieldClasses.root}>
                  <label className={fieldClasses.label} htmlFor="drawer-feedback">
                    Your feedback
                  </label>
                  <textarea
                    id="drawer-feedback"
                    className={textarea()}
                    rows={5}
                    placeholder="Type your feedback here"
                  />
                </div>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)}>Send</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  )
}
