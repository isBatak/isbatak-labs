<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Popover } from "@isbatak/svelte-ui/popover"
  import { Combobox, useFilter, useListCollection } from "@isbatak/svelte-ui/combobox"

  const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains })
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open popover</Button>
    {/snippet}
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Project settings</Popover.Title>
        </Popover.Header>
        <Popover.Body>
          <Combobox.Root
            collection={list.collection()}
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
          </Combobox.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
