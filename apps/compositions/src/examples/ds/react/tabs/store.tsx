import { Code } from "@isbatak/react-ui/code"
import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Stack } from "@isbatak/react-ui/stack"
import { Tabs, useTabs } from "@isbatak/react-ui/tabs"

export function TabsStoreDemo() {
  const tabs = useTabs({ defaultValue: "members" })

  return (
    <Stack alignItems="flex-start">
      <Code>selected: {tabs.value}</Code>
      <Tabs.RootProvider value={tabs}>
        <Tabs.List>
          <Tabs.Trigger value="members">
            <StartIcon asChild>
              <Icon name="account" />
            </StartIcon>
            Members
          </Tabs.Trigger>
          <Tabs.Trigger value="projects">
            <StartIcon asChild>
              <Icon name="folder" />
            </StartIcon>
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger value="tasks">
            <StartIcon asChild>
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
  )
}
