<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { SearchInput, useSearchInput } from "@isbatak/svelte-ui/search-input"

  const id = $props.id()
  const searchInput = useSearchInput({ id })
</script>

<Stack gap="3" w="full" maxW="xs" alignItems="flex-start">
  <HStack gap="2">
    <Button variant="outline" size="sm" onclick={() => searchInput().setValue("tooltip")}>Search tooltip</Button>
    <Button variant="outline" size="sm" onclick={() => searchInput().clearValue()}>Clear</Button>
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
