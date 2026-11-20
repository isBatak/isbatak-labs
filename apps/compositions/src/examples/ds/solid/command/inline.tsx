import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { For } from "solid-js"

export function CommandInlineDemo() {
  const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })

  return (
    <Command.Root command={command} maxW="sm" borderWidth="1px" shadow="xs">
      <Command.Label>Search commands</Command.Label>
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
  { label: "Calendar", value: "calendar", group: "Suggestions", icon: "calendar" },
  { label: "Search emoji", value: "emoji", group: "Suggestions", icon: "sparkles" },
  { label: "Calculator", value: "calculator", group: "Suggestions", icon: "divide" },
  { label: "Profile", value: "profile", group: "Settings", icon: "account", shortcut: ["⌘", "P"] },
  { label: "Billing", value: "billing", group: "Settings", icon: "shopping-bag", shortcut: ["⌘", "B"] },
  { label: "Settings", value: "settings", group: "Settings", icon: "settings", shortcut: ["⌘", ","] },
]
