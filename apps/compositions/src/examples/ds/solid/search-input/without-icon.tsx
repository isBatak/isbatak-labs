import { Icon } from "@isbatak/solid-ui/icon"
import { SearchInput } from "@isbatak/solid-ui/search-input"

export function SearchInputWithoutIconDemo() {
  return (
    <SearchInput.Root maxW="xs">
      <SearchInput.Label>Search</SearchInput.Label>
      <SearchInput.Control>
        <SearchInput.Input placeholder="Search components" />
        <SearchInput.ClearTrigger>
          <Icon name="close" />
        </SearchInput.ClearTrigger>
      </SearchInput.Control>
    </SearchInput.Root>
  )
}
