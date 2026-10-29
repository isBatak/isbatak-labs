import { createListCollection } from "@ark-ui/react/collection"
import { Select } from "@isbatak/react-ui/select"

import { StaticOverlay } from "../canvas/layout"
import { CheckIcon } from "./primitives"
import type { SampleProps } from "./types"

const react = { label: "React", value: "react" }
const vue = { label: "Vue", value: "vue" }
const svelte = { label: "Svelte", value: "svelte" }
const frameworks = createListCollection({ items: [react, vue, svelte] })

function SelectItems() {
  return (
    <Select.Content>
      <Select.Item item={react}>
        <Select.ItemText>React</Select.ItemText>
        <Select.ItemIndicator>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
      <Select.Item item={vue}>
        <Select.ItemText>Vue</Select.ItemText>
        <Select.ItemIndicator>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
      <Select.Item item={svelte}>
        <Select.ItemText>Svelte</Select.ItemText>
        <Select.ItemIndicator>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    </Select.Content>
  )
}

export function SelectSample(props: SampleProps) {
  return (
    <StaticOverlay>
      <Select.Root collection={frameworks} defaultValue={["react"]} open {...props}>
        <Select.Positioner>
          <SelectItems />
        </Select.Positioner>
      </Select.Root>
    </StaticOverlay>
  )
}
