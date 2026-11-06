<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { SearchInput } from "@isbatak/svelte-ui/search-input"
  import { field } from "@isbatak/panda-ds/recipes"

  const fieldClasses = field()
</script>

<Box maxW="xs" w="full">
  <SearchInput.Root invalid defaultValue="a">
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
</Box>
