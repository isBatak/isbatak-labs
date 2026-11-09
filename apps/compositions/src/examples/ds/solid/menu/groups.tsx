import { Button } from "@isbatak/solid-ui/button"
import { Menu } from "@isbatak/solid-ui/menu"
import { Portal } from "solid-js/web"

export function MenuGroupsDemo() {
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Edit
          </Button>
        )}
      />
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Styles</Menu.ItemGroupLabel>
              <Menu.Item value="bold">Bold</Menu.Item>
              <Menu.Item value="italic">Italic</Menu.Item>
              <Menu.Item value="underline">Underline</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Separator />
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Align</Menu.ItemGroupLabel>
              <Menu.Item value="left">Left</Menu.Item>
              <Menu.Item value="center">Center</Menu.Item>
              <Menu.Item value="right">Right</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
