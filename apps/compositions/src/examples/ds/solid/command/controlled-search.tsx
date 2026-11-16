import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { For, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandControlledSearchDemo() {
  const [query, setQuery] = createSignal("")
  const command = useCommandCollection(() => ({
    initialItems: commands,
    groupBy: (item) => item.group,
    query: query(),
    onQueryChange: setQuery,
  }))

  return (
    <>
      <Command.Provider value={command}>
        <Command.Dialog>
          <Command.DialogTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
                <Icon name="search" /> {query() || "Search commands..."}
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
      <HStack mt="4" gap="2" flexWrap="wrap">
        <Text as="span" textStyle="sm" color="fg.muted">
          Try
        </Text>
        <Button size="xs" variant="subtle" onClick={() => setQuery("theme")}>
          theme
        </Button>
        <Button size="xs" variant="subtle" onClick={() => setQuery("project")}>
          project
        </Button>
        <Button size="xs" variant="subtle" onClick={() => setQuery("settings")}>
          settings
        </Button>
      </HStack>
      <Text mt="2" textStyle="sm" color="fg.muted">
        Query:{" "}
        <Text as="span" color="fg">
          {query() || "empty"}
        </Text>
      </Text>
    </>
  )
}

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  group: string
  icon: IconName
}

const commands: CommandItem[] = [
  { label: "Create new project", value: "new-project", group: "Projects", icon: "folder" },
  { label: "Delete project", value: "delete-project", group: "Projects", icon: "delete" },
  { label: "Invite teammate", value: "invite", group: "Projects", icon: "account" },
  { label: "Switch theme", value: "theme", group: "Preferences", icon: "moon" },
  { label: "Open settings", value: "settings", group: "Preferences", icon: "settings" },
  { label: "Sync settings", value: "sync-settings", group: "Preferences", icon: "refresh" },
]
