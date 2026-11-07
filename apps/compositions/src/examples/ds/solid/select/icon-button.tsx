import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { createListCollection, Select } from "@isbatak/solid-ui/select"
import { Portal } from "solid-js/web"

const sorts = createListCollection({ items: ["Newest", "Oldest", "Most popular"] })

export function SelectIconButtonDemo() {
  return (
    <Select.Root collection={sorts} defaultValue={["Newest"]} positioning={{ sameWidth: false }} w="auto">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
          asChild={(props) => (
            <IconButton {...props()} variant="outline" aria-label="Sort by">
              <Icon name="sort" />
            </IconButton>
          )}
        />
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content minW="40">
            <Select.Item item="Newest">
              <Select.ItemText>Newest</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Oldest">
              <Select.ItemText>Oldest</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Most popular">
              <Select.ItemText>Most popular</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
