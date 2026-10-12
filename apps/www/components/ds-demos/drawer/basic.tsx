"use client"

import { Portal } from "@ark-ui/react/portal"
import { field, input } from "@isbatak/panda-ds/recipes"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { Switch } from "@isbatak/react-ui/switch"

export function DrawerDemo() {
  const fieldClasses = field()

  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild>
        <Button>Edit settings</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header>
              <Drawer.Title>Update user settings</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body display="flex" flexDirection="column" gap="4">
              <Drawer.Description>Adjust your preferences, then drag the sheet down to close it.</Drawer.Description>
              <div className={fieldClasses.root}>
                <label className={fieldClasses.label} htmlFor="drawer-settings-username">
                  Username
                </label>
                <input id="drawer-settings-username" className={input()} placeholder="Enter your username" />
              </div>
              <div className={fieldClasses.root}>
                <label className={fieldClasses.label} htmlFor="drawer-settings-email">
                  Email
                </label>
                <input
                  id="drawer-settings-email"
                  type="email"
                  className={input()}
                  placeholder="Enter your email address"
                />
              </div>
              <Switch.Root defaultChecked>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label>Email notifications</Switch.Label>
                <Switch.HiddenInput />
              </Switch.Root>
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
