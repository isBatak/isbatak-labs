"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

export function SelectDrawerDemo() {
  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild>
        <Button variant="outline">Open drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Project settings</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body pb="6">
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
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
