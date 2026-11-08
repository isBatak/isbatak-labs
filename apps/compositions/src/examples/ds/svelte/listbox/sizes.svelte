<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { createListCollection, Listbox } from "@isbatak/svelte-ui/listbox"
  import { Stack } from "@isbatak/svelte-ui/stack"

  const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte"] })
</script>

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
