<script lang="ts">
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
    { label: "Calendar", value: "calendar", group: "Suggestions", icon: "calendar" },
    { label: "Search emoji", value: "emoji", group: "Suggestions", icon: "sparkles" },
    { label: "Calculator", value: "calculator", group: "Suggestions", icon: "divide" },
    { label: "Profile", value: "profile", group: "Settings", icon: "account", shortcut: ["⌘", "P"] },
    { label: "Billing", value: "billing", group: "Settings", icon: "shopping-bag", shortcut: ["⌘", "B"] },
    { label: "Settings", value: "settings", group: "Settings", icon: "settings", shortcut: ["⌘", ","] },
  ]

  const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })
</script>

<Command.Root {command} class={css({ maxW: "sm", borderWidth: "1px", shadow: "xs" })}>
  <Command.Label>Search commands</Command.Label>
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
