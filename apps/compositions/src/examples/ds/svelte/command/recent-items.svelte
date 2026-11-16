<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { onMount } from "svelte"
  import { css } from "styled-system/css"

  interface CommandItem extends Command.ItemData {
    label: string
    value: string
    group: string
    icon: IconName
    shortcut: string[]
  }

  const commands: CommandItem[] = [
    { label: "New file", value: "new-file", group: "Commands", icon: "file", shortcut: ["⌘", "N"] },
    { label: "Open file", value: "open-file", group: "Commands", icon: "folder-open", shortcut: ["⌘", "O"] },
    { label: "Save file", value: "save-file", group: "Commands", icon: "download", shortcut: ["⌘", "S"] },
    { label: "Copy selection", value: "copy", group: "Commands", icon: "copy", shortcut: ["⌘", "C"] },
    { label: "Search in files", value: "search", group: "Commands", icon: "search", shortcut: ["⇧", "⌘", "F"] },
    { label: "Open terminal", value: "terminal", group: "Commands", icon: "code-brackets", shortcut: ["⌃", "`"] },
    { label: "Open settings", value: "settings", group: "Commands", icon: "settings", shortcut: ["⌘", ","] },
  ]

  const STORAGE_KEY = "isbatak-command-recent"
  const MAX_RECENT = 3

  const readRecent = (): string[] => {
    try {
      const value: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")
      return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []
    } catch {
      return []
    }
  }

  const writeRecent = (values: string[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
    } catch {
      return
    }
  }

  let recent = $state.raw<string[]>([])
  let searching = $state(false)

  onMount(() => {
    recent = readRecent()
  })

  const items = $derived.by(() => {
    if (searching) return commands
    const recentItems = recent
      .map((value) => commands.find((item) => item.value === value))
      .filter((item): item is CommandItem => item != null)
      .map((item) => ({ ...item, value: `recent:${item.value}`, group: "Recent" }))
    return [...recentItems, ...commands]
  })

  const command = useCommandCollection(() => ({ initialItems: items, groupBy: (item: CommandItem) => item.group }))

  const remember = (details: Command.SelectionDetails) => {
    const value = details.itemValue.replace(/^recent:/, "")
    const next = [value, ...recent.filter((item) => item !== value)].slice(0, MAX_RECENT)
    recent = next
    writeRecent(next)
  }
</script>

<Command.Provider value={command}>
  <Command.Dialog onExitComplete={() => (searching = false)}>
    <Command.DialogTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          variant="outline"
          size="sm"
          class={css({ minW: "64", justifyContent: "flex-start", color: "fg.muted" })}
        >
          <Icon name="search" /> Search commands...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root onInputValueChange={(details) => (searching = details.inputValue !== "")} onSelect={remember}>
          <Command.Control>
            <Command.Indicator />
            <Command.Input placeholder="Type a command or search..." />
          </Command.Control>
          <Command.List>
            {#each command.collection.group() as [group, groupItems] (group)}
              <Command.ItemGroup>
                <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                {#each groupItems as item (item.value)}
                  <Command.Item {item}>
                    <Icon name={item.icon} />
                    <Command.ItemText text={item.label} highlight />
                    {#each item.shortcut as key (key)}
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
