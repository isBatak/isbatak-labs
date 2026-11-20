<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  group: string
  icon: IconName
  shortcut?: string[]
}

const commands: CommandItem[] = [
  { label: "Create issue", value: "create-issue", group: "Issues", icon: "file", shortcut: ["C"] },
  { label: "Change status", value: "change-status", group: "Issues", icon: "circle-dot", shortcut: ["S"] },
  { label: "Assign to...", value: "assign", group: "Issues", icon: "account", shortcut: ["A"] },
  { label: "Copy issue link", value: "copy-link", group: "Issues", icon: "link", shortcut: ["⌘", "⇧", ","] },
  { label: "Archive issue", value: "archive", group: "Issues", icon: "archive" },
  { label: "Go to inbox", value: "inbox", group: "Navigation", icon: "mail", shortcut: ["G", "I"] },
  { label: "Go to my issues", value: "my-issues", group: "Navigation", icon: "align-left", shortcut: ["G", "M"] },
  { label: "Go to projects", value: "projects", group: "Navigation", icon: "folder", shortcut: ["G", "P"] },
  { label: "Toggle sidebar", value: "sidebar", group: "View", icon: "menu", shortcut: ["⌘", "B"] },
  { label: "Duplicate view", value: "duplicate-view", group: "View", icon: "copy" },
  { label: "Switch theme", value: "theme", group: "View", icon: "moon", shortcut: ["⌘", "⇧", "L"] },
]

const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Type a command or search..." />
            </Command.Control>
            <Command.List>
              <Command.ItemGroup v-for="[group, items] in command.collection.group()" :key="group">
                <Command.ItemGroupLabel>{{ group }}</Command.ItemGroupLabel>
                <Command.Item v-for="item in items" :key="item.value" :item="item">
                  <Icon :name="item.icon" />
                  <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                  <Command.ItemCommand v-for="key in item.shortcut" :key="key">{{ key }}</Command.ItemCommand>
                </Command.Item>
              </Command.ItemGroup>
              <Command.Empty>No results found</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
