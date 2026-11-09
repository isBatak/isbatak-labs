<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { ActionBar } from "@isbatak/svelte-ui/action-bar"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Checkbox } from "@isbatak/svelte-ui/checkbox"
  import { Icon } from "@isbatak/svelte-ui/icon"

  let open = $state(false)
</script>

<Checkbox.Root checked={open} onCheckedChange={(details) => (open = details.checked === true)}>
  <Checkbox.HiddenInput />
  <Checkbox.Control />
  <Checkbox.Label>Show action bar</Checkbox.Label>
</Checkbox.Root>
<ActionBar.Root {open}>
  <Portal>
    <ActionBar.Positioner>
      <ActionBar.Content>
        <ActionBar.SelectionTrigger>2 selected</ActionBar.SelectionTrigger>
        <ActionBar.Separator />
        <Button variant="outline" size="sm"><Icon name="delete" /> Delete</Button>
        <Button variant="outline" size="sm"><Icon name="share" /> Share</Button>
      </ActionBar.Content>
    </ActionBar.Positioner>
  </Portal>
</ActionBar.Root>
