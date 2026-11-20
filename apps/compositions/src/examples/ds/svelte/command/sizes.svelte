<script lang="ts">
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"

  interface CommandItem extends Command.ItemData {
    label: string
    value: string
    icon: IconName
    shortcut: string[]
  }

  const commands: CommandItem[] = [
    { label: "New file", value: "new-file", icon: "file", shortcut: ["⌘", "N"] },
    { label: "Open file", value: "open-file", icon: "folder-open", shortcut: ["⌘", "O"] },
    { label: "Save", value: "save", icon: "download", shortcut: ["⌘", "S"] },
    { label: "Open settings", value: "settings", icon: "settings", shortcut: ["⌘", ","] },
  ]

  const small = useCommandCollection({ initialItems: commands })
  const medium = useCommandCollection({ initialItems: commands })
  const large = useCommandCollection({ initialItems: commands })
</script>

<Stack gap="6" class={css({ w: "full", maxW: "sm" })}>
  <Command.Root command={small} size="sm" class={css({ borderWidth: "1px" })}>
    <Command.Label>Search commands, size sm</Command.Label>
    <Command.Control>
      <Command.Indicator />
      <Command.Input placeholder="Search... (size=sm)" />
    </Command.Control>
    <Command.List>
      {#each small.collection.items as item (item.value)}
        <Command.Item {item}>
          <Icon name={item.icon} />
          <Command.ItemText text={item.label} highlight />
          {#each item.shortcut as key (key)}
            <Command.ItemCommand>{key}</Command.ItemCommand>
          {/each}
        </Command.Item>
      {/each}
      <Command.Empty>No results found</Command.Empty>
    </Command.List>
  </Command.Root>
  <Command.Root command={medium} size="md" class={css({ borderWidth: "1px" })}>
    <Command.Label>Search commands, size md</Command.Label>
    <Command.Control>
      <Command.Indicator />
      <Command.Input placeholder="Search... (size=md)" />
    </Command.Control>
    <Command.List>
      {#each medium.collection.items as item (item.value)}
        <Command.Item {item}>
          <Icon name={item.icon} />
          <Command.ItemText text={item.label} highlight />
          {#each item.shortcut as key (key)}
            <Command.ItemCommand>{key}</Command.ItemCommand>
          {/each}
        </Command.Item>
      {/each}
      <Command.Empty>No results found</Command.Empty>
    </Command.List>
  </Command.Root>
  <Command.Root command={large} size="lg" class={css({ borderWidth: "1px" })}>
    <Command.Label>Search commands, size lg</Command.Label>
    <Command.Control>
      <Command.Indicator />
      <Command.Input placeholder="Search... (size=lg)" />
    </Command.Control>
    <Command.List>
      {#each large.collection.items as item (item.value)}
        <Command.Item {item}>
          <Icon name={item.icon} />
          <Command.ItemText text={item.label} highlight />
          {#each item.shortcut as key (key)}
            <Command.ItemCommand>{key}</Command.ItemCommand>
          {/each}
        </Command.Item>
      {/each}
      <Command.Empty>No results found</Command.Empty>
    </Command.List>
  </Command.Root>
</Stack>
