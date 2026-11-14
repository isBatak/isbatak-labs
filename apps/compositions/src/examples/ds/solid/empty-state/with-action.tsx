import { EmptyState } from "@isbatak/solid-ui/empty-state"
import { Icon } from "@isbatak/solid-ui/icon"
import { Button, ButtonGroup } from "@isbatak/solid-ui/button"

export function EmptyStateWithActionDemo() {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Icon name="package" />
        </EmptyState.Indicator>
        <EmptyState.Title>No projects yet</EmptyState.Title>
        <EmptyState.Description>Create a project to get started</EmptyState.Description>
        <ButtonGroup>
          <Button>Create project</Button>
          <Button variant="outline">Import</Button>
        </ButtonGroup>
      </EmptyState.Content>
    </EmptyState.Root>
  )
}
