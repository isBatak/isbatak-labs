<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"

  interface CommandItem extends Command.ItemData {
    label: string
    value: string
    group: string
    icon: IconName
    shortcut?: string[]
  }

  const commands: CommandItem[] = [
    { label: "Create issue", value: "create-issue", group: "Issues", icon: "file", shortcut: ["C"] },
    { label: "Change status", value: "change-status", group: "Issues", icon: "circle-dot", shortcut: ["S"] },
    { label: "Assign to...", value: "assign", group: "Issues", icon: "account", shortcut: ["A"] },
    { label: "Copy issue link", value: "copy-link", group: "Issues", icon: "link", shortcut: ["⌘", "⇧", ","] },
    { label: "Archive issue", value: "archive", group: "Issues", icon: "archive" },
    { label: "Go to inbox", value: "inbox", group: "Navigation", icon: "mail", shortcut: ["G", "I"] },
    { label: "Go to my issues", value: "my-issues", group: "Navigation", icon: "align-left", shortcut: ["G", "M"] },
    { label: "Go to projects", value: "projects", group: "Navigation", icon: "folder", shortcut: ["G", "P"] },
    { label: "Toggle sidebar", value: "sidebar", group: "View", icon: "menu", shortcut: ["⌘", "B"] },
    { label: "Duplicate view", value: "duplicate-view", group: "View", icon: "copy" },
    { label: "Switch theme", value: "theme", group: "View", icon: "moon", shortcut: ["⌘", "⇧", "L"] },
  ]

  const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })
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
          <Icon name="search" /> Search...
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
                    {#each item.shortcut ?? [] as key (key)}
                      <Command.ItemCommand>{key}</Command.ItemCommand>
                    {/each}
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
