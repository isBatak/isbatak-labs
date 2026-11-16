import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import type { ReactNode } from "react"

export function CommandLinksDemo() {
  const command = useCommandCollection({ initialItems: links, groupBy: (item) => item.group })

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search documentation...
          </Button>
        </Command.DialogTrigger>
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Search documentation..." />
              </Command.Control>
              <Command.List>
                {command.collection.group().map(([group, items]) => (
                  <Command.ItemGroup key={group}>
                    <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                    {items.map((item) => (
                      <Command.Item item={item} key={item.value} asChild>
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.icon}
                          <Command.ItemText highlight>{item.label}</Command.ItemText>
                          <Icon name="external-link" color="fg.subtle" ms="auto" />
                        </a>
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

interface LinkItem extends Command.ItemData {
  label: string
  value: string
  group: string
  href: string
  icon: ReactNode
}

const links: LinkItem[] = [
  {
    label: "Installation",
    value: "installation",
    group: "Design system",
    href: "/ds/installation",
    icon: <Icon name="file-text" />,
    keywords: ["install", "setup"],
  },
  {
    label: "Components",
    value: "components",
    group: "Design system",
    href: "/ds/components",
    icon: <Icon name="components" />,
  },
  {
    label: "Styles",
    value: "styles",
    group: "Design system",
    href: "/ds/styles",
    icon: <Icon name="color-picker" />,
    keywords: ["tokens", "colors"],
  },
  {
    label: "Icons",
    value: "icons",
    group: "Design system",
    href: "/ds/icons",
    icon: <Icon name="star" />,
  },
  {
    label: "GitHub repository",
    value: "github",
    group: "Resources",
    href: "https://github.com/isBatak/isbatak-labs",
    icon: <Icon name="brand-github" />,
    keywords: ["source", "code"],
  },
]
