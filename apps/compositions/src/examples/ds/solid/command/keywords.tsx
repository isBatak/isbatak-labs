import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandKeywordsDemo() {
  const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search workspace...
            </Button>
          )}
        />
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Label>Workspace commands</Command.Label>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Try ‘preferences’, ‘deploy’, or ‘PR’..." />
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
                            <Stack gap="0" flex="1" minW="0">
                              <Command.ItemText highlight>{item.label}</Command.ItemText>
                              <Text as="span" color="fg.muted" textStyle="xs" truncate>
                                {item.description}
                              </Text>
                            </Stack>
                            <For each={item.shortcut}>{(key) => <Command.ItemCommand>{key}</Command.ItemCommand>}</For>
                          </Command.Item>
                        )}
                      </For>
                    </Command.ItemGroup>
                  )}
                </For>
                <Command.Empty>No matching commands or aliases</Command.Empty>
              </Command.List>
            </Command.Root>
          </Command.DialogContent>
        </Portal>
      </Command.Dialog>
    </Command.Provider>
  )
}

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  group: string
  description: string
  keywords: string[]
  icon: IconName
  shortcut?: string[]
}

const commands: CommandItem[] = [
  {
    label: "Open settings",
    value: "settings",
    group: "Workspace",
    description: "Configure your editor and account",
    keywords: ["preferences", "config"],
    icon: "settings",
    shortcut: ["⌘", ","],
  },
  {
    label: "Toggle terminal",
    value: "terminal",
    group: "Workspace",
    description: "Show or hide the integrated terminal",
    keywords: ["shell", "console"],
    icon: "code-brackets",
    shortcut: ["⌃", "`"],
  },
  {
    label: "Create pull request",
    value: "create-pr",
    group: "Git",
    description: "Open a pull request from this branch",
    keywords: ["PR", "merge request", "review"],
    icon: "brand-github",
  },
  {
    label: "Deploy preview",
    value: "deploy-preview",
    group: "Git",
    description: "Publish a shareable preview build",
    keywords: ["ship", "release", "publish"],
    icon: "send",
  },
]
