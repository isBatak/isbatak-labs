import { Button } from "@isbatak/solid-ui/button"
import { Menu } from "@isbatak/solid-ui/menu"
import { Portal } from "solid-js/web"
import { createSignal } from "solid-js"

export function MenuRadioItemsDemo() {
  const [sort, setSort] = createSignal("name")

  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Sort
          </Button>
        )}
      />
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.RadioItemGroup value={sort()} onValueChange={(details) => setSort(details.value)}>
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
