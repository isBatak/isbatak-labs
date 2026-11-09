<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import type { ActionBarVariant } from "@isbatak/panda-ds/recipes"
  import { ActionBar } from "@isbatak/svelte-ui/action-bar"
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"

  type Placement = NonNullable<ActionBarVariant["placement"]>

  let open = $state(false)
  let placement = $state<Placement>("bottom")

  const openAt = (nextPlacement: Placement) => {
    placement = nextPlacement
    open = true
  }
</script>

<HStack gap="3" flexWrap="wrap">
  <Button variant="outline" onclick={() => openAt("bottom-start")}>Bottom start</Button>
  <Button variant="outline" onclick={() => openAt("bottom")}>Bottom</Button>
  <Button variant="outline" onclick={() => openAt("bottom-end")}>Bottom end</Button>
</HStack>
<ActionBar.Root bind:open {placement}>
  <Portal>
    <ActionBar.Positioner>
      <ActionBar.Content>
        <ActionBar.SelectionTrigger>{placement}</ActionBar.SelectionTrigger>
        <ActionBar.Separator />
        <Button variant="outline" size="sm">Archive</Button>
        <ActionBar.CloseTrigger />
      </ActionBar.Content>
    </ActionBar.Positioner>
  </Portal>
</ActionBar.Root>
