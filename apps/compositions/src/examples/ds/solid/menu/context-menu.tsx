import { Menu } from "@isbatak/solid-ui/menu"
import { Portal } from "solid-js/web"

export function MenuContextMenuDemo() {
  return (
    <Menu.Root>
      <Menu.ContextTrigger
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="full"
        maxW="sm"
        h="40"
        borderWidth="1px"
        borderStyle="dashed"
        borderRadius="l2"
        color="fg.muted"
        textStyle="sm"
      >
        Right-click here
      </Menu.ContextTrigger>
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
  )
}
