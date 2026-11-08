<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Popover } from "@isbatak/vue-ui/popover"
import { Combobox, type ComboboxInputValueChangeDetails, useFilter, useListCollection } from "@isbatak/vue-ui/combobox"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

const { contains } = useFilter({ sensitivity: "base" })
const { collection, filter } = useListCollection({ initialItems: frameworks, filter: contains })
</script>

<template>
  <Popover.Root>
    <Popover.Trigger :asChild="true">
      <Button variant="outline">Open popover</Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Header>
            <Popover.Title>Project settings</Popover.Title>
          </Popover.Header>
          <Popover.Body>
            <Combobox.Root
              :collection="collection"
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
              <Combobox.Positioner>
                <Combobox.Content>
                  <Combobox.Empty>No frameworks found</Combobox.Empty>
                  <Combobox.Item v-for="framework in collection.items" :key="framework" :item="framework">
                    <Combobox.ItemText>{{ framework }}</Combobox.ItemText>
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                </Combobox.Content>
              </Combobox.Positioner>
            </Combobox.Root>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
