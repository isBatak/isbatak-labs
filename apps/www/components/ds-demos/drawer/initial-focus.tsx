"use client"

import { Portal } from "@ark-ui/react/portal"
import { field, input } from "@isbatak/panda-ds/recipes"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { useRef } from "react"

export function DrawerInitialFocusDemo() {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const fieldClasses = field()

  return (
    <Drawer.Root initialFocusEl={() => emailRef.current}>
      <Drawer.Trigger asChild>
        <Button>Edit contact</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Edit contact</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body display="flex" flexDirection="column" gap="4">
              <Drawer.Description>The email field gets focus when the drawer opens.</Drawer.Description>
              <div className={fieldClasses.root}>
                <label className={fieldClasses.label} htmlFor="drawer-contact-name">
                  Name
                </label>
                <input id="drawer-contact-name" className={input()} defaultValue="Naruto Uzumaki" />
              </div>
              <div className={fieldClasses.root}>
                <label className={fieldClasses.label} htmlFor="drawer-contact-email">
                  Email
                </label>
                <input
                  ref={emailRef}
                  id="drawer-contact-email"
                  type="email"
                  className={input()}
                  placeholder="name@example.com"
                />
              </div>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
