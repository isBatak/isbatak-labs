<script setup lang="ts">
import { Stack } from "@isbatak/vue-ui/stack"
import { Combobox, type ComboboxInputValueChangeDetails, useFilter, useListCollection } from "@isbatak/vue-ui/combobox"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

const { contains } = useFilter({ sensitivity: "base" })
const { collection: outlineCollection, filter: outlineFilter } = useListCollection({
  initialItems: frameworks,
  filter: contains,
})
const { collection: subtleCollection, filter: subtleFilter } = useListCollection({
  initialItems: frameworks,
  filter: contains,
})
const { collection: plainCollection, filter: plainFilter } = useListCollection({
  initialItems: frameworks,
  filter: contains,
})
const { collection: flushedCollection, filter: flushedFilter } = useListCollection({
  initialItems: frameworks,
  filter: contains,
})
</script>

<template>
  <Stack gap="5" w="full" maxW="xs">
    <Combobox.Root
      :collection="outlineCollection"
      variant="outline"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => outlineFilter(details.inputValue)"
    >
      <Combobox.Label>variant outline</Combobox.Label>
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
            <Combobox.Item v-for="framework in outlineCollection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
    <Combobox.Root
      :collection="subtleCollection"
      variant="subtle"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => subtleFilter(details.inputValue)"
    >
      <Combobox.Label>variant subtle</Combobox.Label>
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
            <Combobox.Item v-for="framework in subtleCollection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
    <Combobox.Root
      :collection="plainCollection"
      variant="plain"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => plainFilter(details.inputValue)"
    >
      <Combobox.Label>variant plain</Combobox.Label>
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
            <Combobox.Item v-for="framework in plainCollection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
    <Combobox.Root
      :collection="flushedCollection"
      variant="flushed"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => flushedFilter(details.inputValue)"
    >
      <Combobox.Label>variant flushed</Combobox.Label>
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
            <Combobox.Item v-for="framework in flushedCollection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
  </Stack>
</template>
