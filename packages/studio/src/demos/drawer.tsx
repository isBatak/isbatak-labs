import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

import { StaticOverlay } from "../canvas/layout"
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
      <Drawer.Root open modal={false} trapFocus={false} preventScroll={false} float {...props}>
        <Drawer.Positioner>
          <DrawerPanel />
        </Drawer.Positioner>
      </Drawer.Root>
    </StaticOverlay>
  )
}
