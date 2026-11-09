import { Button } from "@isbatak/solid-ui/button"
import { Menu } from "@isbatak/solid-ui/menu"
import { Portal } from "solid-js/web"

export function MenuModalModeDemo() {
  return (
    <Menu.Root modalMode>
      <Menu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open as a sheet
          </Button>
        )}
      />
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
