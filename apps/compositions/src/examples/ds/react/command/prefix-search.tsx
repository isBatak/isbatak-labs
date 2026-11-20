import { Portal } from "@ark-ui/react/portal"
import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { type ReactNode, useState } from "react"

export function CommandPrefixSearchDemo() {
  const [prefix, setPrefix] = useState<Prefix | null>(null)
  const scope = prefix ? scopes[prefix] : null
  const command = useCommandCollection({ initialItems: scope ? scope.items : allItems, groupBy: (item) => item.group })

  return (
    <Command.Provider value={command}>
      <Command.Dialog onExitComplete={() => setPrefix(null)}>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search everything...
          </Button>
        </Command.DialogTrigger>
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                {scope && (
                  <Badge size="sm" variant="surface" flexShrink="0">
                    {scope.icon}
                    {scope.label}
                  </Badge>
                )}
                <Command.Input
                  placeholder={scope ? `Search ${scope.label.toLowerCase()}...` : "Search or type > @ # to filter..."}
                  onKeyDown={(event) => {
                    if (command.query) return
                    if (!prefix && isPrefix(event.key)) {
                      event.preventDefault()
                      setPrefix(event.key)
                    }
                    if (prefix && event.key === "Backspace") {
                      event.preventDefault()
                      setPrefix(null)
                    }
                  }}
                />
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
  )
}

interface SearchItem extends Command.ItemData {
  label: string
  value: string
  group: string
  icon: ReactNode
}

const commandItems: SearchItem[] = [
  { label: "Create new issue", value: "command-new-issue", group: "Commands", icon: <Icon name="plus" /> },
  { label: "Search documentation", value: "command-search-docs", group: "Commands", icon: <Icon name="file-text" /> },
  {
    label: "Toggle dark mode",
    value: "command-toggle-theme",
    group: "Commands",
    icon: <Icon name="moon" />,
    keywords: ["theme"],
  },
]

const peopleItems: SearchItem[] = [
  { label: "Berthe Morisot", value: "person-morisot", group: "People", icon: <Icon name="account" /> },
  { label: "Mary Cassatt", value: "person-cassatt", group: "People", icon: <Icon name="account" /> },
  { label: "Judith Leyster", value: "person-leyster", group: "People", icon: <Icon name="account" /> },
]

const projectItems: SearchItem[] = [
  { label: "Design system", value: "project-design-system", group: "Projects", icon: <Icon name="folder" /> },
  { label: "Marketing site", value: "project-marketing", group: "Projects", icon: <Icon name="folder" /> },
  { label: "Mobile app", value: "project-mobile", group: "Projects", icon: <Icon name="folder" /> },
]

const allItems = [...commandItems, ...peopleItems, ...projectItems]

const scopes = {
  ">": { label: "Commands", icon: <Icon name="plus" />, items: commandItems },
  "@": { label: "People", icon: <Icon name="account" />, items: peopleItems },
  "#": { label: "Projects", icon: <Icon name="folder" />, items: projectItems },
}

type Prefix = keyof typeof scopes

const isPrefix = (value: string): value is Prefix => value in scopes
