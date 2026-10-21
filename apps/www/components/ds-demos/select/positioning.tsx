"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

export function SelectPositioningDemo() {
  return (
    <Select.Root collection={frameworks} positioning={{ placement: "top", flip: false, sameWidth: false }} maxW="xs">
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
  )
}
