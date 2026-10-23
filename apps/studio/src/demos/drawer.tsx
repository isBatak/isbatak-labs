import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { Portal } from "@ark-ui/react/portal"

import { Section, StaticOverlay } from "../canvas/layout"
import type { SampleProps } from "./types"

function DrawerPanel() {
  return (
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Edit profile</Drawer.Title>
        <Drawer.Description>Make changes to your profile here.</Drawer.Description>
      </Drawer.Header>
      <Drawer.Body>Drawer body content goes here.</Drawer.Body>
      <Drawer.Footer>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </Drawer.Footer>
    </Drawer.Content>
  )
}

export function DrawerSample(props: SampleProps) {
  return (
    <StaticOverlay>
      <Drawer.Root open modal={false} trapFocus={false} preventScroll={false} contained {...props}>
        <Drawer.Positioner>
          <DrawerPanel />
        </Drawer.Positioner>
      </Drawer.Root>
    </StaticOverlay>
  )
}

export function DrawerDemo() {
  return (
    <>
      <Section title="Interactive">
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <Button variant="outline">Open drawer</Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <DrawerPanel />
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Section>
      <Section title="Open" description="Rendered in place so every part can be selected">
        <DrawerSample />
      </Section>
    </>
  )
}
