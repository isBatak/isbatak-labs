import { Button } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { Menu } from "@isbatak/solid-ui/menu"
import { Portal } from "solid-js/web"

export function MenuSubmenuDemo() {
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            File
          </Button>
        )}
      />
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">New file</Menu.Item>
            <Menu.Item value="open">Open</Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem>
                Share
                <Icon name="chevron-right" />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="email">Email</Menu.Item>
                    <Menu.Item value="link">Copy link</Menu.Item>
                    <Menu.Item value="embed">Embed</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Separator />
            <Menu.Item value="print">Print</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
