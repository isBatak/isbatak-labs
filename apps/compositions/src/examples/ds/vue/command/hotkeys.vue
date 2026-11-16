<script setup lang="ts">
import { useFormatHotkey, useHotkeyStore, useHotkeys } from "@ark-ui/vue/hotkeys"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/vue-ui/kbd"
import { SegmentGroup } from "@isbatak/vue-ui/segment-group"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref, watchEffect } from "vue"

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

const open = ref(false)
const scope = ref<Scope>("inbox")
const lastRun = ref<string>()
const store = useHotkeyStore()

watchEffect(() => store.setScope(scope.value))

const run = (item: HotkeyItem, via: string) => {
  lastRun.value = `${item.label} (${via})`
  open.value = false
}

useHotkeys({
  commands: [
    {
      hotkey: "mod+k",
      label: "Open command menu",
      action: () => (open.value = !open.value),
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
  initialItems: items.filter((item) => !item.scope || item.scope === scope.value),
  groupBy: (item: HotkeyItem) => item.group,
}))

const formatHotkey = useFormatHotkey()
const keysOf = (hotkey: string) => hotkey.split(">").flatMap((step) => formatHotkey.value(step).split(" "))

const onSelect = (details: Command.SelectionDetails) => {
  const item = command.collection.find(details.itemValue)
  if (item) run(item, "menu")
}
</script>

<template>
  <Stack gap="4" alignItems="flex-start">
    <SegmentGroup.Root
      size="sm"
      :modelValue="scope"
      aria-label="View"
      @update:modelValue="(value: string | null) => (scope = value === 'issue' ? 'issue' : 'inbox')"
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
    <Command.Provider :value="command">
      <Command.Dialog v-model:open="open">
        <Command.DialogTrigger :asChild="true">
          <Button variant="outline" size="sm" minW="64" justifyContent="space-between" color="fg.muted">
            <HStack gap="2"><Icon name="search" /> Search actions...</HStack>
            <KbdGroup size="sm" variant="subtle">
              <Kbd v-for="key in keysOf('mod+k')" :key="key">{{ key }}</Kbd>
            </KbdGroup>
          </Button>
        </Command.DialogTrigger>
        <Teleport to="body">
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root @select="onSelect">
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Type a command or search..." />
              </Command.Control>
              <Command.List>
                <Command.ItemGroup v-for="[group, groupItems] in command.collection.group()" :key="group">
                  <Command.ItemGroupLabel>{{ group }}</Command.ItemGroupLabel>
                  <Command.Item v-for="item in groupItems" :key="item.value" :item="item">
                    <Icon :name="item.icon" />
                    <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                    <Command.ItemCommand v-for="(key, index) in keysOf(item.hotkey)" :key="`${key}-${index}`">
                      {{ key }}
                    </Command.ItemCommand>
                  </Command.Item>
                </Command.ItemGroup>
                <Command.Empty>No commands found</Command.Empty>
              </Command.List>
            </Command.Root>
          </Command.DialogContent>
        </Teleport>
      </Command.Dialog>
    </Command.Provider>
    <Text textStyle="sm" color="fg.muted">
      {{ lastRun ? `Ran ${lastRun}` : "Try G then I, or C, with the menu closed" }}
    </Text>
  </Stack>
</template>
