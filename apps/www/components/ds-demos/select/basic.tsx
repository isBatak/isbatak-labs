"use client"

import { createListCollection } from "@ark-ui/react/collection"
import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Select } from "@isbatak/react-ui/select"

const fruits = createListCollection({ items: ["Apple", "Banana", "Cherry"] })

export function SelectDemo() {
  return (
    <Select.Root collection={fruits} defaultValue={["Apple"]} width="48">
      <Select.Context>
        {(select) => (
          <Select.Trigger asChild>
            <Button variant="outline" justifyContent="space-between" width="full">
              {select.valueAsString || "Pick a fruit"}
            </Button>
          </Select.Trigger>
        )}
      </Select.Context>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.Item item="Apple">
              <Select.ItemText>Apple</Select.ItemText>
              <Select.ItemIndicator>✓</Select.ItemIndicator>
            </Select.Item>
            <Select.Item item="Banana">
              <Select.ItemText>Banana</Select.ItemText>
              <Select.ItemIndicator>✓</Select.ItemIndicator>
            </Select.Item>
            <Select.Item item="Cherry">
              <Select.ItemText>Cherry</Select.ItemText>
              <Select.ItemIndicator>✓</Select.ItemIndicator>
            </Select.Item>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
