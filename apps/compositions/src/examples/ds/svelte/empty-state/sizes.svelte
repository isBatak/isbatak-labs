<script lang="ts">
  import { EmptyState } from "@isbatak/svelte-ui/empty-state"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { VStack } from "@isbatak/svelte-ui/stack"
</script>

<VStack gap="8">
  <EmptyState.Root size="sm">
    <EmptyState.Content>
      <EmptyState.Indicator><Icon name="search" /></EmptyState.Indicator>
      <EmptyState.Title>Size sm</EmptyState.Title>
      <EmptyState.Description>Try adjusting your search or filters</EmptyState.Description>
    </EmptyState.Content>
  </EmptyState.Root>
  <EmptyState.Root size="md">
    <EmptyState.Content>
      <EmptyState.Indicator><Icon name="search" /></EmptyState.Indicator>
      <EmptyState.Title>Size md</EmptyState.Title>
      <EmptyState.Description>Try adjusting your search or filters</EmptyState.Description>
    </EmptyState.Content>
  </EmptyState.Root>
  <EmptyState.Root size="lg">
    <EmptyState.Content>
      <EmptyState.Indicator><Icon name="search" /></EmptyState.Indicator>
      <EmptyState.Title>Size lg</EmptyState.Title>
      <EmptyState.Description>Try adjusting your search or filters</EmptyState.Description>
    </EmptyState.Content>
  </EmptyState.Root>
</VStack>
