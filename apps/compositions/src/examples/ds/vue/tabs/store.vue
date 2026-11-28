<script setup lang="ts">
import { Code } from "@isbatak/vue-ui/code"
import { Icon, StartIcon } from "@isbatak/vue-ui/icon"
import { Stack } from "@isbatak/vue-ui/stack"
import { Tabs, useTabs } from "@isbatak/vue-ui/tabs"

const tabs = useTabs({ defaultValue: "members" })
</script>

<template>
  <Stack alignItems="flex-start">
    <Code>selected: {{ tabs.value }}</Code>
    <Tabs.RootProvider minW="sm" :value="tabs">
      <Tabs.List>
        <Tabs.Trigger value="members">
          <StartIcon :asChild="true">
            <Icon name="account" />
          </StartIcon>
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <StartIcon :asChild="true">
            <Icon name="folder" />
          </StartIcon>
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <StartIcon :asChild="true">
            <Icon name="check-square" />
          </StartIcon>
          Tasks
        </Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members.</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects.</Tabs.Content>
      <Tabs.Content value="tasks">Manage your tasks for freelancers.</Tabs.Content>
    </Tabs.RootProvider>
  </Stack>
</template>
