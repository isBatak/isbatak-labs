import { Menu } from "@isbatak/react-ui/menu"
import { menu } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const menuMatrix = defineComponentMatrix({
  recipe: menu,
  render: (props) => (
    <Menu.Root open {...props}>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new">New file</Menu.Item>
          <Menu.Item value="open">Open…</Menu.Item>
          <Menu.Separator />
          <Menu.Item value="delete" color="fg.error">
            Delete
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
})
