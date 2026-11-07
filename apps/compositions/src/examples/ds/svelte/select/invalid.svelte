<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { field } from "@isbatak/panda-ds/recipes"
  import { createListCollection, Select } from "@isbatak/svelte-ui/select"
  import { css } from "styled-system/css"

  const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

  const fieldClasses = field()
</script>

<Select.Root collection={frameworks} invalid class={css({ maxW: "xs" })}>
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
  <span class={fieldClasses.errorText}>Pick the framework your project uses.</span>
</Select.Root>
