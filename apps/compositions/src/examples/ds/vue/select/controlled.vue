<script setup lang="ts">
import { createListCollection, Select } from "@isbatak/vue-ui/select"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

const value = ref<string[]>(["Vue"])
</script>

<template>
  <Stack gap="3" w="full" maxW="xs">
    <Select.Root :collection="frameworks" v-model="value">
      <Select.HiddenSelect />
      <Select.Label>Framework</Select.Label>
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
    <Text textStyle="sm" color="fg.muted"> Selected: {{ value.join(", ") || "nothing" }} </Text>
  </Stack>
</template>
