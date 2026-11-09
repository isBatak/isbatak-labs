import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Menu } from "@isbatak/react-ui/menu"

export function MenuModalModeDemo() {
  return (
    <Menu.Root modalMode>
      <Menu.Trigger asChild>
        <Button variant="outline">Open as a sheet</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Backdrop />
        <Menu.Positioner>
          <Menu.Content>
            <Menu.CloseTrigger />
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="duplicate">Duplicate</Menu.Item>
            <Menu.Item value="share">Share</Menu.Item>
            <Menu.Separator />
            <Menu.Item value="delete" color="fg.error">
              Delete
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
