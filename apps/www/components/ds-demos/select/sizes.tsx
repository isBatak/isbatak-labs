"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import { Stack } from "styled-system/jsx"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

export function SelectSizesDemo() {
  return (
    <Stack gap="5" w="full" maxW="xs">
      <Select.Root collection={frameworks} size="xs">
        <Select.HiddenSelect />
        <Select.Label>size xs</Select.Label>
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
      <Select.Root collection={frameworks} size="sm">
        <Select.HiddenSelect />
        <Select.Label>size sm</Select.Label>
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
      <Select.Root collection={frameworks} size="md">
        <Select.HiddenSelect />
        <Select.Label>size md</Select.Label>
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
      <Select.Root collection={frameworks} size="lg">
        <Select.HiddenSelect />
        <Select.Label>size lg</Select.Label>
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
