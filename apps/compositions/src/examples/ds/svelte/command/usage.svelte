<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
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
    { label: "Save", value: "save", icon: "download", shortcut: ["⌘", "S"] },
    { label: "Copy path", value: "copy-path", icon: "copy", shortcut: ["⌥", "⌘", "C"] },
    { label: "Search in files", value: "search", icon: "search", shortcut: ["⇧", "⌘", "F"] },
    { label: "Toggle terminal", value: "terminal", icon: "code-brackets", shortcut: ["⌃", "`"] },
    { label: "Open settings", value: "settings", icon: "settings", shortcut: ["⌘", ","] },
  ]

  let lastCommand = $state<string>()
  const command = useCommandCollection({ initialItems: commands })
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
          <Icon name="search" /> Search commands...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root onSelect={(details) => (lastCommand = command.collection.find(details.itemValue)?.label)}>
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
            <Command.Empty>No commands found</Command.Empty>
          </Command.List>
          <Command.Footer>
            <HStack gap="1.5">
              <KbdGroup size="sm" variant="subtle">
                <Kbd>↑</Kbd>
                <Kbd>↓</Kbd>
              </KbdGroup>
              Navigate
            </HStack>
            <HStack gap="1.5">
              <Kbd size="sm" variant="subtle">↵</Kbd>
              Run
            </HStack>
            <HStack gap="1.5">
              <Kbd size="sm" variant="subtle">esc</Kbd>
              Close
            </HStack>
          </Command.Footer>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
{#if lastCommand}
  <Text class={css({ mt: "4", color: "fg.muted", textStyle: "sm" })}>
    Ran <span class={css({ color: "fg" })}>{lastCommand}</span>
  </Text>
{/if}
