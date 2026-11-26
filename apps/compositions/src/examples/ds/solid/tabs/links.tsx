import { Tabs } from "@isbatak/solid-ui/tabs"

export function TabsLinksDemo() {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger
          value="members"
          asChild={(props) => (
            <a {...props()} href="#members">
              Members
            </a>
          )}
        />
        <Tabs.Trigger
          value="projects"
          asChild={(props) => (
            <a {...props()} href="#projects">
              Projects
            </a>
          )}
        />
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members.</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects.</Tabs.Content>
    </Tabs.Root>
  )
}
