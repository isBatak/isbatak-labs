import { Tabs } from "@isbatak/react-ui/tabs"

export function TabsLinksDemo() {
  return (
    <Tabs.Root minW="sm" defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members" asChild>
          <a href="#members">Members</a>
        </Tabs.Trigger>
        <Tabs.Trigger value="projects" asChild>
          <a href="#projects">Projects</a>
        </Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members.</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects.</Tabs.Content>
    </Tabs.Root>
  )
}
