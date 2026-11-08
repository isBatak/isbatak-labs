<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Combobox, useFilter, useListCollection } from "@isbatak/svelte-ui/combobox"
  import { css } from "styled-system/css"

  const frameworks = [
    { label: "React", value: "react", group: "Frontend" },
    { label: "Vue", value: "vue", group: "Frontend" },
    { label: "Solid", value: "solid", group: "Frontend" },
    { label: "Svelte", value: "svelte", group: "Frontend" },
    { label: "Django", value: "django", group: "Backend" },
    { label: "Rails", value: "rails", group: "Backend" },
    { label: "Laravel", value: "laravel", group: "Backend" },
    { label: "Phoenix", value: "phoenix", group: "Backend" },
  ]

  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains, groupBy: (item) => item.group })
</script>

<Combobox.Root
  collection={list.collection()}
  class={css({ maxW: "xs" })}
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
        {#each list.collection().group() as [group, groupItems] (group)}
          <Combobox.ItemGroup>
            <Combobox.ItemGroupLabel>{group}</Combobox.ItemGroupLabel>
            {#each groupItems as item (item.value)}
              <Combobox.Item {item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            {/each}
          </Combobox.ItemGroup>
        {/each}
      </Combobox.Content>
    </Combobox.Positioner>
  </Portal>
</Combobox.Root>
