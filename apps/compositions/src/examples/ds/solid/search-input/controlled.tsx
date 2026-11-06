import { Icon } from "@isbatak/solid-ui/icon"
import { SearchInput } from "@isbatak/solid-ui/search-input"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"

export function SearchInputControlledDemo() {
  const [value, setValue] = createSignal("")

  return (
    <Stack gap="3" w="full" maxW="xs">
      <SearchInput.Root value={value()} onValueChange={(details) => setValue(details.value)}>
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
      <Text textStyle="sm" color="fg.muted">
        Query: {value() || "empty"}
      </Text>
    </Stack>
  )
}
