<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { SearchInput } from "@isbatak/svelte-ui/search-input"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let value = $state("")
</script>

<Stack gap="3" w="full" maxW="xs">
  <SearchInput.Root {value} onValueChange={(details) => (value = details.value)}>
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
  <Text textStyle="sm" color="fg.muted">Query: {value || "empty"}</Text>
</Stack>
