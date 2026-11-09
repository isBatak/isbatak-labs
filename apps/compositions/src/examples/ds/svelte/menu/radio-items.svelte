<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Menu } from "@isbatak/svelte-ui/menu"

  let sort = $state("name")
</script>

<Menu.Root>
  <Menu.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Sort</Button>
    {/snippet}
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.RadioItemGroup bind:value={sort}>
          <Menu.ItemGroupLabel>Sort by</Menu.ItemGroupLabel>
          <Menu.RadioItem value="name">
            <Menu.ItemIndicator />
            <Menu.ItemText>Name</Menu.ItemText>
          </Menu.RadioItem>
          <Menu.RadioItem value="date">
            <Menu.ItemIndicator />
            <Menu.ItemText>Date modified</Menu.ItemText>
          </Menu.RadioItem>
          <Menu.RadioItem value="size">
            <Menu.ItemIndicator />
            <Menu.ItemText>Size</Menu.ItemText>
          </Menu.RadioItem>
        </Menu.RadioItemGroup>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
