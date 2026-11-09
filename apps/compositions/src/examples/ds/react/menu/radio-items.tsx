import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Menu } from "@isbatak/react-ui/menu"
import { useState } from "react"

export function MenuRadioItemsDemo() {
  const [sort, setSort] = useState("name")

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">Sort</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.RadioItemGroup value={sort} onValueChange={(details) => setSort(details.value)}>
              <Menu.ItemGroupLabel>Sort by</Menu.ItemGroupLabel>
              <Menu.RadioItem value="name">
                <Menu.ItemIndicator />
                <Menu.ItemText>Name</Menu.ItemText>
              </Menu.RadioItem>
              <Menu.RadioItem value="date">
                <Menu.ItemIndicator />
                <Menu.ItemText>Date modified</Menu.ItemText>
              </Menu.RadioItem>
              <Menu.RadioItem value="size">
                <Menu.ItemIndicator />
                <Menu.ItemText>Size</Menu.ItemText>
              </Menu.RadioItem>
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
