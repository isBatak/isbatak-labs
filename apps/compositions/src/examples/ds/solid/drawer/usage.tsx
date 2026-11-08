import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Field } from "@isbatak/solid-ui/field"
import { Input } from "@isbatak/solid-ui/input"
import { Switch } from "@isbatak/solid-ui/switch"
import { Portal } from "solid-js/web"

export function DrawerDemo() {
  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild={(props) => <Button {...props()}>Edit settings</Button>} />
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
              <Field.Root>
                <Field.Label>Username</Field.Label>
                <Input placeholder="Enter your username" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input type="email" placeholder="Enter your email address" />
              </Field.Root>
              <Switch.Root defaultChecked>
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label>Email notifications</Switch.Label>
              </Switch.Root>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button>Save</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
