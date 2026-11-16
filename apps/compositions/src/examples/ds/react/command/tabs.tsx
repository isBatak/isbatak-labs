import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { Tabs } from "@isbatak/react-ui/tabs"
import { type ReactNode, useMemo, useState } from "react"
import { styled } from "styled-system/jsx"

export function CommandTabsDemo() {
  const [tab, setTab] = useState("all")
  const scopedItems = useMemo(() => (tab === "all" ? items : items.filter((item) => item.category === tab)), [tab])
  const command = useCommandCollection({ initialItems: scopedItems })

  return (
    <Command.Provider value={command}>
      <Command.Dialog onExitComplete={() => setTab("all")}>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search apps, actions and people...
          </Button>
        </Command.DialogTrigger>
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Search apps, actions and people..." />
              </Command.Control>
              <styled.div px="3" py="2" borderBottomWidth="1px">
                <Tabs.Root
                  value={tab}
                  onValueChange={(details) => setTab(details.value ?? "all")}
                  size="sm"
                  variant="subtle"
                >
                  <Tabs.List gap="1">
                    <Tabs.Trigger value="all">All</Tabs.Trigger>
                    <Tabs.Trigger value="apps">Apps</Tabs.Trigger>
                    <Tabs.Trigger value="actions">Actions</Tabs.Trigger>
                    <Tabs.Trigger value="people">People</Tabs.Trigger>
                  </Tabs.List>
                </Tabs.Root>
              </styled.div>
              <Command.List>
                {command.collection.items.map((item) => (
                  <Command.Item item={item} key={item.value}>
                    {item.icon}
                    <Command.ItemText highlight>{item.label}</Command.ItemText>
                    <styled.span textStyle="xs" color="fg.subtle" truncate>
                      {item.description}
                    </styled.span>
                  </Command.Item>
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
  description: string
  category: string
  icon: ReactNode
}

const items: SearchItem[] = [
  { label: "Canvas", value: "canvas", description: "Design workspace", category: "apps", icon: <Icon name="image" /> },
  { label: "Messages", value: "messages", description: "Team chat", category: "apps", icon: <Icon name="message" /> },
  {
    label: "Calendar",
    value: "calendar",
    description: "Today's schedule",
    category: "apps",
    icon: <Icon name="calendar" />,
  },
  {
    label: "Create pull request",
    value: "create-pr",
    description: "From current branch",
    category: "actions",
    icon: <Icon name="brand-github" />,
    keywords: ["github", "review"],
  },
  {
    label: "Deploy to production",
    value: "deploy",
    description: "Ship the latest build",
    category: "actions",
    icon: <Icon name="send" />,
    keywords: ["release", "ship"],
  },
  {
    label: "Invite teammate",
    value: "invite",
    description: "Send a workspace invite",
    category: "actions",
    icon: <Icon name="plus-circle" />,
    keywords: ["member", "add"],
  },
  {
    label: "Berthe Morisot",
    value: "morisot",
    description: "Impressionist painter",
    category: "people",
    icon: <Icon name="account" />,
  },
  {
    label: "Mary Cassatt",
    value: "cassatt",
    description: "Printmaker and painter",
    category: "people",
    icon: <Icon name="account" />,
  },
]
