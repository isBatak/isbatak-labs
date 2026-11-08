<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Combobox, useFilter, useListCollection } from "@isbatak/svelte-ui/combobox"

  const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

  const filters = useFilter({ sensitivity: "base" })
  const xs = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const sm = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const md = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const lg = useListCollection({ initialItems: frameworks, filter: filters.contains })
</script>

<Stack gap="5" w="full" maxW="xs">
  <Combobox.Root
    collection={xs.collection()}
    size="xs"
    onInputValueChange={(details) => xs.filter(details.inputValue)}
  >
    <Combobox.Label>size xs</Combobox.Label>
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
          {#each xs.collection().items as framework (framework)}
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
    collection={sm.collection()}
    size="sm"
    onInputValueChange={(details) => sm.filter(details.inputValue)}
  >
    <Combobox.Label>size sm</Combobox.Label>
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
          {#each sm.collection().items as framework (framework)}
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
    collection={md.collection()}
    size="md"
    onInputValueChange={(details) => md.filter(details.inputValue)}
  >
    <Combobox.Label>size md</Combobox.Label>
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
          {#each md.collection().items as framework (framework)}
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
    collection={lg.collection()}
    size="lg"
    onInputValueChange={(details) => lg.filter(details.inputValue)}
  >
    <Combobox.Label>size lg</Combobox.Label>
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
          {#each lg.collection().items as framework (framework)}
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
