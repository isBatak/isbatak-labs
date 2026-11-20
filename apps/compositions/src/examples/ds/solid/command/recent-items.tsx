import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { For, createMemo, createSignal, onMount } from "solid-js"
import { Portal } from "solid-js/web"

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

export function CommandRecentItemsDemo() {
  const [recent, setRecent] = createSignal<string[]>([])
  const [searching, setSearching] = createSignal(false)

  onMount(() => setRecent(readRecent()))

  const items = createMemo(() => {
    if (searching()) return commands
    const recentItems = recent()
      .map((value) => commands.find((item) => item.value === value))
      .filter((item): item is CommandItem => item != null)
      .map((item) => ({ ...item, value: `recent:${item.value}`, group: "Recent" }))
    return [...recentItems, ...commands]
  })

  const command = useCommandCollection(() => ({ initialItems: items(), groupBy: (item: CommandItem) => item.group }))

  return (
    <Command.Provider value={command}>
      <Command.Dialog onExitComplete={() => setSearching(false)}>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search commands...
            </Button>
          )}
        />
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root
              onInputValueChange={(details) => setSearching(details.inputValue !== "")}
              onSelect={(details) => {
                const value = details.itemValue.replace(/^recent:/, "")
                const next = [value, ...recent().filter((item) => item !== value)].slice(0, MAX_RECENT)
                setRecent(next)
                writeRecent(next)
              }}
            >
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Type a command or search..." />
              </Command.Control>
              <Command.List>
                <For each={command.collection.group()}>
                  {([group, groupItems]) => (
                    <Command.ItemGroup>
                      <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                      <For each={groupItems}>
                        {(item) => (
                          <Command.Item item={item}>
                            <Icon name={item.icon} />
                            <Command.ItemText highlight>{item.label}</Command.ItemText>
                            <For each={item.shortcut}>{(key) => <Command.ItemCommand>{key}</Command.ItemCommand>}</For>
                          </Command.Item>
                        )}
                      </For>
                    </Command.ItemGroup>
                  )}
                </For>
                <Command.Empty>No results found</Command.Empty>
              </Command.List>
            </Command.Root>
          </Command.DialogContent>
        </Portal>
      </Command.Dialog>
    </Command.Provider>
  )
}

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
