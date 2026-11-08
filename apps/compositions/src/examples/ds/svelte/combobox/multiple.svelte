<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Wrap } from "@isbatak/svelte-ui/wrap"
  import { Combobox, useFilter, useListCollection } from "@isbatak/svelte-ui/combobox"

  const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

  let value = $state<string[]>([])
  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains })
</script>

<Stack gap="3" w="full" maxW="xs">
  <Wrap gap="2">
    {#each value as framework (framework)}
      <Badge>{framework}</Badge>
    {/each}
  </Wrap>
  <Combobox.Root
    collection={list.collection()}
    multiple
    closeOnSelect={false}
    {value}
    onValueChange={(details) => (value = details.value)}
    onInputValueChange={(details) => list.filter(details.inputValue)}
  >
    <Combobox.Label>Frameworks</Combobox.Label>
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
</Stack>
