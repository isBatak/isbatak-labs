<script lang="ts">
  import { EmptyState } from "@isbatak/svelte-ui/empty-state"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<EmptyState.Root>
  <EmptyState.Content>
    <EmptyState.Indicator><Icon name="search" /></EmptyState.Indicator>
    <EmptyState.Title>No results found</EmptyState.Title>
    <EmptyState.Description>Try adjusting your search or filters</EmptyState.Description>
  </EmptyState.Content>
</EmptyState.Root>
