import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommand, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/solid-ui/kbd"
import { HStack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { For, createSignal, onCleanup, onMount } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandRootProviderDemo() {
  const [open, setOpen] = createSignal(false)
  const command = useCommandCollection({ initialItems: commands })
  const store = useCommand({ command, onClose: () => setOpen(false) })

  onMount(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "k") return
      if (!(event.metaKey || event.ctrlKey)) return
      event.preventDefault()
      setOpen((prev) => !prev)
    }
    document.addEventListener("keydown", onKeyDown)
    onCleanup(() => document.removeEventListener("keydown", onKeyDown))
  })

  return (
    <HStack gap="4" flexWrap="wrap">
      <Button
        variant="outline"
        size="sm"
        minW="64"
        justifyContent="flex-start"
        color="fg.muted"
        onClick={() => setOpen(true)}
      >
        <Icon name="search" /> Search commands...
        <KbdGroup size="sm" variant="subtle" ms="auto">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <Text textStyle="sm" color="fg.muted">
        Last search:{" "}
        <Text as="span" color="fg">
          {store.combobox().inputValue || "None"}
        </Text>
      </Text>
      <Command.Provider value={command}>
        <Command.Dialog open={open()} onOpenChange={(details) => setOpen(details.open)}>
          <Portal>
            <Command.DialogBackdrop />
            <Command.DialogContent>
              <Command.RootProvider value={store}>
                <Command.Control>
                  <Command.Indicator />
                  <Command.Input placeholder="Type a command or search..." />
                </Command.Control>
                <Command.List>
                  <For each={command.collection.items}>
                    {(item) => (
                      <Command.Item item={item}>
                        <Icon name={item.icon} />
                        <Command.ItemText highlight>{item.label}</Command.ItemText>
                        <For each={item.shortcut}>{(key) => <Command.ItemCommand>{key}</Command.ItemCommand>}</For>
                      </Command.Item>
                    )}
                  </For>
                  <Command.Empty>No results found</Command.Empty>
                </Command.List>
              </Command.RootProvider>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>
    </HStack>
  )
}

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
