import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandGroupsDemo() {
  const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search...
            </Button>
          )}
        />
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Type a command or search..." />
              </Command.Control>
              <Command.List>
                <For each={command.collection.group()}>
                  {([group, items]) => (
                    <Command.ItemGroup>
                      <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                      <For each={items}>
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
