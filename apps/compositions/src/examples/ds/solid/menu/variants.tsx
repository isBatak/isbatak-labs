import { Button } from "@isbatak/solid-ui/button"
import { Menu } from "@isbatak/solid-ui/menu"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function MenuVariantsDemo() {
  return (
    <HStack gap="4">
      <Menu.Root variant="subtle">
        <Menu.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Subtle
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
      <Menu.Root variant="solid">
        <Menu.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Solid
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
