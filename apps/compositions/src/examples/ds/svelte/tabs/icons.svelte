<script lang="ts">
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { Tabs } from "@isbatak/svelte-ui/tabs"
</script>

<Tabs.Root minW="sm" defaultValue="projects" variant="enclosed">
  <Tabs.List>
    <Tabs.Trigger value="projects">
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="folder" />{/snippet}
      </StartIcon>
      Projects
    </Tabs.Trigger>
    <Tabs.Trigger value="inbox">
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="mail" />{/snippet}
      </StartIcon>
      Inbox
    </Tabs.Trigger>
    <Tabs.Trigger value="settings">
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="settings" />{/snippet}
      </StartIcon>
      Settings
    </Tabs.Trigger>
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Content value="projects">Manage your team's projects.</Tabs.Content>
  <Tabs.Content value="inbox">Read the messages sent to you.</Tabs.Content>
  <Tabs.Content value="settings">Change your notification settings.</Tabs.Content>
</Tabs.Root>
