import { Tabs } from "@isbatak/solid-ui/tabs"
import { createSignal, onCleanup, onMount } from "solid-js"
import { token } from "styled-system/tokens"

const query = `(min-width: ${token("breakpoints.md")})`

export function TabsResponsiveOrientationDemo() {
  const [wide, setWide] = createSignal(false)

  onMount(() => {
    const media = window.matchMedia(query)
    const update = () => setWide(media.matches)
    update()
    media.addEventListener("change", update)
    onCleanup(() => media.removeEventListener("change", update))
  })

  return (
    <Tabs.Root minW="md" variant="subtle" defaultValue="members" orientation={wide() ? "vertical" : "horizontal"}>
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
