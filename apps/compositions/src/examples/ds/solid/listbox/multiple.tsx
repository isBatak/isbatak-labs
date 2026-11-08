import { Icon } from "@isbatak/solid-ui/icon"
import { createListCollection, Listbox } from "@isbatak/solid-ui/listbox"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte"] })

export function ListboxMultipleDemo() {
  return (
    <Listbox.Root collection={frameworks} selectionMode="multiple" defaultValue={["React", "Svelte"]} maxW="xs">
      <Listbox.Label>Frameworks</Listbox.Label>
      <Listbox.Content>
        <Listbox.Item item="React">
          <Listbox.ItemText>React</Listbox.ItemText>
          <Listbox.ItemIndicator>
            <Icon name="check" />
          </Listbox.ItemIndicator>
        </Listbox.Item>
        <Listbox.Item item="Vue">
          <Listbox.ItemText>Vue</Listbox.ItemText>
          <Listbox.ItemIndicator>
            <Icon name="check" />
          </Listbox.ItemIndicator>
        </Listbox.Item>
        <Listbox.Item item="Solid">
          <Listbox.ItemText>Solid</Listbox.ItemText>
          <Listbox.ItemIndicator>
            <Icon name="check" />
          </Listbox.ItemIndicator>
        </Listbox.Item>
        <Listbox.Item item="Svelte">
          <Listbox.ItemText>Svelte</Listbox.ItemText>
          <Listbox.ItemIndicator>
            <Icon name="check" />
          </Listbox.ItemIndicator>
        </Listbox.Item>
      </Listbox.Content>
    </Listbox.Root>
  )
}
