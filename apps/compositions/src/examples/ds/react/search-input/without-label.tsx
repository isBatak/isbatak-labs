import { Icon } from "@isbatak/react-ui/icon"
import { SearchInput } from "@isbatak/react-ui/search-input"

export function SearchInputWithoutLabelDemo() {
  return (
    <SearchInput.Root maxW="xs">
      <SearchInput.Control>
        <SearchInput.Icon>
          <Icon name="search" />
        </SearchInput.Icon>
        <SearchInput.Input placeholder="Search components" aria-label="Search components" />
        <SearchInput.ClearTrigger>
          <Icon name="close" />
        </SearchInput.ClearTrigger>
      </SearchInput.Control>
    </SearchInput.Root>
  )
}
