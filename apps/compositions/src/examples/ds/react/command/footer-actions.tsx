import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/react-ui/kbd"
import { Separator } from "@isbatak/react-ui/separator"
import { type ReactNode, useState } from "react"
import { HStack, styled } from "styled-system/jsx"

export function CommandFooterActionsDemo() {
  const command = useCommandCollection({ initialItems: apps, groupBy: (item) => item.group })
  const [highlighted, setHighlighted] = useState<AppItem | null>(null)

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search apps and commands...
          </Button>
        </Command.DialogTrigger>
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root
              onHighlightChange={(details) => setHighlighted(command.collection.find(details.highlightedValue))}
            >
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Search for apps and commands..." />
              </Command.Control>
              <Command.List>
                {command.collection.group().map(([group, items]) => (
                  <Command.ItemGroup key={group}>
                    <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                    {items.map((item) => (
                      <Command.Item item={item} key={item.value}>
                        {item.icon}
                        <Command.ItemText highlight>{item.label}</Command.ItemText>
                        <styled.span textStyle="xs" color="fg.subtle">
                          {item.type}
                        </styled.span>
                      </Command.Item>
                    ))}
                  </Command.ItemGroup>
                ))}
                <Command.Empty>No results found</Command.Empty>
              </Command.List>
              <Command.Footer>
                <Icon name="keyboard" />
                <HStack gap="2" ms="auto" color="fg">
                  <styled.span fontWeight="medium">{highlighted?.action ?? "Open"}</styled.span>
                  <Kbd size="sm" variant="subtle">
                    ↵
                  </Kbd>
                </HStack>
                <Separator orientation="vertical" h="4" />
                <HStack gap="2">
                  <styled.span>Actions</styled.span>
                  <KbdGroup size="sm" variant="subtle">
                    <Kbd>⌘</Kbd>
                    <Kbd>K</Kbd>
                  </KbdGroup>
                </HStack>
              </Command.Footer>
            </Command.Root>
          </Command.DialogContent>
        </Portal>
      </Command.Dialog>
    </Command.Provider>
  )
}

interface AppItem extends Command.ItemData {
  label: string
  value: string
  group: string
  type: string
  action: string
  icon: ReactNode
}

const apps: AppItem[] = [
  {
    label: "Tasks",
    value: "tasks",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: <Icon name="check-square" />,
    keywords: ["issues", "todo"],
  },
  {
    label: "Canvas",
    value: "canvas",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: <Icon name="image" />,
    keywords: ["design"],
  },
  {
    label: "Messages",
    value: "messages",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: <Icon name="message" />,
    keywords: ["chat"],
  },
  {
    label: "Clipboard history",
    value: "clipboard",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: <Icon name="copy" />,
    keywords: ["paste", "copy"],
  },
  {
    label: "Search snippets",
    value: "snippets",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: <Icon name="quote-filled" />,
    keywords: ["text", "templates"],
  },
  {
    label: "Calculator",
    value: "calculator",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: <Icon name="divide" />,
    keywords: ["math", "convert"],
  },
]
