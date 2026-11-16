import { Badge } from "@isbatak/solid-ui/badge"
import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { For, Show, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandPrefixSearchDemo() {
  const [prefix, setPrefix] = createSignal<Prefix | null>(null)
  const scope = () => {
    const current = prefix()
    return current ? scopes[current] : null
  }
  const command = useCommandCollection(() => ({
    initialItems: scope()?.items ?? allItems,
    groupBy: (item: SearchItem) => item.group,
  }))

  return (
    <Command.Provider value={command}>
      <Command.Dialog onExitComplete={() => setPrefix(null)}>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search everything...
            </Button>
          )}
        />
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Show when={scope()}>
                  {(current) => (
                    <Badge size="sm" variant="surface" flexShrink="0">
                      <Icon name={current().icon} />
                      {current().label}
                    </Badge>
                  )}
                </Show>
                <Command.Input
                  placeholder={
                    scope() ? `Search ${scope()?.label.toLowerCase()}...` : "Search or type > @ # to filter..."
                  }
                  onKeyDown={(event) => {
                    if (command.query) return
                    if (!prefix() && isPrefix(event.key)) {
                      event.preventDefault()
                      setPrefix(event.key)
                    }
                    if (prefix() && event.key === "Backspace") {
                      event.preventDefault()
                      setPrefix(null)
                    }
                  }}
                />
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
  )
}

interface SearchItem extends Command.ItemData {
  label: string
  value: string
  group: string
  icon: IconName
}

const commandItems: SearchItem[] = [
  { label: "Create new issue", value: "command-new-issue", group: "Commands", icon: "plus" },
  { label: "Search documentation", value: "command-search-docs", group: "Commands", icon: "file-text" },
  {
    label: "Toggle dark mode",
    value: "command-toggle-theme",
    group: "Commands",
    icon: "moon",
    keywords: ["theme"],
  },
]

const peopleItems: SearchItem[] = [
  { label: "Berthe Morisot", value: "person-morisot", group: "People", icon: "account" },
  { label: "Mary Cassatt", value: "person-cassatt", group: "People", icon: "account" },
  { label: "Judith Leyster", value: "person-leyster", group: "People", icon: "account" },
]

const projectItems: SearchItem[] = [
  { label: "Design system", value: "project-design-system", group: "Projects", icon: "folder" },
  { label: "Marketing site", value: "project-marketing", group: "Projects", icon: "folder" },
  { label: "Mobile app", value: "project-mobile", group: "Projects", icon: "folder" },
]

const allItems = [...commandItems, ...peopleItems, ...projectItems]

const scopes: Record<Prefix, { label: string; icon: IconName; items: SearchItem[] }> = {
  ">": { label: "Commands", icon: "plus", items: commandItems },
  "@": { label: "People", icon: "account", items: peopleItems },
  "#": { label: "Projects", icon: "folder", items: projectItems },
}

type Prefix = ">" | "@" | "#"

const isPrefix = (value: string): value is Prefix => value in scopes
