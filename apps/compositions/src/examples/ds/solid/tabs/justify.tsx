import { Stack } from "@isbatak/solid-ui/stack"
import { Tabs } from "@isbatak/solid-ui/tabs"

export function TabsJustifyDemo() {
  return (
    <Stack gap="8">
      <Tabs.Root defaultValue="projects" justify="start">
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
      <Tabs.Root defaultValue="projects" justify="center">
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
      <Tabs.Root defaultValue="projects" justify="end">
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
  )
}
