<script setup lang="ts">
import { Tabs } from "@isbatak/vue-ui/tabs"
</script>

<template>
  <Tabs.Root minW="sm" defaultValue="members">
    <Tabs.List>
      <Tabs.Trigger value="members" :asChild="true">
        <a href="#members">Members</a>
      </Tabs.Trigger>
      <Tabs.Trigger value="projects" :asChild="true">
        <a href="#projects">Projects</a>
      </Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content value="members">Manage your team members.</Tabs.Content>
    <Tabs.Content value="projects">Manage your projects.</Tabs.Content>
  </Tabs.Root>
</template>
