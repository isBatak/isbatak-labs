import { Button } from "@isbatak/solid-ui/button"
import { Menu } from "@isbatak/solid-ui/menu"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function MenuSizesDemo() {
  return (
    <HStack gap="4">
      <Menu.Root size="sm">
        <Menu.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm">
              Small
            </Button>
          )}
        />
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
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
      <Menu.Root size="md">
        <Menu.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Medium
            </Button>
          )}
        />
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
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
    </HStack>
  )
}
