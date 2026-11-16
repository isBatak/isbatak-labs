import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommand, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/react-ui/kbd"
import { type ReactNode, useEffect, useState } from "react"
import { HStack, styled } from "styled-system/jsx"

export function CommandRootProviderDemo() {
  const [open, setOpen] = useState(false)
  const command = useCommandCollection({ initialItems: commands })
  const store = useCommand({ command, onClose: () => setOpen(false) })

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "k") return
      if (!(event.metaKey || event.ctrlKey)) return
      event.preventDefault()
      setOpen((prev) => !prev)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

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
      <styled.p textStyle="sm" color="fg.muted">
        Last search: <styled.span color="fg">{store.combobox.inputValue || "None"}</styled.span>
      </styled.p>
      <Command.Provider value={command}>
        <Command.Dialog open={open} onOpenChange={(details) => setOpen(details.open)}>
          <Portal>
            <Command.DialogBackdrop />
            <Command.DialogContent>
              <Command.RootProvider value={store}>
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
  icon: ReactNode
  shortcut: string[]
}

const commands: CommandItem[] = [
  { label: "New file", value: "new-file", icon: <Icon name="file" />, shortcut: ["⌘", "N"] },
  { label: "Open file", value: "open-file", icon: <Icon name="folder-open" />, shortcut: ["⌘", "O"] },
  { label: "Save file", value: "save-file", icon: <Icon name="download" />, shortcut: ["⌘", "S"] },
  { label: "Search in files", value: "search", icon: <Icon name="search" />, shortcut: ["⇧", "⌘", "F"] },
  { label: "Toggle terminal", value: "terminal", icon: <Icon name="code-brackets" />, shortcut: ["⌃", "`"] },
  { label: "Open settings", value: "settings", icon: <Icon name="settings" />, shortcut: ["⌘", ","] },
]
