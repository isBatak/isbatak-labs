import { Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { Tabs } from "@isbatak/solid-ui/tabs"

export function TabsIconsDemo() {
  return (
    <Tabs.Root defaultValue="projects" variant="enclosed">
      <Tabs.List>
        <Tabs.Trigger value="projects">
          <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="folder" />} />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="inbox">
          <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="mail" />} />
          Inbox
        </Tabs.Trigger>
        <Tabs.Trigger value="settings">
          <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="settings" />} />
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
