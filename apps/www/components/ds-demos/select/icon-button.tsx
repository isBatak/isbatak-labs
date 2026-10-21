"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import { IconButton } from "@isbatak/react-ui/button"

const sorts = createListCollection({ items: ["Newest", "Oldest", "Most popular"] })

function SortIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 6h18M6 12h12M10 18h4" strokeLinecap="round" />
    </svg>
  )
}

export function SelectIconButtonDemo() {
  return (
    <Select.Root
      collection={sorts}
      defaultValue={["Newest"]}

      positioning={{ sameWidth: false }}
      w="auto"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger asChild>
          <IconButton variant="outline" aria-label="Sort by">
            <SortIcon />
          </IconButton>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content minW="40">
            <Select.Item item="Newest">
              <Select.ItemText>Newest</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Oldest">
              <Select.ItemText>Oldest</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Most popular">
              <Select.ItemText>Most popular</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
