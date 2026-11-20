import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/solid-ui/kbd"
import { HStack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { For, Show, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandDemo() {
  const [lastCommand, setLastCommand] = createSignal<string>()
  const command = useCommandCollection({ initialItems: commands })

  return (
    <>
      <Command.Provider value={command}>
        <Command.Dialog>
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
              <Command.Root onSelect={(details) => setLastCommand(command.collection.find(details.itemValue)?.label)}>
                <Command.Control>
                  <Command.Indicator />
                  <Command.Input placeholder="Type a command or search..." />
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
      <Show when={lastCommand()}>
        <Text mt="4" color="fg.muted" textStyle="sm">
          Ran{" "}
          <Text as="span" color="fg">
            {lastCommand()}
          </Text>
        </Text>
      </Show>
    </>
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
  { label: "Copy path", value: "copy-path", icon: "copy", shortcut: ["⌥", "⌘", "C"] },
  { label: "Search in files", value: "search", icon: "search", shortcut: ["⇧", "⌘", "F"] },
  { label: "Toggle terminal", value: "terminal", icon: "code-brackets", shortcut: ["⌃", "`"] },
  { label: "Open settings", value: "settings", icon: "settings", shortcut: ["⌘", ","] },
]
