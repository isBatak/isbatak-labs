import { Tabs } from "@isbatak/react-ui/tabs"
import { Stack } from "styled-system/jsx"

export function TabsSizesDemo() {
  return (
    <Stack gap="8">
      <Tabs.Root defaultValue="projects" size="xs">
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
      <Tabs.Root defaultValue="projects" size="sm">
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
      <Tabs.Root defaultValue="projects" size="md">
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
      <Tabs.Root defaultValue="projects" size="lg">
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
