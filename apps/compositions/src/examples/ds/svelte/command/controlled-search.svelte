<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"

  interface CommandItem extends Command.ItemData {
    label: string
    value: string
    group: string
    icon: IconName
  }

  const commands: CommandItem[] = [
    { label: "Create new project", value: "new-project", group: "Projects", icon: "folder" },
    { label: "Delete project", value: "delete-project", group: "Projects", icon: "delete" },
    { label: "Invite teammate", value: "invite", group: "Projects", icon: "account" },
    { label: "Switch theme", value: "theme", group: "Preferences", icon: "moon" },
    { label: "Open settings", value: "settings", group: "Preferences", icon: "settings" },
    { label: "Sync settings", value: "sync-settings", group: "Preferences", icon: "refresh" },
  ]

  let query = $state("")
  const command = useCommandCollection(() => ({
    initialItems: commands,
    groupBy: (item: CommandItem) => item.group,
    query,
    onQueryChange: (value: string) => (query = value),
  }))
</script>

<Command.Provider value={command}>
  <Command.Dialog>
    <Command.DialogTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          variant="outline"
          size="sm"
          class={css({ minW: "64", justifyContent: "flex-start", color: "fg.muted" })}
        >
          <Icon name="search" /> {query || "Search commands..."}
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root>
          <Command.Control>
            <Command.Indicator />
            <Command.Input placeholder="Type a command or search..." />
          </Command.Control>
          <Command.List>
            {#each command.collection.group() as [group, items] (group)}
              <Command.ItemGroup>
                <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                {#each items as item (item.value)}
                  <Command.Item {item}>
                    <Icon name={item.icon} />
                    <Command.ItemText text={item.label} highlight />
                  </Command.Item>
                {/each}
              </Command.ItemGroup>
            {/each}
            <Command.Empty>No results found</Command.Empty>
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
<HStack gap="2" class={css({ mt: "4", flexWrap: "wrap" })}>
  <Text as="span" textStyle="sm" color="fg.muted">Try</Text>
  <Button size="xs" variant="subtle" onclick={() => (query = "theme")}>theme</Button>
  <Button size="xs" variant="subtle" onclick={() => (query = "project")}>project</Button>
  <Button size="xs" variant="subtle" onclick={() => (query = "settings")}>settings</Button>
</HStack>
<Text mt="2" textStyle="sm" color="fg.muted">
  Query: <Text as="span" color="fg">{query || "empty"}</Text>
</Text>
