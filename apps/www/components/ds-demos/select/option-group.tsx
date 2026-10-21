"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react", group: "Frontend" },
    { label: "Vue", value: "vue", group: "Frontend" },
    { label: "Solid", value: "solid", group: "Frontend" },
    { label: "Django", value: "django", group: "Backend" },
    { label: "Rails", value: "rails", group: "Backend" },
    { label: "Laravel", value: "laravel", group: "Backend" },
  ],
  groupBy: (item) => item.group,
})

export function SelectOptionGroupDemo() {
  return (
    <Select.Root collection={frameworks} maxW="xs">
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
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frontend</Select.ItemGroupLabel>
              <Select.Item item={{ label: "React", value: "react", group: "Frontend" }}>
                <Select.ItemText>React</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item item={{ label: "Vue", value: "vue", group: "Frontend" }}>
                <Select.ItemText>Vue</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item item={{ label: "Solid", value: "solid", group: "Frontend" }}>
                <Select.ItemText>Solid</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            </Select.ItemGroup>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Backend</Select.ItemGroupLabel>
              <Select.Item item={{ label: "Django", value: "django", group: "Backend" }}>
                <Select.ItemText>Django</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item item={{ label: "Rails", value: "rails", group: "Backend" }}>
                <Select.ItemText>Rails</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item item={{ label: "Laravel", value: "laravel", group: "Backend" }}>
                <Select.ItemText>Laravel</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
