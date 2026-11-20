<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"

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

  const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })
</script>

<Command.Provider value={command}>
  <Command.Dialog>
    <Command.DialogTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          variant="outline"
          size="sm"
          class={css({ minW: "64", justifyContent: "flex-start", color: "fg.muted" })}
        >
          <Icon name="search" /> Search workspace...
        </Button>
      {/snippet}
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
            {#each command.collection.group() as [group, items] (group)}
              <Command.ItemGroup>
                <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                {#each items as item (item.value)}
                  <Command.Item {item}>
                    <Icon name={item.icon} />
                    <Stack gap="0" class={css({ flex: "1", minW: "0" })}>
                      <Command.ItemText text={item.label} highlight />
                      <Text as="span" color="fg.muted" textStyle="xs" truncate>{item.description}</Text>
                    </Stack>
                    {#each item.shortcut ?? [] as key (key)}
                      <Command.ItemCommand>{key}</Command.ItemCommand>
                    {/each}
                  </Command.Item>
                {/each}
              </Command.ItemGroup>
            {/each}
            <Command.Empty>No matching commands or aliases</Command.Empty>
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
