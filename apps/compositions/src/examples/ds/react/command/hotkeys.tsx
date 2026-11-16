import { useFormatHotkey, useHotkeyStore, useHotkeys } from "@ark-ui/react/hotkeys"
import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/react-ui/kbd"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { type ReactNode, useEffect, useMemo, useState } from "react"
import { HStack, Stack, styled } from "styled-system/jsx"

export function CommandHotkeysDemo() {
  const [open, setOpen] = useState(false)
  const [scope, setScope] = useState<Scope>("inbox")
  const [lastRun, setLastRun] = useState<string>()
  const store = useHotkeyStore()

  useEffect(() => {
    store.setScope(scope)
  }, [store, scope])

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

  const available = useMemo(() => items.filter((item) => !item.scope || item.scope === scope), [scope])
  const command = useCommandCollection({ initialItems: available, groupBy: (item) => item.group })

  const formatHotkey = useFormatHotkey()
  const keysOf = (hotkey: string) => hotkey.split(">").flatMap((step) => formatHotkey(step).split(" "))

  return (
    <Stack gap="4" alignItems="flex-start">
      <SegmentGroup.Root
        size="sm"
        value={scope}
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
        <Command.Dialog open={open} onOpenChange={(details) => setOpen(details.open)}>
          <Command.DialogTrigger asChild>
            <Button variant="outline" size="sm" minW="64" justifyContent="space-between" color="fg.muted">
              <HStack gap="2">
                <Icon name="search" /> Search actions...
              </HStack>
              <KbdGroup size="sm" variant="subtle">
                {keysOf("mod+k").map((key) => (
                  <Kbd key={key}>{key}</Kbd>
                ))}
              </KbdGroup>
            </Button>
          </Command.DialogTrigger>
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
                  {command.collection.group().map(([group, groupItems]) => (
                    <Command.ItemGroup key={group}>
                      <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                      {groupItems.map((item) => (
                        <Command.Item item={item} key={item.value}>
                          {item.icon}
                          <Command.ItemText highlight>{item.label}</Command.ItemText>
                          {keysOf(item.hotkey).map((key, index) => (
                            <Command.ItemCommand key={`${key}-${index}`}>{key}</Command.ItemCommand>
                          ))}
                        </Command.Item>
                      ))}
                    </Command.ItemGroup>
                  ))}
                  <Command.Empty>No commands found</Command.Empty>
                </Command.List>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>
      <styled.p textStyle="sm" color="fg.muted">
        {lastRun ? `Ran ${lastRun}` : "Try G then I, or C, with the menu closed"}
      </styled.p>
    </Stack>
  )
}

type Scope = "inbox" | "issue"

interface HotkeyItem extends Command.ItemData {
  label: string
  value: string
  group: string
  icon: ReactNode
  hotkey: string
  scope?: Scope
}

const items: HotkeyItem[] = [
  { label: "Create issue", value: "create-issue", group: "General", icon: <Icon name="edit" />, hotkey: "c" },
  { label: "Go to inbox", value: "go-inbox", group: "General", icon: <Icon name="mail" />, hotkey: "g>i" },
  {
    label: "Go to my issues",
    value: "go-my-issues",
    group: "General",
    icon: <Icon name="check-square" />,
    hotkey: "g>m",
  },
  {
    label: "Archive notification",
    value: "archive",
    group: "Inbox",
    icon: <Icon name="archive" />,
    hotkey: "e",
    scope: "inbox",
  },
  {
    label: "Snooze notification",
    value: "snooze",
    group: "Inbox",
    icon: <Icon name="clock" />,
    hotkey: "h",
    scope: "inbox",
  },
  {
    label: "Assign to me",
    value: "assign-me",
    group: "Issue",
    icon: <Icon name="account" />,
    hotkey: "i",
    scope: "issue",
  },
  {
    label: "Change status",
    value: "change-status",
    group: "Issue",
    icon: <Icon name="circle-dot" />,
    hotkey: "s",
    scope: "issue",
  },
  {
    label: "Copy issue ID",
    value: "copy-id",
    group: "Issue",
    icon: <Icon name="copy" />,
    hotkey: "mod+.",
    scope: "issue",
  },
]
