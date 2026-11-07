<script setup lang="ts">
import { createListCollection, Select } from "@isbatak/vue-ui/select"
import { Stack } from "@isbatak/vue-ui/stack"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

const frameworksWithDisabled = createListCollection({
  items: ["React", "Vue", "Solid", "Svelte", "Angular"],
  isItemDisabled: (item) => item === "Angular",
})
</script>

<template>
  <Stack gap="5" w="full" maxW="xs">
    <Select.Root :collection="frameworks" :disabled="true">
      <Select.HiddenSelect />
      <Select.Label>Disabled select</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
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
    <Select.Root :collection="frameworksWithDisabled">
      <Select.HiddenSelect />
      <Select.Label>Disabled item</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
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
  </Stack>
</template>
