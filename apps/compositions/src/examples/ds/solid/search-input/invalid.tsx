import { Icon } from "@isbatak/solid-ui/icon"
import { SearchInput } from "@isbatak/solid-ui/search-input"
import { field } from "@isbatak/panda-ds/recipes"

export function SearchInputInvalidDemo() {
  const fieldClasses = field()

  return (
    <SearchInput.Root invalid defaultValue="a" maxW="xs">
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
      <span class={fieldClasses.errorText}>Type at least 2 characters.</span>
    </SearchInput.Root>
  )
}
