<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommand, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Kbd, KbdGroup } from "@isbatak/svelte-ui/kbd"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
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
    { label: "Save file", value: "save-file", icon: "download", shortcut: ["⌘", "S"] },
    { label: "Search in files", value: "search", icon: "search", shortcut: ["⇧", "⌘", "F"] },
    { label: "Toggle terminal", value: "terminal", icon: "code-brackets", shortcut: ["⌃", "`"] },
    { label: "Open settings", value: "settings", icon: "settings", shortcut: ["⌘", ","] },
  ]

  const id = $props.id()
  let open = $state(false)
  const command = useCommandCollection({ initialItems: commands })
  const store = useCommand({ id, command, onClose: () => (open = false) })

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() !== "k") return
    if (!(event.metaKey || event.ctrlKey)) return
    event.preventDefault()
    open = !open
  }
</script>

<svelte:document onkeydown={onKeyDown} />

<HStack gap="4" class={css({ flexWrap: "wrap" })}>
  <Button
    variant="outline"
    size="sm"
    class={css({ minW: "64", justifyContent: "flex-start", color: "fg.muted" })}
    onclick={() => (open = true)}
  >
    <Icon name="search" /> Search commands...
    <KbdGroup size="sm" variant="subtle" class={css({ ms: "auto" })}>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  </Button>
  <Text textStyle="sm" color="fg.muted">
    Last search: <Text as="span" color="fg">{store.combobox().inputValue || "None"}</Text>
  </Text>
  <Command.Provider value={command}>
    <Command.Dialog bind:open>
      <Portal>
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.RootProvider value={store}>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Type a command or search..." />
            </Command.Control>
            <Command.List>
              {#each command.collection.items as item (item.value)}
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
          </Command.RootProvider>
        </Command.DialogContent>
      </Portal>
    </Command.Dialog>
  </Command.Provider>
</HStack>
