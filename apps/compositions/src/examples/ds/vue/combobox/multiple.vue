<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Stack } from "@isbatak/vue-ui/stack"
import { Wrap } from "@isbatak/vue-ui/wrap"
import { ref } from "vue"
import { Combobox, type ComboboxInputValueChangeDetails, useFilter, useListCollection } from "@isbatak/vue-ui/combobox"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

const value = ref<string[]>([])
const { contains } = useFilter({ sensitivity: "base" })
const { collection, filter } = useListCollection({ initialItems: frameworks, filter: contains })
</script>

<template>
  <Stack gap="3" w="full" maxW="xs">
    <Wrap gap="2">
      <Badge v-for="framework in value" :key="framework">{{ framework }}</Badge>
    </Wrap>
    <Combobox.Root
      :collection="collection"
      :multiple="true"
      :closeOnSelect="false"
      v-model="value"
      @input-value-change="(details: ComboboxInputValueChangeDetails) => filter(details.inputValue)"
    >
      <Combobox.Label>Frameworks</Combobox.Label>
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
            <Combobox.Item v-for="framework in collection.items" :key="framework" :item="framework">
              <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
  </Stack>
</template>
