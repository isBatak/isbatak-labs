<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { field } from "@isbatak/panda-ds/recipes"
  import { Combobox, useFilter, useListCollection } from "@isbatak/svelte-ui/combobox"
  import { css } from "styled-system/css"

  const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const fieldClasses = field()
</script>

<Combobox.Root
  collection={list.collection()}
  invalid
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
        {#each list.collection().items as framework (framework)}
          <Combobox.Item item={framework}>
            <Combobox.ItemText>{framework}</Combobox.ItemText>
            <Combobox.ItemIndicator />
          </Combobox.Item>
        {/each}
      </Combobox.Content>
    </Combobox.Positioner>
  </Portal>
  <span class={fieldClasses.errorText}>Pick the framework your project uses.</span>
</Combobox.Root>
