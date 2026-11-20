<script setup lang="ts">
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Stack } from "@isbatak/vue-ui/stack"

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  icon: IconName
  shortcut: string[]
}

const commands: CommandItem[] = [
  { label: "New file", value: "new-file", icon: "file", shortcut: ["⌘", "N"] },
  { label: "Open file", value: "open-file", icon: "folder-open", shortcut: ["⌘", "O"] },
  { label: "Save", value: "save", icon: "download", shortcut: ["⌘", "S"] },
  { label: "Open settings", value: "settings", icon: "settings", shortcut: ["⌘", ","] },
]

const small = useCommandCollection({ initialItems: commands })
const medium = useCommandCollection({ initialItems: commands })
const large = useCommandCollection({ initialItems: commands })
</script>

<template>
  <Stack gap="6" w="full" maxW="sm">
    <Command.Root :command="small" size="sm" borderWidth="1px">
      <Command.Label>Search commands, size sm</Command.Label>
      <Command.Control>
        <Command.Indicator />
        <Command.Input placeholder="Search... (size=sm)" />
      </Command.Control>
      <Command.List>
        <Command.Item v-for="item in small.collection.items" :key="item.value" :item="item">
          <Icon :name="item.icon" />
          <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
          <Command.ItemCommand v-for="key in item.shortcut" :key="key">{{ key }}</Command.ItemCommand>
        </Command.Item>
        <Command.Empty>No results found</Command.Empty>
      </Command.List>
    </Command.Root>
    <Command.Root :command="medium" size="md" borderWidth="1px">
      <Command.Label>Search commands, size md</Command.Label>
      <Command.Control>
        <Command.Indicator />
        <Command.Input placeholder="Search... (size=md)" />
      </Command.Control>
      <Command.List>
        <Command.Item v-for="item in medium.collection.items" :key="item.value" :item="item">
          <Icon :name="item.icon" />
          <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
          <Command.ItemCommand v-for="key in item.shortcut" :key="key">{{ key }}</Command.ItemCommand>
        </Command.Item>
        <Command.Empty>No results found</Command.Empty>
      </Command.List>
    </Command.Root>
    <Command.Root :command="large" size="lg" borderWidth="1px">
      <Command.Label>Search commands, size lg</Command.Label>
      <Command.Control>
        <Command.Indicator />
        <Command.Input placeholder="Search... (size=lg)" />
      </Command.Control>
      <Command.List>
        <Command.Item v-for="item in large.collection.items" :key="item.value" :item="item">
          <Icon :name="item.icon" />
          <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
          <Command.ItemCommand v-for="key in item.shortcut" :key="key">{{ key }}</Command.ItemCommand>
        </Command.Item>
        <Command.Empty>No results found</Command.Empty>
      </Command.List>
    </Command.Root>
  </Stack>
</template>
