import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandLinksDemo() {
  const command = useCommandCollection({ initialItems: links, groupBy: (item) => item.group })

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search documentation...
            </Button>
          )}
        />
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Search documentation..." />
              </Command.Control>
              <Command.List>
                <For each={command.collection.group()}>
                  {([group, items]) => (
                    <Command.ItemGroup>
                      <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                      <For each={items}>
                        {(item) => (
                          <Command.Item
                            item={item}
                            asChild={(props) => (
                              <a {...props()} href={item.href} target="_blank" rel="noreferrer">
                                <Icon name={item.icon} />
                                <Command.ItemText highlight>{item.label}</Command.ItemText>
                                <Icon name="external-link" color="fg.subtle" ms="auto" />
                              </a>
                            )}
                          />
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

interface LinkItem extends Command.ItemData {
  label: string
  value: string
  group: string
  href: string
  icon: IconName
}

const links: LinkItem[] = [
  {
    label: "Installation",
    value: "installation",
    group: "Design system",
    href: "/ds/installation",
    icon: "file-text",
    keywords: ["install", "setup"],
  },
  { label: "Components", value: "components", group: "Design system", href: "/ds/components", icon: "components" },
  {
    label: "Styles",
    value: "styles",
    group: "Design system",
    href: "/ds/styles",
    icon: "color-picker",
    keywords: ["tokens", "colors"],
  },
  { label: "Icons", value: "icons", group: "Design system", href: "/ds/icons", icon: "star" },
  {
    label: "GitHub repository",
    value: "github",
    group: "Resources",
    href: "https://github.com/isBatak/isbatak-labs",
    icon: "brand-github",
    keywords: ["source", "code"],
  },
]
