<script setup lang="ts">
import { Stack } from "@isbatak/vue-ui/stack"
import { Tabs } from "@isbatak/vue-ui/tabs"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const value = ref("projects")
</script>

<template>
  <Stack gap="4">
    <Tabs.Root v-model="value">
      <Tabs.List>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="inbox">Inbox</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="projects">Manage your team's projects.</Tabs.Content>
      <Tabs.Content value="inbox">Read the messages sent to you.</Tabs.Content>
      <Tabs.Content value="settings">Change your notification settings.</Tabs.Content>
    </Tabs.Root>
    <Text textStyle="sm" color="fg.muted">Selected: {{ value }}</Text>
  </Stack>
</template>
