import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Menu } from "@isbatak/react-ui/menu"
import { useState } from "react"

export function MenuCheckboxItemsDemo() {
  const [toolbar, setToolbar] = useState(true)
  const [statusBar, setStatusBar] = useState(true)
  const [minimap, setMinimap] = useState(false)

  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger asChild>
        <Button variant="outline">View</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Show</Menu.ItemGroupLabel>
              <Menu.CheckboxItem value="toolbar" checked={toolbar} onCheckedChange={setToolbar}>
                <Menu.ItemIndicator />
                <Menu.ItemText>Toolbar</Menu.ItemText>
              </Menu.CheckboxItem>
              <Menu.CheckboxItem value="status-bar" checked={statusBar} onCheckedChange={setStatusBar}>
                <Menu.ItemIndicator />
                <Menu.ItemText>Status bar</Menu.ItemText>
              </Menu.CheckboxItem>
              <Menu.CheckboxItem value="minimap" checked={minimap} onCheckedChange={setMinimap}>
                <Menu.ItemIndicator />
                <Menu.ItemText>Minimap</Menu.ItemText>
              </Menu.CheckboxItem>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
