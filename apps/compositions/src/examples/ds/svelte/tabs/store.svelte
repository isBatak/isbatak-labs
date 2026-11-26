<script lang="ts">
  import { Code } from "@isbatak/svelte-ui/code"
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Tabs, useTabs } from "@isbatak/svelte-ui/tabs"

  const id = $props.id()
  const tabs = useTabs({ id, defaultValue: "members" })
</script>

<Stack alignItems="flex-start">
  <Code>selected: {tabs().value}</Code>
  <Tabs.RootProvider value={tabs}>
    <Tabs.List>
      <Tabs.Trigger value="members">
        <StartIcon>
          {#snippet asChild(iconProps)}<Icon {...iconProps()} name="account" />{/snippet}
        </StartIcon>
        Members
      </Tabs.Trigger>
      <Tabs.Trigger value="projects">
        <StartIcon>
          {#snippet asChild(iconProps)}<Icon {...iconProps()} name="folder" />{/snippet}
        </StartIcon>
        Projects
      </Tabs.Trigger>
      <Tabs.Trigger value="tasks">
        <StartIcon>
          {#snippet asChild(iconProps)}<Icon {...iconProps()} name="check-square" />{/snippet}
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
