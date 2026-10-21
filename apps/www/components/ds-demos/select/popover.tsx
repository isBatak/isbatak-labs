"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

export function SelectPopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open popover</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Project settings</Popover.Title>
            </Popover.Header>
            <Popover.Body>
              <Select.Root collection={frameworks}>
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
              </Select.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
