<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Sidebar } from "@isbatak/vue-ui/sidebar"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6" alignItems="flex-start" flexWrap="wrap">
    <Sidebar.Root colorPalette="blue" aria-label="Blue indicator" borderWidth="1px" borderRadius="l3">
      <Sidebar.Section>
        <Sidebar.SectionContent>
          <Sidebar.NavItem href="#home">
            <Sidebar.NavItemStartElement>
              <Icon name="home" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Home</Sidebar.NavItemText>
          </Sidebar.NavItem>
          <Sidebar.NavItem href="#calendar" aria-current="page">
            <Sidebar.NavItemStartElement>
              <Icon name="calendar" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Calendar</Sidebar.NavItemText>
          </Sidebar.NavItem>
          <Sidebar.NavItem href="#favorites">
            <Sidebar.NavItemStartElement>
              <Icon name="heart" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Favorites</Sidebar.NavItemText>
          </Sidebar.NavItem>
        </Sidebar.SectionContent>
      </Sidebar.Section>
    </Sidebar.Root>
    <Sidebar.Root
      colorPalette="purple"
      indicatorPlacement="end"
      aria-label="Indicator at the end"
      borderWidth="1px"
      borderRadius="l3"
    >
      <Sidebar.Section>
        <Sidebar.SectionContent>
          <Sidebar.NavItem href="#home">
            <Sidebar.NavItemStartElement>
              <Icon name="home" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Home</Sidebar.NavItemText>
          </Sidebar.NavItem>
          <Sidebar.NavItem href="#calendar" aria-current="page">
            <Sidebar.NavItemStartElement>
              <Icon name="calendar" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Calendar</Sidebar.NavItemText>
          </Sidebar.NavItem>
          <Sidebar.NavItem href="#favorites">
            <Sidebar.NavItemStartElement>
              <Icon name="heart" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Favorites</Sidebar.NavItemText>
          </Sidebar.NavItem>
        </Sidebar.SectionContent>
      </Sidebar.Section>
    </Sidebar.Root>
  </HStack>
</template>
