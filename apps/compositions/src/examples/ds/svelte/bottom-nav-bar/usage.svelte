<script lang="ts">
  import { BottomNavBar } from "@isbatak/svelte-ui/bottom-nav-bar"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<BottomNavBar.Root w="full" maxW="md" borderWidth="1px" borderRadius="l3">
  <BottomNavBar.Item href="#home" aria-current="page">
    <BottomNavBar.ItemIcon>
      <Icon name="home" />
    </BottomNavBar.ItemIcon>
    <BottomNavBar.ItemLabel>Home</BottomNavBar.ItemLabel>
  </BottomNavBar.Item>
  <BottomNavBar.Item href="#search">
    <BottomNavBar.ItemIcon>
      <Icon name="search" />
    </BottomNavBar.ItemIcon>
    <BottomNavBar.ItemLabel>Search</BottomNavBar.ItemLabel>
  </BottomNavBar.Item>
  <BottomNavBar.Item href="#inbox">
    <BottomNavBar.ItemIcon>
      <Icon name="bell" />
    </BottomNavBar.ItemIcon>
    <BottomNavBar.ItemLabel>Inbox</BottomNavBar.ItemLabel>
  </BottomNavBar.Item>
  <BottomNavBar.Item href="#profile">
    <BottomNavBar.ItemIcon>
      <Icon name="account" />
    </BottomNavBar.ItemIcon>
    <BottomNavBar.ItemLabel>Profile</BottomNavBar.ItemLabel>
  </BottomNavBar.Item>
</BottomNavBar.Root>
