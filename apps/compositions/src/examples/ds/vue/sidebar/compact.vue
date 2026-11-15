<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { Sidebar } from "@isbatak/vue-ui/sidebar"
import { ref } from "vue"

const compact = ref(false)
</script>

<template>
  <Box position="relative" borderWidth="1px" borderRadius="l3" w="fit">
    <Sidebar.Root :compact="compact" aria-label="Main" overflow="hidden">
      <Sidebar.Section>
        <Sidebar.SectionTitle>Menu</Sidebar.SectionTitle>
        <Sidebar.SectionContent>
          <Sidebar.NavItem href="#home" aria-label="Home">
            <Sidebar.NavItemStartElement>
              <Icon name="home" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Home</Sidebar.NavItemText>
          </Sidebar.NavItem>
          <Sidebar.NavItem href="#inbox" aria-label="Inbox" aria-current="page">
            <Sidebar.NavItemStartElement>
              <Icon name="mail" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Inbox</Sidebar.NavItemText>
            <Sidebar.NavItemEndElement>
              <Icon name="chevron-right" />
            </Sidebar.NavItemEndElement>
          </Sidebar.NavItem>
          <Sidebar.NavItem href="#settings" aria-label="Settings">
            <Sidebar.NavItemStartElement>
              <Icon name="settings" />
            </Sidebar.NavItemStartElement>
            <Sidebar.NavItemText>Settings</Sidebar.NavItemText>
          </Sidebar.NavItem>
        </Sidebar.SectionContent>
      </Sidebar.Section>
    </Sidebar.Root>
    <IconButton
      :aria-label="compact ? 'Expand sidebar' : 'Collapse sidebar'"
      :aria-expanded="!compact"
      variant="surface"
      colorPalette="gray"
      size="2xs"
      position="absolute"
      top="[50%]"
      insetInlineEnd="-3"
      transform="translateY(-50%)"
      @click="compact = !compact"
    >
      <Icon :name="compact ? 'chevron-right' : 'chevron-left'" />
    </IconButton>
  </Box>
</template>
