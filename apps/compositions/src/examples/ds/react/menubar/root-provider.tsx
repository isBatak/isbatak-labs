import { Portal } from "@ark-ui/react/portal"
import { Menu } from "@isbatak/react-ui/menu"
import { Menubar, useMenubar } from "@isbatak/react-ui/menubar"
import { Stack } from "@isbatak/react-ui/stack"
import { css } from "styled-system/css"

export function MenubarRootProviderDemo() {
  const menubar = useMenubar()

  return (
    <Stack gap="3" align="flex-start">
      <p className={css({ color: "fg.muted", textStyle: "sm" })}>Menu open: {String(menubar.hasOpenMenu)}</p>
      <Menubar.RootProvider value={menubar}>
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
      </Menubar.RootProvider>
    </Stack>
  )
}
