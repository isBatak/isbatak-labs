<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Tabs } from "@isbatak/svelte-ui/tabs"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"

  let value = $state("projects")
</script>

<Stack gap="4">
  <Tabs.Root bind:value={value}>
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
  <Text class={css({ textStyle: "sm", color: "fg.muted" })}>Selected: {value}</Text>
</Stack>
