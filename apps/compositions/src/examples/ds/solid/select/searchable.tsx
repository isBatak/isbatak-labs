import { Icon } from "@isbatak/solid-ui/icon"
import { InputGroup } from "@isbatak/solid-ui/input-group"
import { Select, useFilter, createListCollection } from "@isbatak/solid-ui/select"
import { createMemo, createSignal, For, Show } from "solid-js"
import { Portal } from "solid-js/web"

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
  const [searchRef, setSearchRef] = createSignal<HTMLInputElement>()
  const [query, setQuery] = createSignal("")
  const filter = useFilter({ sensitivity: "base" })
  const collection = createMemo(() =>
    createListCollection({ items: countries.filter((country) => filter.contains(country, query())) }),
  )

  return (
    <Select.Root
      collection={collection()}
      maxW="xs"
      onOpenChange={(details) => {
        if (details.open) requestAnimationFrame(() => searchRef()?.focus())
        else setQuery("")
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
                ref={setSearchRef}
                value={query()}
                placeholder="Search..."
                aria-label="Search countries"
                onInput={(event) => setQuery(event.currentTarget.value)}
              />
            </InputGroup>
            <Select.List>
              <For each={collection().items}>
                {(country) => (
                  <Select.Item item={country}>
                    <Select.ItemText>{country}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                )}
              </For>
              <Show when={collection().size === 0}>
                <Select.Empty>No countries found</Select.Empty>
              </Show>
            </Select.List>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
