<script lang="ts">
  import { Tabs } from "@isbatak/svelte-ui/tabs"
  import { css } from "styled-system/css"
</script>

<Tabs.Root
  defaultValue="members"
  variant="plain"
  class={css({
    "--segment-indicator-bg": "colors.gray.subtle",
    "--segment-indicator-shadow": "shadows.xs",
    "--segment-radius": "radii.full",
  })}
>
  <Tabs.List>
    <Tabs.Trigger value="members">Members</Tabs.Trigger>
    <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Content value="members">Manage your team members.</Tabs.Content>
  <Tabs.Content value="projects">Manage your projects.</Tabs.Content>
  <Tabs.Content value="settings">Manage your settings.</Tabs.Content>
</Tabs.Root>
