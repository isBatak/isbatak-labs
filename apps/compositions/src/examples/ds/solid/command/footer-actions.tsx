import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/solid-ui/kbd"
import { Separator } from "@isbatak/solid-ui/separator"
import { HStack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { For, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandFooterActionsDemo() {
  const command = useCommandCollection({ initialItems: apps, groupBy: (item) => item.group })
  const [highlighted, setHighlighted] = createSignal<AppItem | null>(null)

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search apps and commands...
            </Button>
          )}
        />
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
                <For each={command.collection.group()}>
                  {([group, items]) => (
                    <Command.ItemGroup>
                      <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                      <For each={items}>
                        {(item) => (
                          <Command.Item item={item}>
                            <Icon name={item.icon} />
                            <Command.ItemText highlight>{item.label}</Command.ItemText>
                            <Text as="span" textStyle="xs" color="fg.subtle">
                              {item.type}
                            </Text>
                          </Command.Item>
                        )}
                      </For>
                    </Command.ItemGroup>
                  )}
                </For>
                <Command.Empty>No results found</Command.Empty>
              </Command.List>
              <Command.Footer>
                <Icon name="keyboard" />
                <HStack gap="2" ms="auto" color="fg">
                  <Text as="span" fontWeight="medium">
                    {highlighted()?.action ?? "Open"}
                  </Text>
                  <Kbd size="sm" variant="subtle">
                    ↵
                  </Kbd>
                </HStack>
                <Separator orientation="vertical" h="4" />
                <HStack gap="2">
                  <Text as="span">Actions</Text>
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
  icon: IconName
}

const apps: AppItem[] = [
  {
    label: "Tasks",
    value: "tasks",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: "check-square",
    keywords: ["issues", "todo"],
  },
  {
    label: "Canvas",
    value: "canvas",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: "image",
    keywords: ["design"],
  },
  {
    label: "Messages",
    value: "messages",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: "message",
    keywords: ["chat"],
  },
  {
    label: "Clipboard history",
    value: "clipboard",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: "copy",
    keywords: ["paste", "copy"],
  },
  {
    label: "Search snippets",
    value: "snippets",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: "quote-filled",
    keywords: ["text", "templates"],
  },
  {
    label: "Calculator",
    value: "calculator",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: "divide",
    keywords: ["math", "convert"],
  },
]
