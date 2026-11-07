<script setup lang="ts">
import { createListCollection, Select } from "@isbatak/vue-ui/select"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })
</script>

<template>
  <Select.Root :collection="frameworks" :defaultValue="['React']" maxW="xs">
    <Select.HiddenSelect />
    <Select.Label>Framework</Select.Label>
    <Select.Control>
      <Select.Trigger>
        <Select.ValueText placeholder="Select framework" />
      </Select.Trigger>
      <Select.IndicatorGroup>
        <Select.ClearTrigger />
        <Select.Indicator />
      </Select.IndicatorGroup>
    </Select.Control>
    <Teleport to="body">
      <Select.Positioner>
        <Select.Content>
          <Select.Item item="React">
            <Select.ItemText>React</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="Vue">
            <Select.ItemText>Vue</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="Solid">
            <Select.ItemText>Solid</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="Svelte">
            <Select.ItemText>Svelte</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="Angular">
            <Select.ItemText>Angular</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.Content>
      </Select.Positioner>
    </Teleport>
  </Select.Root>
</template>
