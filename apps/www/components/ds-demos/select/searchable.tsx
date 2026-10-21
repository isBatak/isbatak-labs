"use client"

import { Portal } from "@ark-ui/react/portal"
import { InputGroup } from "@isbatak/react-ui/input-group"
import { Select, useFilter, useListCollection } from "@isbatak/react-ui/select"
import { useRef } from "react"

import { Icon } from "../../ui/icon"

const countries = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Croatia",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Iceland",
  "Ireland",
  "Italy",
  "Japan",
  "Netherlands",
  "Norway",
  "Portugal",
  "Spain",
  "Sweden",
]

export function SelectSearchableDemo() {
  const searchRef = useRef<HTMLInputElement>(null)
  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({ initialItems: countries, filter: contains })

  return (
    <Select.Root
      collection={collection}
      maxW="xs"
      onOpenChange={(details) => {
        if (details.open) requestAnimationFrame(() => searchRef.current?.focus())
        else filter("")
      }}
    >
      <Select.HiddenSelect />
      <Select.Label>Country</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select country" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content maxH="72">
            <InputGroup startElement={<Icon name="search" />}>
              <Select.Search
                ref={searchRef}
                placeholder="Search..."
                aria-label="Search countries"
                onChange={(event) => filter(event.currentTarget.value)}
              />
            </InputGroup>
            <Select.List>
              {collection.items.map((country) => (
                <Select.Item key={country} item={country}>
                  <Select.ItemText>{country}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
              {collection.size === 0 && <Select.Empty>No countries found</Select.Empty>}
            </Select.List>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
