<script setup lang="ts">
import { Stack } from "@isbatak/vue-ui/stack"
import { Combobox, type ComboboxInputValueChangeDetails, useFilter, useListCollection } from "@isbatak/vue-ui/combobox"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

const { contains } = useFilter({ sensitivity: "base" })
const { collection: xsCollection, filter: xsFilter } = useListCollection({ initialItems: frameworks, filter: contains })
const { collection: smCollection, filter: smFilter } = useListCollection({ initialItems: frameworks, filter: contains })
const { collection: mdCollection, filter: mdFilter } = useListCollection({ initialItems: frameworks, filter: contains })
const { collection: lgCollection, filter: lgFilter } = useListCollection({ initialItems: frameworks, filter: contains })
</script>

<template>
  <Stack gap="5" w="full" maxW="xs">
    <Combobox.Root
      :collection="xsCollection"
      size="xs"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => xsFilter(details.inputValue)"
    >
      <Combobox.Label>size xs</Combobox.Label>
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
            <Combobox.Item v-for="framework in xsCollection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
    <Combobox.Root
      :collection="smCollection"
      size="sm"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => smFilter(details.inputValue)"
    >
      <Combobox.Label>size sm</Combobox.Label>
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
            <Combobox.Item v-for="framework in smCollection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
    <Combobox.Root
      :collection="mdCollection"
      size="md"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => mdFilter(details.inputValue)"
    >
      <Combobox.Label>size md</Combobox.Label>
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
            <Combobox.Item v-for="framework in mdCollection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
    <Combobox.Root
      :collection="lgCollection"
      size="lg"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => lgFilter(details.inputValue)"
    >
      <Combobox.Label>size lg</Combobox.Label>
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
            <Combobox.Item v-for="framework in lgCollection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
  </Stack>
</template>
