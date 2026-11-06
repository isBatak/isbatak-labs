<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { SearchInput } from "@isbatak/svelte-ui/search-input"
</script>

<Box maxW="xs" w="full">
  <SearchInput.Root translations={{ clearTrigger: "Suche löschen" }} defaultValue="Schaltfläche">
    <SearchInput.Label>Suche</SearchInput.Label>
    <SearchInput.Control>
      <SearchInput.Icon>
        <Icon name="search" />
      </SearchInput.Icon>
      <SearchInput.Input placeholder="Komponenten durchsuchen" />
      <SearchInput.ClearTrigger>
        <Icon name="close" />
      </SearchInput.ClearTrigger>
    </SearchInput.Control>
  </SearchInput.Root>
</Box>
