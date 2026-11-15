<script lang="ts">
  import { css } from "styled-system/css"
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { BottomNavBar } from "@isbatak/svelte-ui/bottom-nav-bar"
  import { FloatGap } from "@isbatak/svelte-ui/float-gap"
  import { Float } from "@isbatak/svelte-ui/float"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<BottomNavBar.Root w="full" maxW="md" borderWidth="1px" borderRadius="l3">
  <BottomNavBar.Item href="#home" aria-current="page">
    <BottomNavBar.ItemIcon>
      <Icon name="home" />
    </BottomNavBar.ItemIcon>
    <BottomNavBar.ItemLabel>Home</BottomNavBar.ItemLabel>
  </BottomNavBar.Item>
  <BottomNavBar.Item href="#inbox">
    <BottomNavBar.ItemIcon>
      <FloatGap placement="top-end" offsetX="0.5" offsetY="1.5" cutoutSize="3" cutoutRadius="full">
        <Icon name="bell" />
      </FloatGap>
      <Float placement="top-end" offsetX="0.5" offsetY="1.5">
        <Badge size="2xs" variant="solid" class={css({ w: "3", justifyContent: "center" })}>
          4
        </Badge>
      </Float>
    </BottomNavBar.ItemIcon>
    <BottomNavBar.ItemLabel>Inbox</BottomNavBar.ItemLabel>
  </BottomNavBar.Item>
  <BottomNavBar.Item href="#shop">
    <BottomNavBar.ItemIcon>
      <FloatGap placement="top-end" offsetX="0.5" offsetY="1.5" cutoutWidth="7" cutoutHeight="3">
        <Icon name="shopping-bag" />
      </FloatGap>
      <Float placement="top-end" offsetX="0.5" offsetY="1.5">
        <Badge size="2xs" variant="subtle" class={css({ w: "7", justifyContent: "center" })}>
          New
        </Badge>
      </Float>
    </BottomNavBar.ItemIcon>
    <BottomNavBar.ItemLabel>Shop</BottomNavBar.ItemLabel>
  </BottomNavBar.Item>
  <BottomNavBar.Item href="#profile">
    <BottomNavBar.ItemIcon>
      <Icon name="account" />
    </BottomNavBar.ItemIcon>
    <BottomNavBar.ItemLabel>Profile</BottomNavBar.ItemLabel>
  </BottomNavBar.Item>
</BottomNavBar.Root>
