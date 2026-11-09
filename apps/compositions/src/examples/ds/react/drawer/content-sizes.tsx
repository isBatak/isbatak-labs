import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { Wrap } from "styled-system/jsx"

export function DrawerContentSizesDemo() {
  return (
    <Wrap gap="4">
      <Drawer.Root contentSize="xs">
        <Drawer.Trigger asChild>
          <Button variant="outline">xs</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Preferences</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Change your preferences here. They apply to every device you sign in on.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <Drawer.Root contentSize="sm">
        <Drawer.Trigger asChild>
          <Button variant="outline">sm</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Preferences</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Change your preferences here. They apply to every device you sign in on.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <Drawer.Root contentSize="md">
        <Drawer.Trigger asChild>
          <Button variant="outline">md</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Preferences</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Change your preferences here. They apply to every device you sign in on.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <Drawer.Root contentSize="lg">
        <Drawer.Trigger asChild>
          <Button variant="outline">lg</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Preferences</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Change your preferences here. They apply to every device you sign in on.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <Drawer.Root contentSize="xl">
        <Drawer.Trigger asChild>
          <Button variant="outline">xl</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Preferences</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Change your preferences here. They apply to every device you sign in on.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <Drawer.Root contentSize="full">
        <Drawer.Trigger asChild>
          <Button variant="outline">full</Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Preferences</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Change your preferences here. They apply to every device you sign in on.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.ActionTrigger>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Wrap>
  )
}
