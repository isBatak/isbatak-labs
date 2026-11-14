<script lang="ts">
  import { EmptyState } from "@isbatak/svelte-ui/empty-state"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Button, ButtonGroup } from "@isbatak/svelte-ui/button"
</script>

<EmptyState.Root>
  <EmptyState.Content>
    <EmptyState.Indicator><Icon name="package" /></EmptyState.Indicator>
    <EmptyState.Title>No projects yet</EmptyState.Title>
    <EmptyState.Description>Create a project to get started</EmptyState.Description>
    <ButtonGroup>
      <Button>Create project</Button>
      <Button variant="outline">Import</Button>
    </ButtonGroup>
  </EmptyState.Content>
</EmptyState.Root>
