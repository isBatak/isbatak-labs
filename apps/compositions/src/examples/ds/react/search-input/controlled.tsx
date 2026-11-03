import { Icon } from "@isbatak/react-ui/icon"
import { SearchInput } from "@isbatak/react-ui/search-input"
import { useState } from "react"
import { Stack, styled } from "styled-system/jsx"

export function SearchInputControlledDemo() {
  const [value, setValue] = useState("")

  return (
    <Stack gap="3" w="full" maxW="xs">
      <SearchInput.Root value={value} onValueChange={(details) => setValue(details.value)}>
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
      <styled.p textStyle="sm" color="fg.muted">
        Query: {value || "empty"}
      </styled.p>
    </Stack>
  )
}
