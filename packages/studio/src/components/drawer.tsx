import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { drawer } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const drawerMatrix = defineComponentMatrix({
  recipe: drawer,
  render: (props) => (
    <Drawer.Root open modal={false} trapFocus={false} preventScroll={false} float {...props}>
      <Drawer.Positioner>
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
      </Drawer.Positioner>
    </Drawer.Root>
  ),
})
