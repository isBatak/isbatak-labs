<script setup lang="ts">
import { Combobox, type ComboboxInputValueChangeDetails, useFilter, useListCollection } from "@isbatak/vue-ui/combobox"

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

const { contains } = useFilter({ sensitivity: "base" })
const { collection, filter } = useListCollection({
  initialItems: frameworks,
  filter: contains,
  groupBy: (item) => item.group,
})
</script>

<template>
  <Combobox.Root
    :collection="collection"
    maxW="xs"
    @input-value-change="(details: ComboboxInputValueChangeDetails) => filter(details.inputValue)"
  >
    <Combobox.Label>Framework</Combobox.Label>
    <Combobox.Control>
      <Combobox.Input placeholder="Type to search" />
      <Combobox.IndicatorGroup>
        <Combobox.ClearTrigger />
        <Combobox.Trigger />
      </Combobox.IndicatorGroup>
    </Combobox.Control>
    <Teleport to="body">
      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.Empty>No frameworks found</Combobox.Empty>
          <Combobox.ItemGroup v-for="[group, groupItems] in collection.group()" :key="group">
            <Combobox.ItemGroupLabel>{{ group }}</Combobox.ItemGroupLabel>
            <Combobox.Item v-for="item in groupItems" :key="item.value" :item="item">
              <Combobox.ItemText>{{ item.label }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Teleport>
  </Combobox.Root>
</template>
