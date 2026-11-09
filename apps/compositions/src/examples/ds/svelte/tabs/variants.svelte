<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Tabs } from "@isbatak/svelte-ui/tabs"
</script>

<Stack gap="8">
  <Tabs.Root defaultValue="projects" variant="line">
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
  <Tabs.Root defaultValue="projects" variant="subtle">
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
  <Tabs.Root defaultValue="projects" variant="enclosed">
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
  <Tabs.Root defaultValue="projects" variant="outline">
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
  <Tabs.Root defaultValue="projects" variant="plain">
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
  <Tabs.Root defaultValue="projects" variant="folder">
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
</Stack>
