<script setup lang="ts">
import { BottomNavBar } from "@isbatak/vue-ui/bottom-nav-bar"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <BottomNavBar.Root w="full" maxW="md" borderWidth="1px" borderRadius="l3">
    <BottomNavBar.Item href="#home" aria-label="Home" aria-current="page">
      <BottomNavBar.ItemIcon>
        <Icon name="home" />
      </BottomNavBar.ItemIcon>
    </BottomNavBar.Item>
    <BottomNavBar.Item href="#search" aria-label="Search">
      <BottomNavBar.ItemIcon>
        <Icon name="search" />
      </BottomNavBar.ItemIcon>
    </BottomNavBar.Item>
    <BottomNavBar.Item href="#saved" aria-label="Saved">
      <BottomNavBar.ItemIcon>
        <Icon name="heart" />
      </BottomNavBar.ItemIcon>
    </BottomNavBar.Item>
    <BottomNavBar.Item href="#shop" aria-label="Shop">
      <BottomNavBar.ItemIcon>
        <Icon name="shopping-bag" />
      </BottomNavBar.ItemIcon>
    </BottomNavBar.Item>
    <BottomNavBar.Item href="#inbox" aria-label="Inbox">
      <BottomNavBar.ItemIcon>
        <Icon name="bell" />
      </BottomNavBar.ItemIcon>
    </BottomNavBar.Item>
    <BottomNavBar.Item href="#settings" aria-label="Settings">
      <BottomNavBar.ItemIcon>
        <Icon name="settings" />
      </BottomNavBar.ItemIcon>
    </BottomNavBar.Item>
  </BottomNavBar.Root>
</template>
