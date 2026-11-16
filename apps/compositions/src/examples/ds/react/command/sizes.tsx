import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import type { ReactNode } from "react"
import { Stack } from "styled-system/jsx"

export function CommandSizesDemo() {
  return (
    <Stack gap="6" w="full" maxW="sm">
      <SizedCommand size="sm" />
      <SizedCommand size="md" />
      <SizedCommand size="lg" />
    </Stack>
  )
}

function SizedCommand({ size }: { size: "sm" | "md" | "lg" }) {
  const command = useCommandCollection({ initialItems: commands })

  return (
    <Command.Root command={command} size={size} borderWidth="1px">
      <Command.Label>Search commands, size {size}</Command.Label>
      <Command.Control>
        <Command.Indicator />
        <Command.Input placeholder={`Search... (size=${size})`} />
      </Command.Control>
      <Command.List>
        {command.collection.items.map((item) => (
          <Command.Item item={item} key={item.value}>
            {item.icon}
            <Command.ItemText highlight>{item.label}</Command.ItemText>
            {item.shortcut.map((key) => (
              <Command.ItemCommand key={key}>{key}</Command.ItemCommand>
            ))}
          </Command.Item>
        ))}
        <Command.Empty>No results found</Command.Empty>
      </Command.List>
    </Command.Root>
  )
}

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  icon: ReactNode
  shortcut: string[]
}

const commands: CommandItem[] = [
  { label: "New file", value: "new-file", icon: <Icon name="file" />, shortcut: ["⌘", "N"] },
  { label: "Open file", value: "open-file", icon: <Icon name="folder-open" />, shortcut: ["⌘", "O"] },
  { label: "Save", value: "save", icon: <Icon name="download" />, shortcut: ["⌘", "S"] },
  { label: "Open settings", value: "settings", icon: <Icon name="settings" />, shortcut: ["⌘", ","] },
]
