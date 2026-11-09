import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Menu } from "@isbatak/react-ui/menu"
import { HStack } from "styled-system/jsx"

export function MenuVariantsDemo() {
  return (
    <HStack gap="4">
      <Menu.Root variant="subtle">
        <Menu.Trigger asChild>
          <Button variant="outline">Subtle</Button>
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
      <Menu.Root variant="solid">
        <Menu.Trigger asChild>
          <Button variant="outline">Solid</Button>
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
