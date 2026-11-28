import { Code } from "@isbatak/solid-ui/code"
import { Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { Stack } from "@isbatak/solid-ui/stack"
import { Tabs, useTabs } from "@isbatak/solid-ui/tabs"

export function TabsStoreDemo() {
  const tabs = useTabs({ defaultValue: "members" })

  return (
    <Stack alignItems="flex-start">
      <Code>selected: {tabs().value}</Code>
      <Tabs.RootProvider minW="sm" value={tabs}>
        <Tabs.List>
          <Tabs.Trigger value="members">
            <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="account" />} />
            Members
          </Tabs.Trigger>
          <Tabs.Trigger value="projects">
            <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="folder" />} />
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger value="tasks">
            <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="check-square" />} />
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
