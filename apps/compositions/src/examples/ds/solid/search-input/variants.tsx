import { Icon } from "@isbatak/solid-ui/icon"
import { SearchInput } from "@isbatak/solid-ui/search-input"
import { Stack } from "@isbatak/solid-ui/stack"

export function SearchInputVariantsDemo() {
  return (
    <Stack gap="5" w="full" maxW="xs">
      <SearchInput.Root variant="outline">
        <SearchInput.Label>variant outline</SearchInput.Label>
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
      <SearchInput.Root variant="subtle">
        <SearchInput.Label>variant subtle</SearchInput.Label>
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
      <SearchInput.Root variant="flushed">
        <SearchInput.Label>variant flushed</SearchInput.Label>
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
    </Stack>
  )
}
