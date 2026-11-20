import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/react-ui/kbd"
import { type ReactNode, useState } from "react"
import { HStack, styled } from "styled-system/jsx"

export function CommandDemo() {
  const [lastCommand, setLastCommand] = useState<string>()
  const command = useCommandCollection({ initialItems: commands })

  return (
    <>
      <Command.Provider value={command}>
        <Command.Dialog>
          <Command.DialogTrigger asChild>
            <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search commands...
            </Button>
          </Command.DialogTrigger>
          <Portal>
            <Command.DialogBackdrop />
            <Command.DialogContent>
              <Command.Root onSelect={(details) => setLastCommand(command.collection.find(details.itemValue)?.label)}>
                <Command.Control>
                  <Command.Indicator />
                  <Command.Input placeholder="Type a command or search..." />
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
                    <Kbd size="sm" variant="subtle">
                      ↵
                    </Kbd>
                    Run
                  </HStack>
                  <HStack gap="1.5">
                    <Kbd size="sm" variant="subtle">
                      esc
                    </Kbd>
                    Close
                  </HStack>
                </Command.Footer>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>
      {lastCommand && (
        <styled.p mt="4" color="fg.muted" textStyle="sm">
          Ran <styled.span color="fg">{lastCommand}</styled.span>
        </styled.p>
      )}
    </>
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
  { label: "Copy path", value: "copy-path", icon: <Icon name="copy" />, shortcut: ["⌥", "⌘", "C"] },
  { label: "Search in files", value: "search", icon: <Icon name="search" />, shortcut: ["⇧", "⌘", "F"] },
  { label: "Toggle terminal", value: "terminal", icon: <Icon name="code-brackets" />, shortcut: ["⌃", "`"] },
  { label: "Open settings", value: "settings", icon: <Icon name="settings" />, shortcut: ["⌘", ","] },
]
