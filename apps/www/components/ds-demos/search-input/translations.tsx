"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { SearchInput } from "@isbatak/react-ui/search-input"

export function SearchInputTranslationsDemo() {
  return (
    <SearchInput.Root translations={{ clearTrigger: "Suche löschen" }} defaultValue="Schaltfläche" maxW="xs">
      <SearchInput.Label>Suche</SearchInput.Label>
      <SearchInput.Control>
        <SearchInput.Icon>
          <Icon name="search" />
        </SearchInput.Icon>
        <SearchInput.Input placeholder="Komponenten durchsuchen" />
        <SearchInput.ClearTrigger>
          <Icon name="close" />
        </SearchInput.ClearTrigger>
      </SearchInput.Control>
    </SearchInput.Root>
  )
}
