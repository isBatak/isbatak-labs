<script setup lang="ts">
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
  { label: "Calendar", value: "calendar", group: "Suggestions", icon: "calendar" },
  { label: "Search emoji", value: "emoji", group: "Suggestions", icon: "sparkles" },
  { label: "Calculator", value: "calculator", group: "Suggestions", icon: "divide" },
  { label: "Profile", value: "profile", group: "Settings", icon: "account", shortcut: ["⌘", "P"] },
  { label: "Billing", value: "billing", group: "Settings", icon: "shopping-bag", shortcut: ["⌘", "B"] },
  { label: "Settings", value: "settings", group: "Settings", icon: "settings", shortcut: ["⌘", ","] },
]

const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })
</script>

<template>
  <Command.Root :command="command" maxW="sm" borderWidth="1px" shadow="xs">
    <Command.Label>Search commands</Command.Label>
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
</template>
