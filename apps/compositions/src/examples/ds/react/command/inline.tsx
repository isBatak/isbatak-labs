import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import type { ReactNode } from "react"

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
  { label: "Calendar", value: "calendar", group: "Suggestions", icon: <Icon name="calendar" /> },
  { label: "Search emoji", value: "emoji", group: "Suggestions", icon: <Icon name="sparkles" /> },
  { label: "Calculator", value: "calculator", group: "Suggestions", icon: <Icon name="divide" /> },
  { label: "Profile", value: "profile", group: "Settings", icon: <Icon name="account" />, shortcut: ["⌘", "P"] },
  { label: "Billing", value: "billing", group: "Settings", icon: <Icon name="shopping-bag" />, shortcut: ["⌘", "B"] },
  { label: "Settings", value: "settings", group: "Settings", icon: <Icon name="settings" />, shortcut: ["⌘", ","] },
]
