<script lang="ts">
  import { Tabs } from "@isbatak/svelte-ui/tabs"
</script>

<Tabs.Root minW="sm" defaultValue="members">
  <Tabs.List>
    <Tabs.Trigger value="members">
      {#snippet asChild(props)}<a {...props()} href="#members">Members</a>{/snippet}
    </Tabs.Trigger>
    <Tabs.Trigger value="projects">
      {#snippet asChild(props)}<a {...props()} href="#projects">Projects</a>{/snippet}
    </Tabs.Trigger>
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Content value="members">Manage your team members.</Tabs.Content>
  <Tabs.Content value="projects">Manage your projects.</Tabs.Content>
</Tabs.Root>
