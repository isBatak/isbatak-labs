<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { createListCollection, Select } from "@isbatak/svelte-ui/select"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

  let value = $state<string[]>(["Vue"])
</script>

<Stack gap="3" w="full" maxW="xs">
  <Select.Root collection={frameworks} {value} onValueChange={(details) => (value = details.value)}>
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
    <Portal>
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
    </Portal>
  </Select.Root>
  <Text textStyle="sm" color="fg.muted">
    Selected: {value.join(", ") || "nothing"}
  </Text>
</Stack>
