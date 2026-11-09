import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Menu } from "@isbatak/react-ui/menu"
import { HStack } from "styled-system/jsx"

export function MenuSizesDemo() {
  return (
    <HStack gap="4">
      <Menu.Root size="sm">
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Small
          </Button>
        </Menu.Trigger>
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
        <Menu.Trigger asChild>
          <Button variant="outline">Medium</Button>
        </Menu.Trigger>
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
