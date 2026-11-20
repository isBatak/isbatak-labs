import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { type ReactNode, useEffect, useMemo, useState } from "react"

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
  const [recent, setRecent] = useState<string[]>([])
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    setRecent(readRecent())
  }, [])

  const items = useMemo(() => {
    if (searching) return commands
    const recentItems = recent
      .map((value) => commands.find((item) => item.value === value))
      .filter((item): item is CommandItem => item != null)
      .map((item) => ({ ...item, value: `recent:${item.value}`, group: "Recent" }))
    return [...recentItems, ...commands]
  }, [searching, recent])

  const command = useCommandCollection({ initialItems: items, groupBy: (item) => item.group })

  return (
    <Command.Provider value={command}>
      <Command.Dialog onExitComplete={() => setSearching(false)}>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search commands...
          </Button>
        </Command.DialogTrigger>
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root
              onInputValueChange={(details) => setSearching(details.inputValue !== "")}
              onSelect={(details) => {
                const value = details.itemValue.replace(/^recent:/, "")
                const next = [value, ...recent.filter((item) => item !== value)].slice(0, MAX_RECENT)
                setRecent(next)
                writeRecent(next)
              }}
            >
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Type a command or search..." />
              </Command.Control>
              <Command.List>
                {command.collection.group().map(([group, items]) => (
                  <Command.ItemGroup key={group}>
                    <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                    {items.map((item) => (
                      <Command.Item item={item} key={item.value}>
                        {item.icon}
                        <Command.ItemText highlight>{item.label}</Command.ItemText>
                        {item.shortcut.map((key) => (
                          <Command.ItemCommand key={key}>{key}</Command.ItemCommand>
                        ))}
                      </Command.Item>
                    ))}
                  </Command.ItemGroup>
                ))}
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
  icon: ReactNode
  shortcut: string[]
}

const commands: CommandItem[] = [
  { label: "New file", value: "new-file", group: "Commands", icon: <Icon name="file" />, shortcut: ["⌘", "N"] },
  {
    label: "Open file",
    value: "open-file",
    group: "Commands",
    icon: <Icon name="folder-open" />,
    shortcut: ["⌘", "O"],
  },
  { label: "Save file", value: "save-file", group: "Commands", icon: <Icon name="download" />, shortcut: ["⌘", "S"] },
  { label: "Copy selection", value: "copy", group: "Commands", icon: <Icon name="copy" />, shortcut: ["⌘", "C"] },
  {
    label: "Search in files",
    value: "search",
    group: "Commands",
    icon: <Icon name="search" />,
    shortcut: ["⇧", "⌘", "F"],
  },
  {
    label: "Open terminal",
    value: "terminal",
    group: "Commands",
    icon: <Icon name="code-brackets" />,
    shortcut: ["⌃", "`"],
  },
  {
    label: "Open settings",
    value: "settings",
    group: "Commands",
    icon: <Icon name="settings" />,
    shortcut: ["⌘", ","],
  },
]
