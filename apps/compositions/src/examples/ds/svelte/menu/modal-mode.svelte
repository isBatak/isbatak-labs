<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button, CloseButton } from "@isbatak/svelte-ui/button"
  import { Menu } from "@isbatak/svelte-ui/menu"
  import { css } from "styled-system/css"
</script>

<Menu.Root modalMode>
  <Menu.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open as a sheet</Button>
    {/snippet}
  </Menu.Trigger>
  <Portal>
    <Menu.Backdrop />
    <Menu.Positioner>
      <Menu.Content>
        <Menu.CloseTrigger>
          {#snippet asChild(props)}
            <CloseButton {...props()} size="sm" />
          {/snippet}
        </Menu.CloseTrigger>
        <Menu.Item value="rename">Rename</Menu.Item>
        <Menu.Item value="duplicate">Duplicate</Menu.Item>
        <Menu.Item value="share">Share</Menu.Item>
        <Menu.Separator />
        <Menu.Item value="delete" class={css({ color: "fg.error" })}>Delete</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
