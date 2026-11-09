<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Menu } from "@isbatak/svelte-ui/menu"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="4">
  <Menu.Root size="sm">
    <Menu.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline" size="sm">Small</Button>
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
  <Menu.Root size="md">
    <Menu.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Medium</Button>
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
</HStack>
