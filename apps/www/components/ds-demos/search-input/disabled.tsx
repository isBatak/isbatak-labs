"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { SearchInput } from "@isbatak/react-ui/search-input"

export function SearchInputDisabledDemo() {
  return (
    <SearchInput.Root disabled defaultValue="button" maxW="xs">
      <SearchInput.Label>Search</SearchInput.Label>
      <SearchInput.Control>
        <SearchInput.Icon>
          <Icon name="search" />
        </SearchInput.Icon>
        <SearchInput.Input placeholder="Search components" />
        <SearchInput.ClearTrigger>
          <Icon name="close" />
        </SearchInput.ClearTrigger>
      </SearchInput.Control>
    </SearchInput.Root>
  )
}
