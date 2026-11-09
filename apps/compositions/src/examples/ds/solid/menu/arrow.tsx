import { Button } from "@isbatak/solid-ui/button"
import { Menu } from "@isbatak/solid-ui/menu"
import { Portal } from "solid-js/web"

export function MenuArrowDemo() {
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Actions
          </Button>
        )}
      />
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Arrow>
              <Menu.ArrowTip />
            </Menu.Arrow>
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
