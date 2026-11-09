import { Tabs } from "@isbatak/react-ui/tabs"

export function TabsDemo() {
  return (
    <Tabs.Root defaultValue="projects">
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
  )
}
