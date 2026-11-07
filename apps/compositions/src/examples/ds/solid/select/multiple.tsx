import { createListCollection, Select } from "@isbatak/solid-ui/select"
import { Portal } from "solid-js/web"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

export function SelectMultipleDemo() {
  return (
    <Select.Root collection={frameworks} multiple maxW="xs">
      <Select.HiddenSelect />
      <Select.Label>Frameworks</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select frameworks" />
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
  )
}
