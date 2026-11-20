<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Kbd, KbdGroup } from "@isbatak/svelte-ui/kbd"
  import { Separator } from "@isbatak/svelte-ui/separator"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"

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

  const command = useCommandCollection({ initialItems: apps, groupBy: (item) => item.group })
  let highlighted = $state<AppItem | null>(null)
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
          <Icon name="search" /> Search apps and commands...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root onHighlightChange={(details) => (highlighted = command.collection.find(details.highlightedValue))}>
          <Command.Control>
            <Command.Indicator />
            <Command.Input placeholder="Search for apps and commands..." />
          </Command.Control>
          <Command.List>
            {#each command.collection.group() as [group, items] (group)}
              <Command.ItemGroup>
                <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                {#each items as item (item.value)}
                  <Command.Item {item}>
                    <Icon name={item.icon} />
                    <Command.ItemText text={item.label} highlight />
                    <Text as="span" textStyle="xs" color="fg.subtle">{item.type}</Text>
                  </Command.Item>
                {/each}
              </Command.ItemGroup>
            {/each}
            <Command.Empty>No results found</Command.Empty>
          </Command.List>
          <Command.Footer>
            <Icon name="keyboard" />
            <HStack gap="2" class={css({ ms: "auto", color: "fg" })}>
              <Text as="span" fontWeight="medium">{highlighted?.action ?? "Open"}</Text>
              <Kbd size="sm" variant="subtle">↵</Kbd>
            </HStack>
            <Separator orientation="vertical" class={css({ h: "4" })} />
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
