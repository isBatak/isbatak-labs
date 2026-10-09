"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { Switch } from "@isbatak/react-ui/switch"

export function DrawerCloseTriggerDemo() {
  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild>
        <Button>Notifications</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header>
              <Drawer.Title>Manage notifications</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body display="flex" flexDirection="column" gap="4">
              <Drawer.Description>Choose how you want to hear from us.</Drawer.Description>
              <Switch.Root defaultChecked>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label>Email notifications</Switch.Label>
                <Switch.HiddenInput />
              </Switch.Root>
              <Switch.Root>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label>SMS notifications</Switch.Label>
                <Switch.HiddenInput />
              </Switch.Root>
              <Switch.Root defaultChecked>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label>Push notifications</Switch.Label>
                <Switch.HiddenInput />
              </Switch.Root>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save settings</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
