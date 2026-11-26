import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Tabs } from "@isbatak/react-ui/tabs"

export function TabsIconsDemo() {
  return (
    <Tabs.Root defaultValue="projects" variant="enclosed">
      <Tabs.List>
        <Tabs.Trigger value="projects">
          <StartIcon asChild>
            <Icon name="folder" />
          </StartIcon>
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="inbox">
          <StartIcon asChild>
            <Icon name="mail" />
          </StartIcon>
          Inbox
        </Tabs.Trigger>
        <Tabs.Trigger value="settings">
          <StartIcon asChild>
            <Icon name="settings" />
          </StartIcon>
          Settings
        </Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="projects">Manage your team's projects.</Tabs.Content>
      <Tabs.Content value="inbox">Read the messages sent to you.</Tabs.Content>
      <Tabs.Content value="settings">Change your notification settings.</Tabs.Content>
    </Tabs.Root>
  )
}
