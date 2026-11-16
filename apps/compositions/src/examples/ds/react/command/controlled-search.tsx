import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { type ReactNode, useState } from "react"
import { HStack, styled } from "styled-system/jsx"

export function CommandControlledSearchDemo() {
  const [query, setQuery] = useState("")
  const command = useCommandCollection({
    initialItems: commands,
    groupBy: (item) => item.group,
    query,
    onQueryChange: setQuery,
  })

  return (
    <>
      <Command.Provider value={command}>
        <Command.Dialog>
          <Command.DialogTrigger asChild>
            <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> {query || "Search commands..."}
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
      <HStack mt="4" gap="2" flexWrap="wrap">
        <styled.span textStyle="sm" color="fg.muted">
          Try
        </styled.span>
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
      <styled.p mt="2" textStyle="sm" color="fg.muted">
        Query: <styled.span color="fg">{query || "empty"}</styled.span>
      </styled.p>
    </>
  )
}

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  group: string
  icon: ReactNode
}

const commands: CommandItem[] = [
  { label: "Create new project", value: "new-project", group: "Projects", icon: <Icon name="folder" /> },
  { label: "Delete project", value: "delete-project", group: "Projects", icon: <Icon name="delete" /> },
  { label: "Invite teammate", value: "invite", group: "Projects", icon: <Icon name="account" /> },
  { label: "Switch theme", value: "theme", group: "Preferences", icon: <Icon name="moon" /> },
  { label: "Open settings", value: "settings", group: "Preferences", icon: <Icon name="settings" /> },
  { label: "Sync settings", value: "sync-settings", group: "Preferences", icon: <Icon name="refresh" /> },
]
