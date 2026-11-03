import { Button } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { SearchInput, useSearchInput } from "@isbatak/react-ui/search-input"
import { HStack, Stack } from "styled-system/jsx"

export function SearchInputRootProviderDemo() {
  const searchInput = useSearchInput()

  return (
    <Stack gap="3" w="full" maxW="xs" alignItems="flex-start">
      <HStack gap="2">
        <Button variant="outline" size="sm" onClick={() => searchInput.setValue("tooltip")}>
          Search tooltip
        </Button>
        <Button variant="outline" size="sm" onClick={() => searchInput.clearValue()}>
          Clear
        </Button>
      </HStack>
      <SearchInput.RootProvider value={searchInput}>
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
      </SearchInput.RootProvider>
    </Stack>
  )
}
