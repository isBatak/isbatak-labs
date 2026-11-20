import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import type { ReactNode } from "react"
import { Stack, styled } from "styled-system/jsx"

export function CommandKeywordsDemo() {
  const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search workspace...
          </Button>
        </Command.DialogTrigger>
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
                {command.collection.group().map(([group, items]) => (
                  <Command.ItemGroup key={group}>
                    <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                    {items.map((item) => (
                      <Command.Item item={item} key={item.value}>
                        {item.icon}
                        <Stack gap="0" flex="1" minW="0">
                          <Command.ItemText highlight>{item.label}</Command.ItemText>
                          <styled.span color="fg.muted" textStyle="xs" truncate>
                            {item.description}
                          </styled.span>
                        </Stack>
                        {item.shortcut?.map((key) => (
                          <Command.ItemCommand key={key}>{key}</Command.ItemCommand>
                        ))}
                      </Command.Item>
                    ))}
                  </Command.ItemGroup>
                ))}
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
  icon: ReactNode
  shortcut?: string[]
}

const commands: CommandItem[] = [
  {
    label: "Open settings",
    value: "settings",
    group: "Workspace",
    description: "Configure your editor and account",
    keywords: ["preferences", "config"],
    icon: <Icon name="settings" />,
    shortcut: ["⌘", ","],
  },
  {
    label: "Toggle terminal",
    value: "terminal",
    group: "Workspace",
    description: "Show or hide the integrated terminal",
    keywords: ["shell", "console"],
    icon: <Icon name="code-brackets" />,
    shortcut: ["⌃", "`"],
  },
  {
    label: "Create pull request",
    value: "create-pr",
    group: "Git",
    description: "Open a pull request from this branch",
    keywords: ["PR", "merge request", "review"],
    icon: <Icon name="brand-github" />,
  },
  {
    label: "Deploy preview",
    value: "deploy-preview",
    group: "Git",
    description: "Publish a shareable preview build",
    keywords: ["ship", "release", "publish"],
    icon: <Icon name="send" />,
  },
]
