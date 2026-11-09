<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Menu } from "@isbatak/svelte-ui/menu"
  import { css } from "styled-system/css"
</script>

<Menu.Root>
  <Menu.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Actions</Button>
    {/snippet}
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="rename">Rename</Menu.Item>
        <Menu.Item value="duplicate">Duplicate</Menu.Item>
        <Menu.Item value="share">Share</Menu.Item>
        <Menu.Separator />
        <Menu.Item value="delete" class={css({ color: "fg.error" })}>Delete</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
