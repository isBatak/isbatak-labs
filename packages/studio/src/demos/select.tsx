import { createListCollection } from "@ark-ui/react/collection"
import { Portal } from "@ark-ui/react/portal"
import { Select as ArkSelect } from "@ark-ui/react/select"
import { Select } from "@isbatak/react-ui/select"
import { Button } from "@isbatak/react-ui/button"

import { Section, StaticOverlay } from "../canvas/layout"
import { CheckIcon, ChevronDownIcon } from "./primitives"
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

export function SelectDemo() {
  return (
    <>
      <Section title="Interactive">
        <Select.Root collection={frameworks} defaultValue={["react"]} positioning={{ sameWidth: true }}>
          <Select.Trigger asChild>
            <Button variant="outline" w="60" justifyContent="space-between">
              <ArkSelect.ValueText placeholder="Framework" />
              <ChevronDownIcon />
            </Button>
          </Select.Trigger>
          <Portal>
            <Select.Positioner>
              <SelectItems />
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </Section>
      <Section title="Open">
        <SelectSample />
      </Section>
    </>
  )
}
