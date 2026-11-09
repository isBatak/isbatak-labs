import { Button } from "@isbatak/solid-ui/button"
import { Menu } from "@isbatak/solid-ui/menu"
import { Portal } from "solid-js/web"
import { createSignal } from "solid-js"

export function MenuCheckboxItemsDemo() {
  const [toolbar, setToolbar] = createSignal(true)
  const [statusBar, setStatusBar] = createSignal(true)
  const [minimap, setMinimap] = createSignal(false)

  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            View
          </Button>
        )}
      />
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Show</Menu.ItemGroupLabel>
              <Menu.CheckboxItem value="toolbar" checked={toolbar()} onCheckedChange={setToolbar}>
                <Menu.ItemIndicator />
                <Menu.ItemText>Toolbar</Menu.ItemText>
              </Menu.CheckboxItem>
              <Menu.CheckboxItem value="status-bar" checked={statusBar()} onCheckedChange={setStatusBar}>
                <Menu.ItemIndicator />
                <Menu.ItemText>Status bar</Menu.ItemText>
              </Menu.CheckboxItem>
              <Menu.CheckboxItem value="minimap" checked={minimap()} onCheckedChange={setMinimap}>
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
