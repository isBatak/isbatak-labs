import { EmptyState } from "@isbatak/solid-ui/empty-state"
import { Icon } from "@isbatak/solid-ui/icon"

export function EmptyStateDemo() {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Icon name="search" />
        </EmptyState.Indicator>
        <EmptyState.Title>No results found</EmptyState.Title>
        <EmptyState.Description>Try adjusting your search or filters</EmptyState.Description>
      </EmptyState.Content>
    </EmptyState.Root>
  )
}
