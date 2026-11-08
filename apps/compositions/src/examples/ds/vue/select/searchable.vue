<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { InputGroup } from "@isbatak/vue-ui/input-group"
import { createListCollection, Select, type SelectOpenChangeDetails, useFilter } from "@isbatak/vue-ui/select"
import { ref, computed } from "vue"

const countries = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Croatia",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Iceland",
  "Ireland",
  "Italy",
  "Japan",
  "Netherlands",
  "Norway",
  "Portugal",
  "Spain",
  "Sweden",
]

const searchRef = ref<HTMLInputElement | null>(null)
const query = ref("")
const filter = useFilter({ sensitivity: "base" })
const items = computed(() => countries.filter((country) => filter.contains(country, query.value)))
const collection = computed(() => createListCollection({ items: items.value }))

function onOpenChange(details: SelectOpenChangeDetails) {
  if (details.open) requestAnimationFrame(() => searchRef.value?.focus())
  else query.value = ""
}
</script>

<template>
  <Select.Root :collection="collection" maxW="xs" @open-change="onOpenChange">
    <Select.HiddenSelect />
    <Select.Label>Country</Select.Label>
    <Select.Control>
      <Select.Trigger>
        <Select.ValueText placeholder="Select country" />
      </Select.Trigger>
      <Select.IndicatorGroup>
        <Select.Indicator />
      </Select.IndicatorGroup>
    </Select.Control>
    <Teleport to="body">
      <Select.Positioner>
        <Select.Content maxH="72">
          <InputGroup>
            <template #startElement><Icon name="search" /></template>
            <Select.Search ref="searchRef" v-model="query" placeholder="Search..." aria-label="Search countries" />
          </InputGroup>
          <Select.List>
            <Select.Item v-for="country in collection.items" :key="country" :item="country">
              <Select.ItemText>{{ country }}</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Empty v-if="collection.size === 0">No countries found</Select.Empty>
          </Select.List>
        </Select.Content>
      </Select.Positioner>
    </Teleport>
  </Select.Root>
</template>
