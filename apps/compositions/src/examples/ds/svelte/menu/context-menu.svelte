<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Menu } from "@isbatak/svelte-ui/menu"
  import { css } from "styled-system/css"
</script>

<Menu.Root>
  <Menu.ContextTrigger class={css({ display: "flex", alignItems: "center", justifyContent: "center", w: "full", maxW: "sm", h: "40", borderWidth: "1px", borderStyle: "dashed", borderRadius: "l2", color: "fg.muted", textStyle: "sm" })}>Right-click here</Menu.ContextTrigger>
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
