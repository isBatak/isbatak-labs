"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import { Stack } from "styled-system/jsx"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

export function SelectVariantsDemo() {
  return (
    <Stack gap="5" w="full" maxW="xs">
      <Select.Root collection={frameworks} variant="outline">
        <Select.HiddenSelect />
        <Select.Label>variant outline</Select.Label>
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
      <Select.Root collection={frameworks} variant="subtle">
        <Select.HiddenSelect />
        <Select.Label>variant subtle</Select.Label>
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
      <Select.Root collection={frameworks} variant="ghost">
        <Select.HiddenSelect />
        <Select.Label>variant ghost</Select.Label>
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
    </Stack>
  )
}
