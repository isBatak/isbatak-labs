import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import type { ReactNode } from "react"

export function CommandGroupsDemo() {
  const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search...
          </Button>
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
                {command.collection.group().map(([group, items]) => (
                  <Command.ItemGroup key={group}>
                    <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                    {items.map((item) => (
                      <Command.Item item={item} key={item.value}>
                        {item.icon}
                        <Command.ItemText highlight>{item.label}</Command.ItemText>
                        {item.shortcut?.map((key) => (
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
  shortcut?: string[]
}

const commands: CommandItem[] = [
  { label: "Create issue", value: "create-issue", group: "Issues", icon: <Icon name="file" />, shortcut: ["C"] },
  {
    label: "Change status",
    value: "change-status",
    group: "Issues",
    icon: <Icon name="circle-dot" />,
    shortcut: ["S"],
  },
  { label: "Assign to...", value: "assign", group: "Issues", icon: <Icon name="account" />, shortcut: ["A"] },
  {
    label: "Copy issue link",
    value: "copy-link",
    group: "Issues",
    icon: <Icon name="link" />,
    shortcut: ["⌘", "⇧", ","],
  },
  { label: "Archive issue", value: "archive", group: "Issues", icon: <Icon name="archive" /> },
  { label: "Go to inbox", value: "inbox", group: "Navigation", icon: <Icon name="mail" />, shortcut: ["G", "I"] },
  {
    label: "Go to my issues",
    value: "my-issues",
    group: "Navigation",
    icon: <Icon name="align-left" />,
    shortcut: ["G", "M"],
  },
  {
    label: "Go to projects",
    value: "projects",
    group: "Navigation",
    icon: <Icon name="folder" />,
    shortcut: ["G", "P"],
  },
  { label: "Toggle sidebar", value: "sidebar", group: "View", icon: <Icon name="menu" />, shortcut: ["⌘", "B"] },
  { label: "Duplicate view", value: "duplicate-view", group: "View", icon: <Icon name="copy" /> },
  { label: "Switch theme", value: "theme", group: "View", icon: <Icon name="moon" />, shortcut: ["⌘", "⇧", "L"] },
]
