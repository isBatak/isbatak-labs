import { useFormatHotkey, useHotkeyStore, useHotkeys } from "@ark-ui/solid/hotkeys"
import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/solid-ui/kbd"
import { SegmentGroup } from "@isbatak/solid-ui/segment-group"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { For, createEffect, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandHotkeysDemo() {
  const [open, setOpen] = createSignal(false)
  const [scope, setScope] = createSignal<Scope>("inbox")
  const [lastRun, setLastRun] = createSignal<string>()
  const store = useHotkeyStore()

  createEffect(() => store.setScope(scope()))

  const run = (item: HotkeyItem, via: string) => {
    setLastRun(`${item.label} (${via})`)
    setOpen(false)
  }

  useHotkeys({
    commands: [
      {
        hotkey: "mod+k",
        label: "Open command menu",
        action: () => setOpen((prev) => !prev),
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
    initialItems: items.filter((item) => !item.scope || item.scope === scope()),
    groupBy: (item: HotkeyItem) => item.group,
  }))

  const formatHotkey = useFormatHotkey()
  const keysOf = (hotkey: string) => hotkey.split(">").flatMap((step) => formatHotkey(step).split(" "))

  return (
    <Stack gap="4" alignItems="flex-start">
      <SegmentGroup.Root
        size="sm"
        value={scope()}
        onValueChange={(details) => setScope(details.value === "issue" ? "issue" : "inbox")}
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
        <Command.Dialog open={open()} onOpenChange={(details) => setOpen(details.open)}>
          <Command.DialogTrigger
            asChild={(props) => (
              <Button
                {...props()}
                variant="outline"
                size="sm"
                minW="64"
                justifyContent="space-between"
                color="fg.muted"
              >
                <HStack gap="2">
                  <Icon name="search" /> Search actions...
                </HStack>
                <KbdGroup size="sm" variant="subtle">
                  <For each={keysOf("mod+k")}>{(key) => <Kbd>{key}</Kbd>}</For>
                </KbdGroup>
              </Button>
            )}
          />
          <Portal>
            <Command.DialogBackdrop />
            <Command.DialogContent>
              <Command.Root
                onSelect={(details) => {
                  const item = command.collection.find(details.itemValue)
                  if (item) run(item, "menu")
                }}
              >
                <Command.Control>
                  <Command.Indicator />
                  <Command.Input placeholder="Type a command or search..." />
                </Command.Control>
                <Command.List>
                  <For each={command.collection.group()}>
                    {([group, groupItems]) => (
                      <Command.ItemGroup>
                        <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                        <For each={groupItems}>
                          {(item) => (
                            <Command.Item item={item}>
                              <Icon name={item.icon} />
                              <Command.ItemText highlight>{item.label}</Command.ItemText>
                              <For each={keysOf(item.hotkey)}>
                                {(key) => <Command.ItemCommand>{key}</Command.ItemCommand>}
                              </For>
                            </Command.Item>
                          )}
                        </For>
                      </Command.ItemGroup>
                    )}
                  </For>
                  <Command.Empty>No commands found</Command.Empty>
                </Command.List>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>
      <Text textStyle="sm" color="fg.muted">
        {lastRun() ? `Ran ${lastRun()}` : "Try G then I, or C, with the menu closed"}
      </Text>
    </Stack>
  )
}

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
