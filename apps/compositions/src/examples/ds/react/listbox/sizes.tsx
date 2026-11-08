import { Icon } from "@isbatak/react-ui/icon"
import { createListCollection, Listbox } from "@isbatak/react-ui/listbox"
import { Stack } from "styled-system/jsx"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte"] })

export function ListboxSizesDemo() {
  return (
    <Stack gap="4" w="full" maxW="xs">
      <Listbox.Root collection={frameworks} size="sm">
        <Listbox.Label>size sm</Listbox.Label>
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
      <Listbox.Root collection={frameworks} size="md">
        <Listbox.Label>size md</Listbox.Label>
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
    </Stack>
  )
}
