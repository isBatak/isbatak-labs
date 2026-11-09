<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Menu } from "@isbatak/svelte-ui/menu"
</script>

<Menu.Root>
  <Menu.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">File</Button>
    {/snippet}
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="new">New file</Menu.Item>
        <Menu.Item value="open">Open</Menu.Item>
        <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
          <Menu.TriggerItem>
            Share
            <Icon name="chevron-right" />
          </Menu.TriggerItem>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="email">Email</Menu.Item>
                <Menu.Item value="link">Copy link</Menu.Item>
                <Menu.Item value="embed">Embed</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        <Menu.Separator />
        <Menu.Item value="print">Print</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
