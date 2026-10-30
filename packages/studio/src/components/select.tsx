import { createListCollection, Select } from "@isbatak/react-ui/select"
import { select } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const selectMatrix = defineComponentMatrix({
  recipe: select,
  render: (props) => (
    <Select.Root
      collection={createListCollection({ items: ["Built-in speakers", "Headphones", "USB audio interface"] })}
      defaultValue={["Headphones"]}
      open
      {...props}
    >
      <Select.Label>Output</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select output" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.Item item="Built-in speakers">
            <Select.ItemText>Built-in speakers</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="Headphones">
            <Select.ItemText>Headphones</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item item="USB audio interface">
            <Select.ItemText>USB audio interface</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  ),
})
