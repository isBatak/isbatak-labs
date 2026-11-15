<script setup lang="ts">
import { BottomNavBar } from "@isbatak/vue-ui/bottom-nav-bar"
import { Icon } from "@isbatak/vue-ui/icon"
import { Ripple } from "@isbatak/vue-ui/ripple"
</script>

<template>
  <BottomNavBar.Root w="full" maxW="md" borderWidth="1px" borderRadius="l3">
    <Ripple :asChild="true">
      <BottomNavBar.Item href="#home" aria-current="page">
        <BottomNavBar.ItemIcon>
          <Icon name="home" />
        </BottomNavBar.ItemIcon>
        <BottomNavBar.ItemLabel>Home</BottomNavBar.ItemLabel>
      </BottomNavBar.Item>
    </Ripple>
    <Ripple :asChild="true">
      <BottomNavBar.Item href="#search">
        <BottomNavBar.ItemIcon>
          <Icon name="search" />
        </BottomNavBar.ItemIcon>
        <BottomNavBar.ItemLabel>Search</BottomNavBar.ItemLabel>
      </BottomNavBar.Item>
    </Ripple>
    <Ripple :asChild="true">
      <BottomNavBar.Item href="#profile">
        <BottomNavBar.ItemIcon>
          <Icon name="account" />
        </BottomNavBar.ItemIcon>
        <BottomNavBar.ItemLabel>Profile</BottomNavBar.ItemLabel>
      </BottomNavBar.Item>
    </Ripple>
  </BottomNavBar.Root>
</template>
