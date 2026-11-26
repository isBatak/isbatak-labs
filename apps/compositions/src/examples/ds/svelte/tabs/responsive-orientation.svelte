<script lang="ts">
  import { Tabs } from "@isbatak/svelte-ui/tabs"
  import { MediaQuery } from "svelte/reactivity"
  import { token } from "styled-system/tokens"

  const wide = new MediaQuery(`(min-width: ${token("breakpoints.md")})`, false)
</script>

<Tabs.Root variant="subtle" defaultValue="members" orientation={wide.current ? "vertical" : "horizontal"}>
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
