<script lang="ts">
  import { useFormatHotkey, useHotkeyStore, useHotkeys } from "@ark-ui/svelte/hotkeys"
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Kbd, KbdGroup } from "@isbatak/svelte-ui/kbd"
  import { SegmentGroup } from "@isbatak/svelte-ui/segment-group"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"

  type Scope = "inbox" | "issue"

  interface HotkeyItem extends Command.ItemData {
    label: string
    value: string
    group: string
    icon: IconName
    hotkey: string
    scope?: Scope
  }

  const items: HotkeyItem[] = [
    { label: "Create issue", value: "create-issue", group: "General", icon: "edit", hotkey: "c" },
    { label: "Go to inbox", value: "go-inbox", group: "General", icon: "mail", hotkey: "g>i" },
    { label: "Go to my issues", value: "go-my-issues", group: "General", icon: "check-square", hotkey: "g>m" },
    { label: "Archive notification", value: "archive", group: "Inbox", icon: "archive", hotkey: "e", scope: "inbox" },
    { label: "Snooze notification", value: "snooze", group: "Inbox", icon: "clock", hotkey: "h", scope: "inbox" },
    { label: "Assign to me", value: "assign-me", group: "Issue", icon: "account", hotkey: "i", scope: "issue" },
    { label: "Change status", value: "change-status", group: "Issue", icon: "circle-dot", hotkey: "s", scope: "issue" },
    { label: "Copy issue ID", value: "copy-id", group: "Issue", icon: "copy", hotkey: "mod+.", scope: "issue" },
  ]

  let open = $state(false)
  let scope = $state<Scope>("inbox")
  let lastRun = $state<string>()
  const store = useHotkeyStore()

  $effect(() => {
    store.setScope(scope)
  })

  const run = (item: HotkeyItem, via: string) => {
    lastRun = `${item.label} (${via})`
    open = false
  }

  useHotkeys({
    commands: [
      {
        hotkey: "mod+k",
        label: "Open command menu",
        action: () => (open = !open),
        options: { enableOnFormTags: true, preventDefault: true },
      },
      ...items.map((item) => ({
        id: item.value,
        hotkey: item.hotkey,
        label: item.label,
        scopes: item.scope ?? "*",
        action: () => run(item, "shortcut"),
        options: { preventDefault: true },
      })),
    ],
  })

  const command = useCommandCollection(() => ({
    initialItems: items.filter((item) => !item.scope || item.scope === scope),
    groupBy: (item: HotkeyItem) => item.group,
  }))

  const formatHotkey = useFormatHotkey()
  const keysOf = (hotkey: string) => hotkey.split(">").flatMap((step) => formatHotkey(step).split(" "))

  const onSelect = (details: Command.SelectionDetails) => {
    const item = command.collection.find(details.itemValue)
    if (item) run(item, "menu")
  }
</script>

<Stack gap="4" align="flex-start">
  <SegmentGroup.Root
    size="sm"
    value={scope}
    onValueChange={(details) => (scope = details.value === "issue" ? "issue" : "inbox")}
    aria-label="View"
  >
    <SegmentGroup.Indicator />
    <SegmentGroup.Item value="inbox">
      <SegmentGroup.ItemText>Inbox view</SegmentGroup.ItemText>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
    <SegmentGroup.Item value="issue">
      <SegmentGroup.ItemText>Issue view</SegmentGroup.ItemText>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  </SegmentGroup.Root>
  <Command.Provider value={command}>
    <Command.Dialog bind:open>
      <Command.DialogTrigger>
        {#snippet asChild(props)}
          <Button
            {...props()}
            variant="outline"
            size="sm"
            class={css({ minW: "64", justifyContent: "space-between", color: "fg.muted" })}
          >
            <HStack gap="2"><Icon name="search" /> Search actions...</HStack>
            <KbdGroup size="sm" variant="subtle">
              {#each keysOf("mod+k") as key (key)}
                <Kbd>{key}</Kbd>
              {/each}
            </KbdGroup>
          </Button>
        {/snippet}
      </Command.DialogTrigger>
      <Portal>
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root {onSelect}>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Type a command or search..." />
            </Command.Control>
            <Command.List>
              {#each command.collection.group() as [group, groupItems] (group)}
                <Command.ItemGroup>
                  <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                  {#each groupItems as item (item.value)}
                    <Command.Item {item}>
                      <Icon name={item.icon} />
                      <Command.ItemText text={item.label} highlight />
                      {#each keysOf(item.hotkey) as key, index (`${key}-${index}`)}
                        <Command.ItemCommand>{key}</Command.ItemCommand>
                      {/each}
                    </Command.Item>
                  {/each}
                </Command.ItemGroup>
              {/each}
              <Command.Empty>No commands found</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Portal>
    </Command.Dialog>
  </Command.Provider>
  <Text textStyle="sm" color="fg.muted">
    {lastRun ? `Ran ${lastRun}` : "Try G then I, or C, with the menu closed"}
  </Text>
</Stack>
