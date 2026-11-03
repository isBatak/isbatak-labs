import { field } from "@isbatak/panda-ds/recipes"
import { Icon } from "@isbatak/react-ui/icon"
import { SearchInput } from "@isbatak/react-ui/search-input"

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
      <span className={fieldClasses.errorText}>Type at least 2 characters.</span>
    </SearchInput.Root>
  )
}
