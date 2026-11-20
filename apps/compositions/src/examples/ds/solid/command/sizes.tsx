import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Stack } from "@isbatak/solid-ui/stack"
import { For } from "solid-js"

export function CommandSizesDemo() {
  return (
    <Stack gap="6" w="full" maxW="sm">
      <SizedCommand size="sm" />
      <SizedCommand size="md" />
      <SizedCommand size="lg" />
    </Stack>
  )
}

function SizedCommand(props: { size: "sm" | "md" | "lg" }) {
  const command = useCommandCollection({ initialItems: commands })

  return (
    <Command.Root command={command} size={props.size} borderWidth="1px">
      <Command.Label>Search commands, size {props.size}</Command.Label>
      <Command.Control>
        <Command.Indicator />
        <Command.Input placeholder={`Search... (size=${props.size})`} />
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
    </Command.Root>
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
  { label: "Save", value: "save", icon: "download", shortcut: ["⌘", "S"] },
  { label: "Open settings", value: "settings", icon: "settings", shortcut: ["⌘", ","] },
]
