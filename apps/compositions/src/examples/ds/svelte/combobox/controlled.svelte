<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { Combobox, useFilter, useListCollection } from "@isbatak/svelte-ui/combobox"

  const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

  let value = $state<string[]>(["Vue"])
  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains })
</script>

<Stack gap="3" w="full" maxW="xs">
  <Combobox.Root
    collection={list.collection()}
    {value}
    onValueChange={(details) => (value = details.value)}
    onInputValueChange={(details) => list.filter(details.inputValue)}
  >
    <Combobox.Label>Framework</Combobox.Label>
    <Combobox.Control>
      <Combobox.Input placeholder="Type to search" />
      <Combobox.IndicatorGroup>
        <Combobox.ClearTrigger />
        <Combobox.Trigger />
      </Combobox.IndicatorGroup>
    </Combobox.Control>
    <Portal>
      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.Empty>No frameworks found</Combobox.Empty>
          {#each list.collection().items as framework (framework)}
            <Combobox.Item item={framework}>
              <Combobox.ItemText>{framework}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          {/each}
        </Combobox.Content>
      </Combobox.Positioner>
    </Portal>
  </Combobox.Root>
  <Text textStyle="sm" color="fg.muted">Selected: {value.length > 0 ? value.join(", ") : "none"}</Text>
</Stack>
