<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Combobox, useFilter, useListCollection } from "@isbatak/svelte-ui/combobox"

  const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

  const filters = useFilter({ sensitivity: "base" })
  const outline = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const subtle = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const plain = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const flushed = useListCollection({ initialItems: frameworks, filter: filters.contains })
</script>

<Stack gap="5" w="full" maxW="xs">
  <Combobox.Root
    collection={outline.collection()}
    variant="outline"
    onInputValueChange={(details) => outline.filter(details.inputValue)}
  >
    <Combobox.Label>variant outline</Combobox.Label>
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
          {#each outline.collection().items as framework (framework)}
            <Combobox.Item item={framework}>
              <Combobox.ItemText>{framework}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          {/each}
        </Combobox.Content>
      </Combobox.Positioner>
    </Portal>
  </Combobox.Root>
  <Combobox.Root
    collection={subtle.collection()}
    variant="subtle"
    onInputValueChange={(details) => subtle.filter(details.inputValue)}
  >
    <Combobox.Label>variant subtle</Combobox.Label>
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
          {#each subtle.collection().items as framework (framework)}
            <Combobox.Item item={framework}>
              <Combobox.ItemText>{framework}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          {/each}
        </Combobox.Content>
      </Combobox.Positioner>
    </Portal>
  </Combobox.Root>
  <Combobox.Root
    collection={plain.collection()}
    variant="plain"
    onInputValueChange={(details) => plain.filter(details.inputValue)}
  >
    <Combobox.Label>variant plain</Combobox.Label>
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
          {#each plain.collection().items as framework (framework)}
            <Combobox.Item item={framework}>
              <Combobox.ItemText>{framework}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          {/each}
        </Combobox.Content>
      </Combobox.Positioner>
    </Portal>
  </Combobox.Root>
  <Combobox.Root
    collection={flushed.collection()}
    variant="flushed"
    onInputValueChange={(details) => flushed.filter(details.inputValue)}
  >
    <Combobox.Label>variant flushed</Combobox.Label>
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
          {#each flushed.collection().items as framework (framework)}
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
