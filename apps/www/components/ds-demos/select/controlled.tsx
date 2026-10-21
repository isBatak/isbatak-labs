"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import { useState } from "react"
import { Stack, styled } from "styled-system/jsx"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

export function SelectControlledDemo() {
  const [value, setValue] = useState<string[]>(["Vue"])

  return (
    <Stack gap="3" w="full" maxW="xs">
      <Select.Root collection={frameworks} value={value} onValueChange={(details) => setValue(details.value)}>
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
      <styled.p textStyle="sm" color="fg.muted">
        Selected: {value.join(", ") || "nothing"}
      </styled.p>
    </Stack>
  )
}
