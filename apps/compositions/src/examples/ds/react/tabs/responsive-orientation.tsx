import { Tabs } from "@isbatak/react-ui/tabs"
import { useSyncExternalStore } from "react"
import { token } from "styled-system/tokens"

const query = `(min-width: ${token("breakpoints.md")})`

function subscribe(onChange: () => void) {
  const media = window.matchMedia(query)
  media.addEventListener("change", onChange)
  return () => media.removeEventListener("change", onChange)
}

export function TabsResponsiveOrientationDemo() {
  const wide = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )

  return (
    <Tabs.Root variant="subtle" defaultValue="members" orientation={wide ? "vertical" : "horizontal"}>
      <Tabs.List>
        <Tabs.Trigger value="members">Members</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="tasks">Tasks</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members and their roles here.</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects and their status here.</Tabs.Content>
      <Tabs.Content value="tasks">Manage your tasks and their progress here.</Tabs.Content>
    </Tabs.Root>
  )
}
