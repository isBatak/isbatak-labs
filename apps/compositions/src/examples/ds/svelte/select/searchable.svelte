<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { InputGroup } from "@isbatak/svelte-ui/input-group"
  import { Select, useFilter, createListCollection } from "@isbatak/svelte-ui/select"
  import { css } from "styled-system/css"

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

  let searchRef = $state<HTMLElement | null>(null)
  let query = $state("")
  const filter = useFilter({ sensitivity: "base" })
  const collection = $derived(
    createListCollection({ items: countries.filter((country) => filter.contains(country, query)) }),
  )

  function onSearch(event: Event) {
    query = (event.currentTarget as HTMLInputElement).value
  }
</script>

<Select.Root
  collection={collection}
 
  onOpenChange={(details) => {
    if (details.open) requestAnimationFrame(() => searchRef?.focus())
    else query = ""
  }} class={css({ maxW: "xs" })}
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
      <Select.Content class={css({ maxH: "72" })}>
        <InputGroup>
          {#snippet startElement()}<Icon name="search" />{/snippet}
          <Select.Search
            bind:ref={searchRef}
            value={query}
            placeholder="Search..."
            aria-label="Search countries"
            oninput={onSearch}
          />
        </InputGroup>
        <Select.List>
          {#each collection.items as country (country)}
            <Select.Item item={country}>
              <Select.ItemText>{country}</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          {/each}
          {#if collection.size === 0}<Select.Empty>No countries found</Select.Empty>{/if}
        </Select.List>
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>
