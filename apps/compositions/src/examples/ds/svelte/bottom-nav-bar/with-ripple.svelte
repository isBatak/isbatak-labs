<script lang="ts">
  import { BottomNavBar } from "@isbatak/svelte-ui/bottom-nav-bar"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Ripple } from "@isbatak/svelte-ui/ripple"
</script>

<BottomNavBar.Root w="full" maxW="md" borderWidth="1px" borderRadius="l3">
  <Ripple>
    {#snippet asChild(props)}
      <BottomNavBar.Item {...props() as Record<string, unknown>} href="#home" aria-current="page">
        <BottomNavBar.ItemIcon>
          <Icon name="home" />
        </BottomNavBar.ItemIcon>
        <BottomNavBar.ItemLabel>Home</BottomNavBar.ItemLabel>
      </BottomNavBar.Item>
    {/snippet}
  </Ripple>
  <Ripple>
    {#snippet asChild(props)}
      <BottomNavBar.Item {...props() as Record<string, unknown>} href="#search">
        <BottomNavBar.ItemIcon>
          <Icon name="search" />
        </BottomNavBar.ItemIcon>
        <BottomNavBar.ItemLabel>Search</BottomNavBar.ItemLabel>
      </BottomNavBar.Item>
    {/snippet}
  </Ripple>
  <Ripple>
    {#snippet asChild(props)}
      <BottomNavBar.Item {...props() as Record<string, unknown>} href="#profile">
        <BottomNavBar.ItemIcon>
          <Icon name="account" />
        </BottomNavBar.ItemIcon>
        <BottomNavBar.ItemLabel>Profile</BottomNavBar.ItemLabel>
      </BottomNavBar.Item>
    {/snippet}
  </Ripple>
</BottomNavBar.Root>
