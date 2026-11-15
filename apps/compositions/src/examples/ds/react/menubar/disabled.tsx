import { Portal } from "@ark-ui/react/portal"
import { Menu } from "@isbatak/react-ui/menu"
import { Menubar } from "@isbatak/react-ui/menubar"

export function MenubarDisabledDemo() {
  return (
    <Menubar.Root disabled>
      <Menu.Root>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="new">New File</Menu.Item>
              <Menu.Item value="open">Open...</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
      <Menu.Root>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="undo">Undo</Menu.Item>
              <Menu.Item value="redo">Redo</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Menubar.Root>
  )
}
