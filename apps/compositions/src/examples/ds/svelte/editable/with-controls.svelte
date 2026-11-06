<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Editable } from "@isbatak/svelte-ui/editable"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<Editable.Root defaultValue="Click to edit">
  <Editable.Area>
    <Editable.Preview />
    <Editable.Input />
  </Editable.Area>
  <Editable.Control>
    <Editable.EditTrigger>
      {#snippet asChild(props)}
        <IconButton {...props()} variant="ghost" size="xs" aria-label="Edit">
          <Icon name="edit" />
        </IconButton>
      {/snippet}
    </Editable.EditTrigger>
    <Editable.CancelTrigger>
      {#snippet asChild(props)}
        <IconButton {...props()} variant="outline" size="xs" aria-label="Cancel">
          <Icon name="close" />
        </IconButton>
      {/snippet}
    </Editable.CancelTrigger>
    <Editable.SubmitTrigger>
      {#snippet asChild(props)}
        <IconButton {...props()} variant="outline" size="xs" aria-label="Save">
          <Icon name="check" />
        </IconButton>
      {/snippet}
    </Editable.SubmitTrigger>
  </Editable.Control>
</Editable.Root>
